import React from 'react';
import './AudioThumbnail.css';

class AudioThumbnail extends React.Component {

    render () {
        return(
            <div className="audio-thumbnail">
                <a href="https://www.youtube.com/watch?v=uSsYLmJYeY0&list=PLstHXphQeY8_UkMq-eD22nbmLpnQRKp0x" target="_blank" rel="noreferrer">
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