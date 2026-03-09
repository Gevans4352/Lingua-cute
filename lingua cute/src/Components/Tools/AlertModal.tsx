import { useEffect, useRef, type JSX } from "react";

type AlertType = "info" | "success" | "warning" | "danger";

interface AlertModalProps {
  isOpen: boolean;
  type?: AlertType;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  showCancel?: boolean;
}

const icons: Record<AlertType, JSX.Element> = {
  info: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  danger: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
};

const palette: Record<AlertType, { icon: string; confirm: string; confirmHover: string; bg: string; border: string }> = {
  info:    { icon: "#2563eb", confirm: "#2563eb", confirmHover: "#1d4ed8", bg: "#eff6ff", border: "#bfdbfe" },
  success: { icon: "#059669", confirm: "#059669", confirmHover: "#047857", bg: "#f0fdf4", border: "#bbf7d0" },
  warning: { icon: "#d97706", confirm: "#d97706", confirmHover: "#b45309", bg: "#fffbeb", border: "#fde68a" },
  danger:  { icon: "#dc2626", confirm: "#dc2626", confirmHover: "#b91c1c", bg: "#fff9f9", border: "#fecaca" },
};

const AlertModal = ({
  isOpen,
  type = "info",
  title,
  message,
  confirmLabel = "OK",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  showCancel = false,
}: AlertModalProps) => {
  const confirmRef = useRef<HTMLButtonElement>(null);
  const colors = palette[type];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => confirmRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape" && onCancel) onCancel();
      if (e.key === "Enter") onConfirm();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onConfirm, onCancel]);

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .am-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(3px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 16px;
          animation: am-fade-in 0.18s ease;
        }
        @keyframes am-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .am-card {
          background: white;
          border-radius: 20px;
          padding: 32px 28px 28px;
          max-width: 420px;
          width: 100%;
          box-shadow: 0 24px 64px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08);
          animation: am-slide-up 0.22s cubic-bezier(0.34, 1.4, 0.64, 1);
          border: 1.5px solid ${colors.border};
        }
        @keyframes am-slide-up {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        .am-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: ${colors.bg};
          border: 1.5px solid ${colors.border};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${colors.icon};
          margin-bottom: 18px;
        }
        .am-icon-wrap svg { width: 26px; height: 26px; }
        .am-title {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .am-message {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 26px;
        }
        .am-actions {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
          flex-wrap: wrap;
        }
        .am-btn {
          padding: 10px 22px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.34, 1.4, 0.64, 1);
          border: 1.5px solid transparent;
          outline: none;
        }
        .am-btn:active { transform: scale(0.97); }
        .am-btn-cancel {
          background: #f9fafb;
          border-color: #e5e7eb;
          color: #374151;
        }
        .am-btn-cancel:hover {
          background: #f3f4f6;
          border-color: #d1d5db;
          transform: translateY(-1px);
        }
        .am-btn-confirm {
          background: ${colors.confirm};
          color: white;
        }
        .am-btn-confirm:hover {
          background: ${colors.confirmHover};
          transform: translateY(-1px);
          box-shadow: 0 4px 12px ${colors.confirm}55;
        }
        .am-btn-confirm:focus-visible {
          box-shadow: 0 0 0 3px ${colors.confirm}44;
        }
        @media (max-width: 480px) {
          .am-card { padding: 24px 20px 20px; }
          .am-actions { flex-direction: column-reverse; }
          .am-btn { width: 100%; text-align: center; padding: 12px; }
        }
      `}</style>

      <div className="am-overlay" onClick={onCancel ?? onConfirm}>
        <div className="am-card" onClick={(e) => e.stopPropagation()}>
          <div className="am-icon-wrap">{icons[type]}</div>
          <div className="am-title">{title}</div>
          <div className="am-message">{message}</div>
          <div className="am-actions">
            {showCancel && onCancel && (
              <button className="am-btn am-btn-cancel" onClick={onCancel}>
                {cancelLabel}
              </button>
            )}
            <button ref={confirmRef} className="am-btn am-btn-confirm" onClick={onConfirm}>
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertModal;