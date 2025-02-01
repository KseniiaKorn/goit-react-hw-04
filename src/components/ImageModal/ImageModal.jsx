import Modal from "react-modal";
import s from './ImageModal.module.css'

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Selected Image"
            className={s.modal}
            overlayClassName={s.overlay}
            shouldCloseOnOverlayClick={true}
        >
            <div>
                <img
                    onClick={onClose}
                    src={image.urls.regular}
                    alt={image.alt_description || "Selected"}
                />
            </div>
        </Modal>
    );
};

export default ImageModal;