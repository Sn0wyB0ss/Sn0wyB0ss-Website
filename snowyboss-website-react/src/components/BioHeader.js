import React from 'react';
import './BioHeader.css';

class BioHeader extends React.Component {

    render () {
        return(
            <div className="bio">
              
              <div className="bio-text">
                  Programmer, video editor, 
                  <br/>
                  music composer.
                  <br/>
                  <br/>
                  Gamedev in my free time.
              </div>

              <div className="bio-links">
                  <a href="https://github.com/Sn0wyB0ss" target="_blank" rel="noreferrer">
                      <img src={require("../assets/image/github.png")} alt="github"/>
                  </a>
                  <a href="https://sn0wyb0ss.itch.io/" target="_blank" rel="noreferrer">
                      <img src={require("../assets/image/itchoio.png")} alt="itch.io"/>
                  </a>
                  <a href="https://www.linkedin.com/in/daniel-soares-alves-482105304/" target="_blank" rel="noreferrer">
                      <img src={require("../assets/image/linkedin.png")} alt="linkedin"/>
                  </a>
                  <a href="https://www.youtube.com/@sn0wyb0ss-26" target="_blank" rel="noreferrer">
                      <img src={require("../assets/image/youtube.png")} alt="youtube"/>
                  </a>
              </div>

            </div>
        );
    }
}

export default BioHeader;