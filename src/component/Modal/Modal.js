import React from "react";

const Modal = ({ label, modalId, title, modalBody, modalSize }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary m-1"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
        data-bs-whatever="@mdo"
      >
        {label}
      </button>

      <div
        className="modal fade"
        id={`${modalId}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className={`modal-dialog ${modalSize}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{modalBody}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                CONFIRM
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;