import { Col, Container, Row, Dropdown, DropdownButton } from "react-bootstrap";

const Footer = ({ language, setLanguage }) => {
    return ( 
        <div>
            <Container fluid className="p-2" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                <Row>
                    <Col>
                    <DropdownButton size="small" variant="light" title={language === "eng" ? "Language" : "Langue"}>
                        <Dropdown.Item onClick={() => setLanguage("eng")}>English</Dropdown.Item>
                        <Dropdown.Item onClick={() => setLanguage("fr")}>Francais</Dropdown.Item>
                    </DropdownButton>
                    </Col>
                    <Col style={{textAlign:"right"}}>
                        {language === "eng" ? 
                            <div>
                                This website was designed and created by Athos.<br/>
                                For more websites by Athos, visit:
                                <a className="text-light" href="https://marshallsteele.github.io/"> marshallsteele.github.io/</a>
                            </div> 
                        : 
                            <div>
                                Ce site a été conçu et réalisé par Athos.<br/>
                                Pour plus de sites Web Athos, visitez :
                                <a className="text-light" href="https://marshallsteele.github.io/"> marshallsteele.github.io/</a>
                            </div>}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;