import React from 'react';
import './Home.css';
import BioHeader from './BioHeader.js';

class Home extends React.Component {

    returnAge() {
        var birthDate = new Date("2004-06-15");
        var currentDate = new Date();
        var diffDate = currentDate - birthDate;
        var ageDate = new Date(diffDate);
        return Math.abs(ageDate.getUTCFullYear - 1970);
    }

    render () {
        return(
            <div className="home">
                <div className="logo">
                <img src={require("../assets/image/logotest.png")} alt="github"/>
                </div>
                <div className="brief">
                Daniel Soares Alves (Sn0wyB0ss) - {this.returnAge()} Years Old - Brazillian
                </div>     

                <BioHeader></BioHeader>    
                
            </div>
        );
    }
}

export default Home;