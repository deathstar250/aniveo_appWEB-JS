import React, { Component } from 'react';
import './padre.css';
import Hijo from'./Hijo.js'
import './hijo.css'


class Padre extends Component {
    render() {
        return(
        <div className="padre">
                <Hijo></Hijo>
        </div>
    );
    }
}
export default Padre;