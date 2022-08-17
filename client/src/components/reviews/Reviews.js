import Modal from 'react-bootstrap/Modal';

const Reviews = (props) => {

    const { show, handleClose } = props;


    return (
        <>
            <Modal
                size="lg"
                scrollable={true}
                show={show}
                onHide={() => handleClose()}
            >
                <Modal.Header>
                    <Modal.Title>Bike Reveiws</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Reviews;