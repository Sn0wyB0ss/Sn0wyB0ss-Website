import React from 'react';
import './AudioThumbnail.css';

class AudioThumbnail extends React.Component {

    render () {
        return(
            <div className="audio-thumbnail">
                <a href="https://youtu.be/ajBeX6_QgHs?si=1rw2SO1Ua3GDzEF-" target="_blank">
                    <img className="audio-img" src={this.props.image} alt="undertaleremix"/>
                </a>
                <audio controls loop> 
                    <source src={this.props.audio} type="audio/mpeg"/>
                </audio>
            </div>
        );
    }
}

export default AudioThumbnail;