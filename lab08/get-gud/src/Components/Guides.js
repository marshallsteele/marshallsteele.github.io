import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import GuideVideos from "./GuideVideos";

const beginnerGuides = [
    {title:"What Is League Of Legends?", url:"https://youtu.be/BGtROJeMPeE"},
    {title:"How Do I Use The Item Shop?", url:"https://youtu.be/DA4gQMgcyWw"},
    {title:"What Are Champion And Lane Roles?", url:"https://youtu.be/_06PxBjQr4Q"}
]

const intermediateGuides = [
    {title:"Should I Be Killing Minions?", url:"https://youtu.be/jOSyf1NQspo"},
    {title:"How Can I Maintain Map Control And Not Fall Behind?", url:"https://youtu.be/vHVeltI0IkE"},
    {title:"What Runes Should I Chose?", url:"https://youtu.be/vPY-slW6b5k"}
]

const expertGuides = [
    {title:"How Do I 'Freeze' A Lane?", url:"https://youtu.be/I8qqgVVlN8I"},
    {title:"How Can I Climb The Ranked Ladder?", url:"https://youtu.be/vR9BFQgoYfs"},
    {title:"When Should I Tower Dive?", url:"https://youtu.be/BAwYoH5WsKo"}
]

const Guides = () => {
    
    return ( 
        <Container fluid className="contentContainer">
            <Container fluid className="headerContainer">
                <h1 className="header">Explore Our Guides</h1>
            </Container>
            <Tab.Container id="guide-tabs" defaultActiveKey="beginner">
            <Row className="justify-content-center">
                <Nav className="w-100">
                    <Col xs={12} md={4}>
                    <Nav.Item>
                    <Nav.Link className="guidesTab" eventKey="beginner">Beginner</Nav.Link>
                    </Nav.Item>
                    </Col>
                    <Col xs={12} md={4}>
                    <Nav.Item>
                    <Nav.Link className="guidesTab" eventKey="intermediate">Intermediate</Nav.Link>
                    </Nav.Item>
                    </Col>
                    <Col xs={12} md={4}>
                    <Nav.Item>
                    <Nav.Link className="guidesTab" eventKey="expert">Expert</Nav.Link>
                    </Nav.Item>
                    </Col>
                </Nav>
            </Row>
            <Row>
                <Tab.Content>
                    <Tab.Pane eventKey="beginner">
                        <GuideVideos guides={beginnerGuides}></GuideVideos>
                    </Tab.Pane>
                    <Tab.Pane eventKey="intermediate">
                        <GuideVideos guides={intermediateGuides}></GuideVideos>
                    </Tab.Pane>
                    <Tab.Pane eventKey="expert">
                        <GuideVideos guides={expertGuides}></GuideVideos>
                    </Tab.Pane>
                </Tab.Content>
            </Row>
            </Tab.Container>
        </Container>
    );
}

export default Guides;
