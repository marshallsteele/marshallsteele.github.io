import { Modal, Container, Row, Col, Button, Form } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useState } from "react";
import iron from '../images/Iron.png';
import bronze from '../images/Bronze.png';
import silver from '../images/Silver.png';
import gold from '../images/Gold.png';
import platinum from '../images/Platinum.png';
import diamond from '../images/Diamond.png';
import master from '../images/Master.png';
import grandmaster from '../images/Grandmaster.png';
import challenger from '../images/Challenger.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const RequestBoostModal = (props) => {

    const rankedShields = [iron, bronze, silver, gold, platinum, diamond, master, grandmaster, challenger]

    const [ paymentDetailsVisible, setPaymentDetailsVisible ] = useState(false);
    const [ boostingDetailsVisible, setBoostingDetailsVisible ] = useState(true);
    const [ currentRankIndex, setCurrentRankIndex ] = useState(0);
    const [ desiredRankIndex, setDesiredRankIndex ] = useState(1);
    const [ username, setUsername ] = useState("");
    const [ validUsername, setValidUsername ] = useState(true);
    const [ password1, setPassword1 ] = useState("");
    const [ password2, setPassword2 ] = useState("");
    const [ validPassword, setValidPassword ] = useState(true);
    const [ ccv, setCcv ] = useState("");
    const [ validCcv, setValidCcv ] = useState(true);
    const [ email, setEmail ] = useState("");
    const [ validEmail, setValidEmail ] = useState(true);
    const [ creditcard, setCreditcard ] = useState("");
    const [ validCreditCard, setValidCreditCard ] = useState(true);
    const [ price, setprice ] = useState(0);

    const revealPaymentInfo = () => {

        setprice(10*(desiredRankIndex - currentRankIndex));

        if (username.length === 0) {
            setValidUsername(false);
        } else {
            setValidUsername(true);
        }

        if (password1.length === 0 || password2.length === 0 || password1 !== password2) {
            setValidPassword(false);
        } else {
            setValidPassword(true);
        }

        if (email.length === 0) {
            setValidEmail(false);
        } else {
            setValidEmail(true);
        }

        if (email.length !== 0 && username.length !== 0 && password1.length !== 0 && password2.length !== 0 && password1 === password2) {
            setBoostingDetailsVisible(false);
            setPaymentDetailsVisible(true);
        }
    }

    const revealBoostingInfo = () => {
        setPaymentDetailsVisible(false);
        setBoostingDetailsVisible(true);
    }

    const submitBoostRequest = () => {
        var creditFilter = /^\d{4}[\s-]\d{4}[\s-]\d{4}[\s-]\d{4}$/;
        var ccvFilter = /^[0-9]{3}$/;
        if (!creditFilter.test(creditcard)) {
            setValidCreditCard(false);
        } else {
            setValidCreditCard(true);
        }

        if (!ccvFilter.test(ccv)) {
            setValidCcv(false);
        } else {
            setValidCcv(true);
        }
        
        if (creditFilter.test(creditcard) && ccvFilter.test(ccv)) {
            props.onHide();
            revealBoostingInfo();

            alertBooked();

            setEmail("");
            setUsername("");
            setPassword1("");
            setPassword2("");
            setCreditcard("");
            setCcv("");
            setCurrentRankIndex(0);
            setDesiredRankIndex(1);
        }
    }
    
    const alertBooked = () => {
        alert("Thank you for booking a rank boost with GetGud Boosting. We will reach out to " + email + " once the boost has been completed. This usually takes 1-2 weeks on average.")
    }

    const renderAccountInfoTooltip = props => (
        <Tooltip {...props}>Account access is required to play games. Contact us with an concerns you may have regarding this.</Tooltip>
    );

    const renderCcvTooltip = props => (
        <Tooltip {...props}>3 digits on back of card.</Tooltip>
    );

    return ( 
        <div>
        <Modal
            {...props}
            size="lg"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title>
                    <Container fluid className={boostingDetailsVisible ? "" : "d-none"}>
                        <h2>Boosting Details</h2>
                    </Container>
                    <Container fluid className={paymentDetailsVisible ? "" : "d-none"}>
                        <h2>Payment Details</h2>
                    </Container>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="pl-5 pr-5 pb-5">

                <Container id="boostingDetails" className={boostingDetailsVisible ? "" : "d-none"}>
                    <Row>
                        <Col className="text-center">
                            <h4>Current Rank</h4>
                            <Row>
                                <Col className="align-self-center" xs={3}>
                                    <Button 
                                        disabled={currentRankIndex <= 0 ? true: false} 
                                        variant="light" 
                                        className="btn-circle"
                                        onClick={() => setCurrentRankIndex(currentRankIndex - 1)}
                                        >
                                        -
                                    </Button>
                                </Col>
                                <Col xs={6}>
                                    <img style={{width:"100%"}} src={rankedShields[currentRankIndex]} alt="Iron Rank Shield"></img>
                                </Col>
                                <Col className="align-self-center" xs={3}>
                                    <Button 
                                        disabled={currentRankIndex >= 8 ? true: false} 
                                        variant="light" 
                                        className="btn-circle"
                                        onClick={() => setCurrentRankIndex(currentRankIndex + 1)}
                                        >
                                        +
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="text-center">
                        <h4>Desired Rank</h4>
                            <Row>
                                <Col className="align-self-center" xs={3}>
                                    <Button 
                                        disabled={desiredRankIndex <= 0 ? true: false} 
                                        variant="light" 
                                        className="btn-circle"
                                        onClick={() => setDesiredRankIndex(desiredRankIndex - 1)}
                                        >
                                        -
                                    </Button>
                                </Col>
                                <Col xs={6}>
                                    <img style={{width:"100%"}} src={rankedShields[desiredRankIndex]} alt="Iron Rank Shield"></img>
                                </Col>
                                <Col className="align-self-center" xs={3}>
                                    <Button 
                                        disabled={desiredRankIndex >= 8 ? true: false} 
                                        variant="light" 
                                        className="btn-circle" 
                                        onClick={() => setDesiredRankIndex(desiredRankIndex + 1)}
                                        >
                                        +
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <h4>Account Information &nbsp;
                                <OverlayTrigger placement="right" overlay={renderAccountInfoTooltip}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                </OverlayTrigger>
                            </h4>
                        </Col>
                        <Col xs={12}>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                        value={email || ""}
                                        onChange={(e) => setEmail(e.target.value)} 
                                        type="email" 
                                        placeholder="name@example.com"
                                        isInvalid={!validEmail} />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid email address.
                                        </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control 
                                        value={username || ""}
                                        onChange={(e) => setUsername(e.target.value)} 
                                        type="text" 
                                        placeholder="username"
                                        isInvalid={!validUsername} />
                                        <Form.Control.Feedback type="invalid">
                                            Username must be greater than 0 characters.
                                        </Form.Control.Feedback>
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                value={password1 || ""}
                                                onChange={(e) => setPassword1(e.target.value)}
                                                type="password" 
                                                placeholder="password"
                                                isInvalid={!validPassword} />
                                                <Form.Control.Feedback type="invalid">
                                                    Passwords must be greater than 0 characters and must match.
                                                </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                            value={password2 || ""}
                                            onChange={(e) => setPassword2(e.target.value)} 
                                            type="password" 
                                            placeholder="password"
                                            isInvalid={!validPassword} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}></Col>
                        <Col className="text-right" xs={6}>
                            <Button variant="light" onClick={() => revealPaymentInfo()}>
                                Next
                            </Button>
                        </Col>
                    </Row>
                </Container>

                <Container id="paymentDetails" className={paymentDetailsVisible ? "" : "d-none"}>
                <Row>
                        <Col className="text-center" xs={12}>
                            <h4>Price: {price}$</h4>
                        </Col>
                        <Col xs={12}>
                            <Form>
                                <Row>
                                    <Col xs={9}>
                                        <Form.Group>
                                            <Form.Label>Credit Card</Form.Label>
                                            <Form.Control 
                                                value={creditcard || ""}
                                                onChange={(e) => setCreditcard(e.target.value)} 
                                                type="text" 
                                                placeholder="XXXX-XXXX-XXXX-XXXX"
                                                isInvalid={!validCreditCard} />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter a valid credit card number in form XXXX-XXXX-XXXX-XXXX
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                    </Col>
                                    <Col xs={3}>
                                        <Form.Group>
                                            <Form.Label>CCV &nbsp;
                                                <OverlayTrigger placement="top" overlay={renderCcvTooltip}>
                                                    <FontAwesomeIcon icon={faInfoCircle} />
                                                </OverlayTrigger></Form.Label>
                                            <Form.Control 
                                                value={ccv || ""}
                                                onChange={(e) => setCcv(e.target.value)} 
                                                type="text" 
                                                placeholder="XXX"
                                                isInvalid={!validCcv} />
                                            <Form.Control.Feedback type="invalid">
                                                Ccv numbers must be 3 digits long
                                            </Form.Control.Feedback>
                                            </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col xs={12}>
                            <h1><FontAwesomeIcon icon={faCcVisa} />  <FontAwesomeIcon icon={faCcMastercard} /></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                        <Button variant="light" onClick={() => revealBoostingInfo()}>
                                Back
                            </Button>
                        </Col>
                        <Col className="text-right" xs={6}>
                            <Button variant="light" onClick={() => submitBoostRequest()}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    </div>
    );
}

export default RequestBoostModal;