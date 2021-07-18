import { Container } from "react-bootstrap";
import ResponsiveVideoPlayer from "./ResponsiveVideoPlayer";

const GuideVideos = ({ guides }) => {
    return ( 
        <Container>
            {guides.map((guide) => (
                <Container className="guideContainer">
                    <h1>{guide.title}</h1>
                    <ResponsiveVideoPlayer url={guide.url}/>
                </Container>
            ))}
        </Container>
    );
}

export default GuideVideos;