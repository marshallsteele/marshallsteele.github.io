import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import iron from '../images/Iron.png';
import bronze from '../images/Bronze.png';
import silver from '../images/Silver.png';
import gold from '../images/Gold.png';
import platinum from '../images/Platinum.png';
import diamond from '../images/Diamond.png';
import master from '../images/Master.png';
import grandmaster from '../images/Grandmaster.png';
import challenger from '../images/Challenger.png';

const Home = () => {

    return ( 
        <Container fluid className="contentContainer">
            <Container fluid className="headerContainer">
                <h1 className="header">Welcome to <br/> GetGud Boosting</h1>
            </Container>

            {/* Images sourced from https://leagueoflegends.fandom.com/wiki/Rank_(League_of_Legends) */}
            <Row className="justify-content-center">
                <Col xs={6} lg={2}>
                    <img style={{width:"100%"}} src={iron} alt="Iron Rank Shield"></img>
                </Col>
                <Col xs={6} lg={2}>
                    <img style={{width:"100%"}} src={bronze} alt="Bronze Rank Shield"></img>
                </Col>
                <Col xs={6} lg={2}>
                    <img style={{width:"100%"}} src={silver} alt="Silver Rank Shield"></img>
                </Col>
                <Col xs={6} lg={2}>
                    <img style={{width:"100%"}} src={gold} alt="Gold Rank Shield"></img>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={6} lg={2}>
                    <img style={{width:"100%"}} src={platinum} alt="Platinum Rank Shield"></img>
                </Col>
                <Col xs={6} lg={2}>
                    <img style={{width:"100%"}} src={diamond} alt="Diamond Rank Shield"></img>
                </Col>
                <Col xs={6} lg={2}>
                    <img style={{width:"100%"}} src={master} alt="Master Rank Shield"></img>
                </Col>
                <Col xs={6} lg={2}>
                    <img style={{width:"100%"}} src={grandmaster} alt="Grandmaster Rank Shield"></img>
                </Col>
                <Col xs={6} lg={2}>
                    <img style={{width:"100%"}} src={challenger} alt="Challenger Rank Shield"></img>
                </Col>
            </Row>
            <Container fluid className="quoteContainer">
                <p className="quote">The service dedicated to improving your LOL experience.</p>
            </Container>
            <Container fluid className="headerContainer">
                <h1 className="header">Get Started:</h1>
            </Container>
            <Row>
                <Col className="d-flex justify-content-center" xs={12} lg={6}>
                    <Link className="homepageButton" to="/boosters">
                        Select a Booster
                    </Link>
                </Col>
                <Col className="d-flex justify-content-center" xs={12} lg={6}>
                    <Link className="homepageButton" to="/guides">
                        Learn the Pro Skills
                    </Link>
                </Col>
            </Row>

        </Container>
    );
}

export default Home;