import { useEffect } from "react";
import { X } from "lucide-react";

/** Small popup message. `toast` is { id, message } or null; it hides itself after `duration` ms. */
export default function Toast({ toast, onClose, duration = 2800 }) {
  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [toast, duration, onClose]);

  if (!toast) return null;
  return (
    <div className="toast" role="status" aria-live="polite">
      <span>{toast.message}</span>
      <button
        type="button"
        className="toast__close"
        onClick={onClose}
        aria-label="Dismiss message"
      >
        <X size={16} />
      </button>
    </div>
  );
}
