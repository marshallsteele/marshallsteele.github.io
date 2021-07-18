import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Rating from '@material-ui/lab/Rating';

const WriteReviewModal = (props) => {

    const handleSubmit = (event) => {

        alert("Thank you for taking the time to leave a review! It may be included in the reviews displayed next week!")
        props.onHide();
    };

    return ( 
        <div>
            <Modal
                {...props}
                size="lg"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Write a Review
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="pl-5 pr-5 pb-5">
                    <Form>
                        <div className="text-center">
                            <Rating name="size-large" defaultValue={5} size="large"/>
                        </div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <div className="submitRow">
                            <Button variant="light" onClick={() => handleSubmit()}>
                                Submit
                            </Button>
                        </div>
                        
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default WriteReviewModal;