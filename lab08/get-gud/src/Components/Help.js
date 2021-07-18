import { Container } from "react-bootstrap";
import FeedbackForm from "./FeedbackForm.js";

const Help = ({ language }) => {
    return ( 
        <div>
            <Container fluid className="contentContainer">
                <Container fluid className="headerContainer">
                    { language === "eng" ? 
                    <h1 className="header">We Are Here to Help!</h1>:
                    <h1 className="header">Nous Sommes Ici Pour Aider!</h1>
                    }
                    
                </Container>
                <Container fluid className="quoteContainer">
                    { language == "eng" ? 
                    <p className="quote">We are dedicated to providing you the best possible service.
                    If you have any comments, questions, or concerns, please let us know by filling
                    out the form below.</p>:
                    <p className="quote">Nous nous engageons à vous fournir le meilleur service possible. 
                    Si vous avez des commentaires, des questions ou des préoccupations, veuillez nous en 
                    informer en remplissant le formulaire ci-dessous.
                    </p>
                    }
                    
                </Container>
                <FeedbackForm language={language}></FeedbackForm>
            </Container>
        </div>
    );
}

export default Help;