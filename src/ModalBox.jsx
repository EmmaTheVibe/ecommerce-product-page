import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  bgcolor: "background.paper",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  border: "none",
};

export default function ModalBox({ children, openModal, handleClose }) {
  return (
    <Modal
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div style={style}>
        <div className="closer-line">
          <span onClick={handleClose} className="closer">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="hsl(26, 100%, 55%)"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </div>

        {children}
      </div>
    </Modal>
  );
}
