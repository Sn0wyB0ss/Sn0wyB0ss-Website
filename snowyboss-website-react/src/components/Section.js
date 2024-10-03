
import React from 'react';
import './Section.css';
import ImageThumbnail from './ImageThumbnail.js';
import VideoThumbnail from './VideoThumbnail.js';
import AudioThumbnail from './AudioThumbnail.js';
import ImageGlobal from './ImagesGlobal.js';

class Section extends React.Component {

    setThumbnail() {
        let thumbnail = [];
        for (let i = 0; i < this.props.list.length; i++) {
            if (this.props.isImage) {
                let data = this.props.list[i];
                thumbnail.push(<ImageThumbnail imagePath={data.image} alternateTitle={data.altText} link={data.link}></ImageThumbnail>);
            }
            if (this.props.isVideo) {
                let data = this.props.list[i];
                thumbnail.push(<VideoThumbnail link={data.link}></VideoThumbnail>);
            }
            if (this.props.isAudio) {
                let data = this.props.list[i];
                thumbnail.push(<AudioThumbnail image={data.image} audio={data.audio}></AudioThumbnail>);
            }
        }

        return thumbnail
    }

    render () {

        <ImageThumbnail imagePath={ImageGlobal.punchtildead} alternateTitle="" link="https://sn0wyb0ss.itch.io/punch-till-dead" ></ImageThumbnail>


        return(
            <div className="section">
                <div className="title-section">
                    {this.props.title}
                </div>
                <div className="section-middle">
                    {this.setThumbnail()}
                </div>
            </div>
        );
    }
}

export default Section;