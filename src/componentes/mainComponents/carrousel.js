import React, { Component } from 'react';
import '../../Materials/botstrap/css/bootstrap.min.css';
import  Logo from '../../Materials/multimedia/icono.png';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import 'https://kit.fontawesome.com/db5a0a0049.js';

import  '../../Materials/styles/nav-styles.css'

class Carrousel extends Component {
    render() {

        return(
            <div class="carrousel-box">  
              <div class="conteiner">
                <div class="row ">
                    
                  <div class="col-md-2">

                    </div>
                  <div class="col-md-8 carrousel ">
                      <a class="" href="http://localhost:3000/video">   
                          <img class="imagen2" src="https://hdqwalls.com/download/stranger-things-season-3-2019-4k-5k-38-1920x1080.jpg" alt=""/>
                      </a>
                      <a class="" href="http://localhost:3000/video">   
                          <img class="imagen2" src="https://hdqwalls.com/download/stranger-things-season-3-2019-4k-5k-38-1920x1080.jpg" alt=""/>
                      </a>
                      <a class="" href="http://localhost:3000/video">   
                          <img class="imagen2" src="https://hdqwalls.com/download/stranger-things-season-3-2019-4k-5k-38-1920x1080.jpg" alt=""/>
                      </a>
                                                     
                  </div>
                  <div class="col-md-2">
                    
                  </div>

                </div>
              </div>
            </div>
    
            
    );
    }
}
export default Carrousel;