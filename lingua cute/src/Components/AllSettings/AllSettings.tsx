import { useState } from "react";
import "./AllSettings.scss";
import { MdNotifications, MdPalette, MdLanguage, MdLock, MdWarning } from "react-icons/md";
import AlertModal from "../Tools/AlertModal";

// ── tiny helpers ─────────────────────────────────────────────────────────────

const Toggle = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) => (
  <button
    className={`toggle ${checked ? "toggle--on" : "toggle--off"}`}
    onClick={onChange}
    role="switch"
    aria-checked={checked}
  >
    <span className="toggle__thumb" />
  </button>
);

const SettingRow = ({
  title,
  description,
  checked,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: () => void;
}) => (
  <div className="setting-row">
    <div className="setting-row__text">
      <span className="setting-row__title">{title}</span>
      <span className="setting-row__desc">{description}</span>
    </div>
    <Toggle checked={checked} onChange={onChange} />
  </div>
);

const ActionRow = ({
  title,
  description,
  label,
  variant = "default",
  onClick,
}: {
  title: string;
  description?: string;
  label: string;
  variant?: "default" | "danger";
  onClick?: () => void;
}) => (
  <div className={`action-row ${variant === "danger" ? "action-row--danger" : ""}`}>
    <div className="setting-row__text">
      <span className="setting-row__title">{title}</span>
      {description && <span className="setting-row__desc">{description}</span>}
    </div>
    <button
      className={`action-btn ${variant === "danger" ? "action-btn--danger" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  </div>
);

const Section = ({
  icon,
  iconBg,
  title,
  children,
  variant,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  children: React.ReactNode;
  variant?: "danger";
}) => (
  <div className={`section ${variant === "danger" ? "section--danger" : ""}`}>
    <div className="section__header">
      <div className="section__icon" style={{ background: iconBg }}>
        {icon}
      </div>
      <h2 className="section__title">{title}</h2>
    </div>
    <div className="section__rows">{children}</div>
  </div>
);

// ── modal state type ──────────────────────────────────────────────────────────

type ModalState = {
  isOpen: boolean;
  type: "info" | "success" | "warning" | "danger";
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel?: string;
  showCancel: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
};

const CLOSED_MODAL: ModalState = {
  isOpen: false,
  type: "info",
  title: "",
  message: "",
  confirmLabel: "OK",
  showCancel: false,
  onConfirm: () => {},
};

// ── main component ────────────────────────────────────────────────────────────

const AllSettings = () => {
  const [settings, setSettings] = useState({
    pushNotifications: true,
    dailyReminders: true,
    darkMode: false,
    soundEffects: true,
  });

  const [language, setLanguage] = useState("en");
  const [modal, setModal] = useState<ModalState>(CLOSED_MODAL);

  const closeModal = () => setModal((m) => ({ ...m, isOpen: false }));

  const toggle = (key: keyof typeof settings) =>
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  // ── helpers to open specific modals ────────────────────────────────────────

  const openChangePassword = () =>
    setModal({
      isOpen: true,
      type: "info",
      title: "Change Password",
      message:
        "You'll be redirected to update your account password. Make sure to choose something strong and unique!",
      confirmLabel: "Continue",
      cancelLabel: "Not now",
      showCancel: true,
      onConfirm: () => {
        closeModal();
        // TODO: real navigation / API call
        setTimeout(() =>
          setModal({
            isOpen: true,
            type: "success",
            title: "Redirecting…",
            message: "Taking you to the password update page.",
            confirmLabel: "Got it",
            showCancel: false,
            onConfirm: closeModal,
          }), 200);
      },
      onCancel: closeModal,
    });

  const openDownloadData = () =>
    setModal({
      isOpen: true,
      type: "info",
      title: "Download Your Data",
      message:
        "We'll prepare a full export of your learning data. This may take a few moments — we'll notify you when it's ready.",
      confirmLabel: "Start Download",
      cancelLabel: "Cancel",
      showCancel: true,
      onConfirm: () => {
        closeModal();
        setTimeout(() =>
          setModal({
            isOpen: true,
            type: "success",
            title: "Export Started!",
            message: "Your data export is being prepared. You'll receive a notification once it's ready to download.",
            confirmLabel: "Awesome!",
            showCancel: false,
            onConfirm: closeModal,
          }), 200);
      },
      onCancel: closeModal,
    });

  const openDeleteAccount = () =>
    setModal({
      isOpen: true,
      type: "warning",
      title: "Delete Account?",
      message:
        "This will permanently remove your account and all your learning data. This action cannot be undone.",
      confirmLabel: "Yes, continue",
      cancelLabel: "Keep my account",
      showCancel: true,
      onConfirm: () => {
        closeModal();
        // second confirmation
        setTimeout(() =>
          setModal({
            isOpen: true,
            type: "danger",
            title: "Final Confirmation",
            message:
              "Are you absolutely sure? All your progress, streaks, and data will be gone forever.",
            confirmLabel: "Delete Forever",
            cancelLabel: "Cancel",
            showCancel: true,
            onConfirm: () => {
              closeModal();
              // TODO: real delete API call
              setTimeout(() =>
                setModal({
                  isOpen: true,
                  type: "danger",
                  title: "Account Deleted",
                  message: "Your account has been permanently deleted. We're sorry to see you go.",
                  confirmLabel: "OK",
                  showCancel: false,
                  onConfirm: closeModal,
                }), 200);
            },
            onCancel: closeModal,
          }), 200);
      },
      onCancel: closeModal,
    });

  // ── render ─────────────────────────────────────────────────────────────────

  return (
    <div className="coverEverythingf">
      <h2 className="recalct">Settings</h2>
      <h5 className="recafct">Customize your learning experience</h5>

      <div className="actions-container">

        <Section
          icon={<MdNotifications size={22} color="white" />}
          iconBg="linear-gradient(135deg, #f76b8a, #f43f5e)"
          title="Notifications"
        >
          <SettingRow
            title="Push Notifications"
            description="Get notified about your progress"
            checked={settings.pushNotifications}
            onChange={() => toggle("pushNotifications")}
          />
          <SettingRow
            title="Daily Reminders"
            description="Remind me to practice daily"
            checked={settings.dailyReminders}
            onChange={() => toggle("dailyReminders")}
          />
        </Section>

        <Section
          icon={<MdPalette size={22} color="white" />}
          iconBg="linear-gradient(135deg, #a78bfa, #7c3aed)"
          title="Appearance"
        >
          <SettingRow
            title="Dark Mode"
            description="Switch between light and dark theme"
            checked={settings.darkMode}
            onChange={() => toggle("darkMode")}
          />
          <SettingRow
            title="Sound Effects"
            description="Play sounds for achievements and actions"
            checked={settings.soundEffects}
            onChange={() => toggle("soundEffects")}
          />
        </Section>

        <Section
          icon={<MdLanguage size={22} color="white" />}
          iconBg="linear-gradient(135deg, #34d399, #059669)"
          title="Language & Region"
        >
          <div className="setting-row">
            <div className="setting-row__text">
              <span className="setting-row__title">Interface Language</span>
            </div>
            <select
              className="language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">🇺🇸 English</option>
              <option value="es">🇪🇸 Spanish</option>
              <option value="fr">🇫🇷 French</option>
              <option value="de">🇩🇪 German</option>
              <option value="ja">🇯🇵 Japanese</option>
              <option value="zh">🇨🇳 Chinese</option>
              <option value="ar">🇸🇦 Arabic</option>
            </select>
          </div>
        </Section>

        <Section
          icon={<MdLock size={22} color="white" />}
          iconBg="linear-gradient(135deg, #60a5fa, #2563eb)"
          title="Privacy & Security"
        >
          <ActionRow
            title="Change Password"
            description="Update your account password"
            label="Change"
            onClick={openChangePassword}
          />
          <ActionRow
            title="Download My Data"
            description="Export all your learning data"
            label="Download"
            onClick={openDownloadData}
          />
        </Section>

        <Section
          icon={<MdWarning size={22} color="white" />}
          iconBg="linear-gradient(135deg, #f87171, #dc2626)"
          title="Danger Zone"
          variant="danger"
        >
          <div className="danger-zone__warning">
            Once you delete your account, there is no going back. Please be certain.
          </div>
          <div className="danger-zone__action">
            <button
              className="action-btn action-btn--delete"
              onClick={openDeleteAccount}
            >
              Delete Account
            </button>
          </div>
        </Section>

      </div>

      {/* ── Global Modal ── */}
      <AlertModal
        isOpen={modal.isOpen}
        type={modal.type}
        title={modal.title}
        message={modal.message}
        confirmLabel={modal.confirmLabel}
        cancelLabel={modal.cancelLabel}
        showCancel={modal.showCancel}
        onConfirm={modal.onConfirm}
        onCancel={modal.onCancel ?? closeModal}
      />
    </div>
  );
};

export default AllSettings;