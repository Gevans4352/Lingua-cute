import { useState } from "react";
import "./AllSettings.scss";
import { MdNotifications, MdPalette } from "react-icons/md";

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

const Section = ({
  icon,
  iconBg,
  title,
  children,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="section">
    <div className="section__header">
      <div className="section__icon" style={{ background: iconBg }}>
        {icon}
      </div>
      <h2 className="section__title">{title}</h2>
    </div>
    <div className="section__rows">{children}</div>
  </div>
);

const AllSettings = () => {
  const [settings, setSettings] = useState({
    pushNotifications: true,
    dailyReminders: true,
    darkMode: false,
    soundEffects: true,
  });

  const toggle = (key: keyof typeof settings) =>
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

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

      </div>
    </div>
  );
};

export default AllSettings;