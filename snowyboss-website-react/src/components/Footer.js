import React from 'react';
import './Footer.css';

class Footer extends React.Component {

    render () {
        return(
            <div class="contact">
                <h1>Contact</h1>
                <strong>Contact me at <span style={{color:"red"}}>{this.props.emailAdress}</span></strong>
            </div>
        );
    }
}

export default Footer;