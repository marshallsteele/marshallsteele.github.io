import { Container, Col, Row, Carousel, Button } from "react-bootstrap";
import Rating from '@material-ui/lab/Rating';

const BoosterSummary = ({ booster, showReviewModal, showRequestModal }) => {
    return ( 
        <div>
            {booster.id % 2 === 1 ? (
                <div>
                    <Container fluid key={booster.id} className="boosterSummaryContainer">
                        <Row>
                            <Col sm={12} md={3}>
                            <h1>{booster.name}</h1>
                                <p className="m-0">Rank: {booster.rank}</p>
                                <Row>
                                    <Col xs={12} className="text-center">
                                    <img className="profile-photo" src={booster.photo} alt="Profile Photo"></img>
                                    </Col>
                                    <Col xs={12} className="text-center">
                                    <Button variant="light" onClick={() => showRequestModal()}>
                                        Boost Me!
                                    </Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={12} md={9} className="align-self-center">
                                <Row>
                                    <Col>
                                    <h1>Reviews</h1>
                                    </Col>
                                    <Col className="text-right">
                                        <p className="addReviewLink" onClick={() => showReviewModal()}>add a review</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Carousel className="carouselContainer">
                                        {booster.reviews.map((review) => (
                                            <Carousel.Item key={review.id} className="carouselSlide">
                                                <Carousel.Caption>
                                                    <h3>{review.name}</h3>
                                                    <Rating name="size-large" defaultValue={review.stars} size="large" precision={0.5} readOnly/>
                                                    <p>{review.comment}</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <span className="sectionUnderlineLeft"></span>
                </div>
            ) : (
                <div>
                    <Container fluid key={booster.id} className="boosterSummaryContainer">
                        <Row>
                            <Col xs={{span: 12, order: 2}} sm={{span: 12, order: 2}} md={{span: 9, order: 2}}>
                                <Row>
                                    <Col>
                                    <h1>Reviews</h1>
                                    </Col>
                                    <Col className="text-right">
                                        <p className="addReviewLink" onClick={() => showReviewModal()}>add a review</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Carousel className="carouselContainer">
                                        {booster.reviews.map((review) => (
                                            <Carousel.Item key={review.id} className="carouselSlide">
                                                <Carousel.Caption>
                                                    <h3>{review.name}</h3>
                                                    <Rating name="size-large" defaultValue={review.stars} size="large" precision={0.5} readOnly/>
                                                    <p>{review.comment}</p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Row>
                            </Col>
                            <Col xs={{span: 12, order: 1}} sm={{span: 12, order: 1}} md={{span: 3, order: 3}} className="text-right">
                                <h1>{booster.name}</h1>
                                <p className="m-0">Rank: {booster.rank}</p>
                                <Row>
                                    <Col xs={12} className="text-center">
                                    <img className="profile-photo" src={booster.photo} alt="Profile Photo"></img>
                                    </Col>
                                    <Col xs={12} className="text-center">
                                    <Button variant="light" onClick={() => showRequestModal()}>
                                        Boost Me!
                                    </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <span className="sectionUnderlineRight"></span>
                </div>
            )}
        </div>
    );
}

export default BoosterSummary;
