import React from 'react';
import './BackgroundVideo.css';

<<<<<<< HEAD
=======

>>>>>>> main
class BackgroundVideo extends React.Component {

    render () {
        return(
<<<<<<< HEAD
            <video autoplay muted loop className="background-video">
=======
            <video autoplay muted loop class="background-video">
>>>>>>> main
                <source src={require("../assets/video/TileEditor.mp4")} type="video/mp4"/>
            </video>
        );
    }
}

export default BackgroundVideo;