
import React from 'react';
import './Home.css';
import Bio from './Bio.js'

class Home extends React.Component {

    render () {
        return(
            <div className="home">
                <div className="logo">
                    <img src={require("../assets/image/logotest.png")} alt="github"/>
                </div>
                <div className="brief">
                Daniel Soares Alves - 19 Years Old - Brazillian
                </div>         
                <Bio></Bio>
            </div>
        );
    }
}

export default Home;