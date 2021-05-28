import React from 'react';
import HorizonLine from './HorizonLine';
// import { Modal, Button, Form, Container } from 'react-bootstrap';

const MyinfoModal = () => {
    return (
        <>
            {/* <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        My Info
                    </Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>LoL-Nickname</Form.Label>
                            <Form.Control placeholder="Enter your new LoL-Nickname" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button block variant="info" type="button" className="my-3" onClick={onHide}>
                            Change
                        </Button>
                        <HorizonLine />
                        <Button 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled}
                                block
                                style={{
                                    backgroundColor: "#505050", 
                                    borderColor: "#505050",
                                }}
                            >
                                Leave
                            </Button>
                    </Form>
                    </Modal.Body>
            </Container>
        </Modal> */}
        </>
    )
}

export default MyinfoModal
