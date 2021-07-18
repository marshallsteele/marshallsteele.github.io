import { Form, Button } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const FeedbackForm = ({ language }) => {

    const [ email, setEmail ] = useState("");
    const [ validEmail, setValidEmail ] = useState(true);
    const [ comment, setComment ] = useState("");
    const [ validComment, setValidComment ] = useState(true);

    const handleSubmit = (event) => {
        if (email.length === 0) {
            setValidEmail(false);
        } else {
            setValidEmail(true);
        }

        if (comment.length === 0) {
            setValidComment(false);
        } else {
            setValidComment(true);
        }
        
        if (email.length !== 0 && comment.length !== 0) {

            sendAlert();

            setEmail("");
            setComment("");
        };
    }

    const sendAlert = () => {
        const message = language === "eng" ? "Thank you for your taking the time to reach out to us! We will email you at " + email + " if there is a need for follow up." 
        : "Merci d'avoir pris le temps de nous contacter ! Nous vous enverrons un e-mail à " + email + " s'il y a un besoin de suivi.";

        alert(message);
    }
    
    const renderTooltip = props => (
        <Tooltip {...props}>{
            language === "eng" ? 
            <div>Email required to respond to concerns.</div>:
            <div>Courriel requis pour répondre aux préoccupations.</div>
        }</Tooltip>
    );

    return ( 
        <div>
            <Form onSubmit={handleSubmit} className="feedbackForm">
                <Form.Group className="mb-3">
                    <Form.Label>
                        { language === "eng" ?
                        <div>Email Address &nbsp; 
                            <OverlayTrigger placement="top" overlay={renderTooltip}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </OverlayTrigger>
                        </div>:
                        <div>Adresse e-mail &nbsp; 
                            <OverlayTrigger placement="top" overlay={renderTooltip}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </OverlayTrigger>
                        </div>}
                    </Form.Label>
                    <Form.Control 
                        value={email || ""}
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email" 
                        placeholder={language === "eng" ? "name@example.com": "nom@exemple.com"}
                        isInvalid={!validEmail} />
                    <Form.Control.Feedback type="invalid">
                        {language === "eng" ?
                        <div>Please enter a valid email address.</div>:
                        <div>S'il vous plaît, mettez une adresse email valide.</div>
                        }
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>
                        { language === "eng" ?
                            <div>Comments</div>:
                            <div>Commentaires</div>
                        }
                    </Form.Label>
                    <Form.Control 
                        value={comment || ""}
                        onChange={(e) => setComment(e.target.value)}
                        as="textarea" 
                        rows={3} 
                        isInvalid={!validComment} />
                    <Form.Control.Feedback type="invalid"> 
                        { language === "eng" ?
                            <div>We want to hear from you! Fill out the comments field to tell us how you feel.</div>:
                            <div>Nous voulons de vos nouvelles! Remplissez le champ de commentaires pour nous dire ce que vous ressentez.</div>
                        }
                    </Form.Control.Feedback>
                </Form.Group>
                <div className="submitRow">
                    <Button variant="light" onClick={() => handleSubmit()}>
                        { language === "eng" ?
                            <div>Submit</div>:
                            <div>Soumettre</div>
                        }
                    </Button>
                </div>
                
            </Form>
        </div>
    );
}

export default FeedbackForm;

/*
STARTED FORM VALIDATION
FINISH FORM VALIDATION AND START ON OTHER PAGES
*/