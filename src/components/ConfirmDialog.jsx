import { Trash2 } from 'lucide-react'
import Modal from './Modal.jsx'

export default function ConfirmDialog({ task, onConfirm, onCancel }) {
  return (
    <Modal titleId="confirm-title" descriptionId="confirm-desc" onClose={onCancel} className="modal--small">
      <div className="confirm">
        <span className="confirm__icon" aria-hidden="true">
          <Trash2 size={22} />
        </span>
        <h2 id="confirm-title">Delete this task?</h2>
        <p id="confirm-desc">
          “{task.title}” will be removed from your board. This cannot be undone.
        </p>
        <div className="confirm__actions">
          <button type="button" className="btn btn--ghost" onClick={onCancel} data-autofocus>
            Cancel
          </button>
          <button type="button" className="btn btn--danger" onClick={onConfirm}>
            Delete task
          </button>
        </div>
      </div>
    </Modal>
  )
}
