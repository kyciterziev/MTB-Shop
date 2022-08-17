import Modal from 'react-bootstrap/Modal';
import styles from './Reviews.module.css';

const Reviews = (props) => {

    const { show, handleClose } = props;


    return (
        <>
            <Modal contentClassName={styles.customModalStyle} show={show} onHide={() => handleClose()}>
                <Modal.Header>
                    <Modal.Title>Bike Reviews</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Reviews;