//based on video https://youtu.be/Rq5SEhs9lws

import ReactPlayer from "react-player";

const ResponsiveVideoPlayer = ({ url }) => {
    
    return ( 
        <div className="player-wrapper">
            <ReactPlayer
                className="react-player"
                url={url}
                width="100%"
                height="100%"
                controls={true}
            />
        </div>
    );
}

export default ResponsiveVideoPlayer;