import React from 'react';
import './BackgroundVideo.css';

class BackgroundVideo extends React.Component {

    render () {
        return(
            <video autoplay muted loop className="background-video">
                <source src={require("../assets/video/TileEditor.mp4")} type="video/mp4"/>
            </video>
        );
    }
}

export default BackgroundVideo;