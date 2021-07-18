import { Container } from "react-bootstrap";
import BoosterSummary from "./BoosterSummary";
import WriteReviewModal from "./WriteReviewModal";
import RequestBoostModal from "./RequestBoostModal";
import { useState } from "react";
import taric from "../images/taric.png";
import jinx from "../images/jinx.png";
import tahm from "../images/tahm.png";
import graves from "../images/graves.png";
import neeko from "../images/neeko.png";
import aatrox from "../images/aatrox.png";

const Boosters = () => {

    //images from https://leagueoflegends.fandom.com/wiki/Summoner_icon
    const [boosters] = useState([
        { id: 1, name: "Neeko", rank: "Master", photo: neeko, 
            reviews: [{id: 0, stars: 5, name: "Athos", comment: "I was hard stuck Iron before Neeko boosted my account. Now I'm at the rank I should be. Thanks Neeko!"}, 
                {id: 1, stars: 5, name: "Kyle", comment: "My account was boosted from Gold to Master in only 1 week. This is the best service I have every used!"},
                {id: 2, stars: 4, name: "Sara", comment: "Neeko is the best! I love playing League but I like bragging about my rank more! Now all my friends are jealous of me! :D"},
                {id: 3, stars: 5, name: "Marry", comment: "I will never use another boosting service. Neeko and GetGud Boosting delivered exactly what I ordered in only 2 weeks."}]
        },
        { id: 2, name: "Graves", rank: "Grandmaster", photo: graves, 
            reviews: [{id: 0, stars: 4, name: "Barry", comment: "I have been playing this game for 10 years. I am Bronze rank. Now I am Diamond. I am happy."}, 
                {id: 1, stars: 5, name: "Claudia", comment: "This is the first boosting service I have ever used. I was nervous at first but am so happy with the results! Now I have a good rank!"},
                {id: 2, stars: 5, name: "Kevin", comment: "I'm no longer playing with noobs! It can be very frustrating playing a game with people below your skill level. Now I don't have to deal with that nightmare."},
                {id: 3, stars: 5, name: "Michael", comment: "Graves did a great job at delivering my boost within a week. I had been working on my Gold promos for a solid month before he saved me."}]
        },
        { id: 3, name: "Aatrox", rank: "Master", photo: aatrox, 
            reviews: [{id: 0, stars: 5, name: "Rachel", comment: "This is the first boosting service I have ever used. I was nervous at first but am so happy with the results! Now I have a good rank!"}, 
                {id: 1, stars: 5, name: "Jared", comment: "I was hard stuck Iron before Neeko boosted my account. Now I'm at the rank I should be. Thanks Aatrox!"},
                {id: 2, stars: 5, name: "Paul", comment: "My account was boosted from Gold to Master in only 1 week. This is the best service I have every used!"},
                {id: 3, stars: 5, name: "Mason", comment: "Aatrox did a great job at delivering my boost within a week. I had been working on my Gold promos for a solid month before he saved me."}]
        },
        { id: 4, name: "Jinx", rank: "Challenger", photo: jinx, 
            reviews: [{id: 0, stars: 5, name: "Sydney", comment: "Jinx is the best! I love playing League but I like bragging about my rank more! Now all my friends are jealous of me! :D"}, 
                {id: 1, stars: 5, name: "Riley", comment: "I will never use another boosting service. Jinx and GetGud Boosting delivered exactly what I ordered in only 2 weeks."},
                {id: 2, stars: 4, name: "Marie", comment: "Jinx the hyper carry back at it. She carries my games, now she carries my rank."},
                {id: 3, stars: 5, name: "Bart", comment: "This is the first boosting service I have ever used. I was nervous at first but am so happy with the results! Now I have a good rank!"}]
        },
        { id: 5, name: "Tahm", rank: "Grandmaster", photo: tahm, 
            reviews: [{id: 0, stars: 5, name: "Tyson", comment: "I will never use another boosting service. Neeko and GetGud Boosting delivered exactly what I ordered in only 2 weeks."}, 
                {id: 1, stars: 4, name: "Cordell", comment: "This is the first boosting service I have ever used. I was nervous at first but am so happy with the results! Now I have a good rank!"},
                {id: 2, stars: 5, name: "Toni", comment: "Tahm did a great job at delivering my boost within a week. I had been working on my Gold promos for a solid month before he saved me."},
                {id: 3, stars: 4, name: "John", comment: "My account was boosted from Gold to Master in only 1 week. This is the best service I have every used!"}]
        },
        { id: 6, name: "Taric", rank: "Challenger", photo: taric, 
            reviews: [{id: 0, stars: 4, name: "Kyle", comment: "My account was boosted from Gold to Master in only 1 week. This is the best service I have every used!"}, 
                {id: 1, stars: 4, name: "Cindy", comment: "I was hard stuck Iron before Taric boosted my account. Now I'm at the rank I should be. Thanks Taric!"},
                {id: 2, stars: 5, name: "Cathy", comment: "I have been playing this game for 10 years. I am Bronze rank. Now I am Diamond. I am happy."},
                {id: 3, stars: 4, name: "Pat", comment: "Taric is the best! I love playing League but I like bragging about my rank more! Now all my friends are jealous of me! :D"}]
        }
    ]) 

    const [reviewModalShow, setReviewModalShow] = useState(false);
    const [requestModalShow, setRequestModalShow] = useState(false);

    return ( 
        <Container fluid className="contentContainer">
            <Container fluid className="headerContainer">
                <h1 className="header">Meet Our Boosters</h1>
            </Container>
            {boosters.map((booster) => (
                <BoosterSummary 
                    key={booster.id} 
                    booster={booster} 
                    showReviewModal={() => setReviewModalShow(true)}
                    showRequestModal={() => setRequestModalShow(true)}
                />
            ))}
            <WriteReviewModal
                show={reviewModalShow}
                onHide={() => setReviewModalShow(false)}
            />
            <RequestBoostModal
                show={requestModalShow}
                onHide={() => setRequestModalShow(false)}
            />
        </Container>
    );
}

export default Boosters;