import React from 'react';
import './VideoThumbnail.css';

class VideoThumbnail extends React.Component {

    render () {
        return(
            <iframe className="videoThumbnail"src={this.props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        );
    }
}

export default VideoThumbnail;