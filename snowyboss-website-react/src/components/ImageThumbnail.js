
import React from 'react';
import './ImageThumbnail.css';

class ImageThumbnail extends React.Component {

    render () {
        return(
            <a href={this.props.link} target="_blank" rel="noreferrer">
                <img className ="ImageThumbnail" src={this.props.imagePath} alt={this.props.alternateTitle}/>
            </a>
        );
    }
}

export default ImageThumbnail;