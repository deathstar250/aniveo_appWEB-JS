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
            <div id="multi-item-example" class="carousel slide carousel-multi-item " data-ride="carousel">
              <div class="controls-top">
                <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left"></i></a>
                <a class="btn-floating" href="#multi-item-example" data-slide="next"><i
                    class="fas fa-chevron-right"></i></a>
              </div>
    
              <ol class="carousel-indicators">
                <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
                <li data-target="#multi-item-example" data-slide-to="1"></li>
                <li data-target="#multi-item-example" data-slide-to="2"></li>
              </ol>
             
        
              <div class="carousel-inner alig-carrousel" role="listbox">
    
                <div class="carousel-item active alig-carrousel ">
            
                  <div class="col-md-4 alig-carrousel">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                        alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                          card's content.</p>
                        <a class="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
            
                  <div class="col-md-4 alig-carrousel">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                        alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                          card's content.</p>
                        <a class="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
            
                  <div class="col-md-4 alig-carrousel">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                        alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                          card's content.</p>
                        <a class="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
            
                </div>
               
                <div class="carousel-item v">
                  <div class="col-md-4 alig-carrousel">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                          card's content.</p>
                        <a class="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 alig-carrousel">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg" alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                          card's content.</p>
                        <a class="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 alig-carrousel">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg" alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                          card's content.</p>
                        <a class="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item alig-carrousel">
                  <div class="col-md-4 alig-carrousel">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg" alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                          card's content.</p>
                        <a class="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 alig-carrousel">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg" alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                          card's content.</p>
                        <a class="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
            
                  <div class="col-md-4 alig-carrousel">
                    <div class="card mb-2">
                      <img class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg" alt="Card image cap" />
                      <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                          card's content.</p>
                        <a class="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
            
                </div>
              
              </div>
     
            </div>
            
    );
    }
}
export default Carrousel;