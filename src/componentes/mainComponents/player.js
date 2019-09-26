import React, { Component } from 'react';
import '../../Materials/botstrap/css/bootstrap.min.css';
import  Logo from '../../Materials/multimedia/icono.png';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import 'https://kit.fontawesome.com/db5a0a0049.js';

import  '../../Materials/styles/nav-styles.css'


class Player extends Component {
    render() {      

        return(

        <div class=" conteiner bg-dark" >
            <div class=" row">
                <div class="col-md-2 ">
                </div>
                <div class="col-md-8 player-style">
                    <iframe width="930" height="500" src={this.props.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-md-2 ">
                </div>
            </div>
        </div>

        );
    }
}
export default Player;