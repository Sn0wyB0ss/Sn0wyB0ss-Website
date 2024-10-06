<<<<<<< HEAD

import React from 'react';
import './Home.css';
import Bio from './Bio.js'
=======
import React from 'react';
import './Home.css';
import BioHeader from './BioHeader.js';
>>>>>>> main

class Home extends React.Component {

    render () {
        return(
            <div className="home">
                <div className="logo">
<<<<<<< HEAD
                    <img src={require("../assets/image/logotest.png")} alt="github"/>
                </div>
                <div className="brief">
                Daniel Soares Alves - 19 Years Old - Brazillian
                </div>         
                <Bio></Bio>
=======
                <img src={require("../assets/image/logotest.png")} alt="github"/>
                </div>
                <div className="brief">
                Daniel Soares Alves - 19 Years Old - Brazillian
                </div>     

                <BioHeader></BioHeader>    
                
>>>>>>> main
            </div>
        );
    }
}

export default Home;