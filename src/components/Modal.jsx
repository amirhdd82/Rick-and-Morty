import { XCircleIcon } from "@heroicons/react/24/outline";

function Modal({ title, children, Onopen, Open }) {
  if (!Open) return null;
  return (
    <div className="backdrop" onClick={() => Onopen(false)}>
      <div className="modal">
        <div className="modal__header">
          <h2 className="title">{title}</h2>
          <button onClick={() => Onopen(false)}>
            <XCircleIcon className="icon close" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
