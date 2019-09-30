import React, { Component } from 'react';
import '../../Materials/botstrap/css/bootstrap.min.css';
import  Logo from '../../Materials/multimedia/icono.png';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import 'https://kit.fontawesome.com/db5a0a0049.js';

import  '../../Materials/styles/nav-styles.css'




class Frame_Home extends Component {
    render() {
        

        return(
        <div class='bodi'>
        <div class= 'divarriba'></div>
        <div class="container-fluid">
       
            <div class="row">
                <div class="col-4np">
                    <a class="overlay overlayFade col-4np" href="http://localhost:3000/video">   
                        <img class="imagen" src="https://img.wallpapersafari.com/desktop/1920/1080/29/14/sxryZQ.jpg" alt=""/>
                    </a>
                    <div class="Informacion title1" href="http://localhost:3000/video"> {this.props.nombre}({this.props.reseña})</div>   
                    <div class="Informacion title2"> Esta serie, basada en los libros de George R.R. Martin, muestra la competencia entre familias nobles de siete reinos de Westeros, cuya finalidad es ganar el control sobre el Trono de Hierro. </div>                              
                </div>                                                                  
    
    
                <div class="col-4np">
                    <img class="imagen" src="https://hdqwalls.com/download/stranger-things-season-3-2019-4k-5k-38-1920x1080.jpg" alt="" />
                    <a class="overlay-mid overlayFade col-4np" href="stranger.html">
                        <div class="overlaytext">Stranger Things</div>
                    </a>
                </div>
                <div class="col-4np">
                    <img class="imagen" src="https://www.labrujula24.com/wp-content/uploads/2019/07/El-Marginal-34.jpg" alt=" "/>
                    <a class="overlay-right overlayFade col-4np"  href="marginal.html">
                        <div class="overlaytext">El Marginal</div>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-4np ">
                    <img class="imagen" src="https://www.themeraider.com/wp-content/uploads/2017/12/feat-dec-3-4.jpg" alt=""/>
                    <a class="overlay2 overlayFade col-4np" href="kimi.html">
                        <div class="overlaytext">Kimi no Na Wa</div>
                    </a>
                </div>
    
    
                <div class="col-4np">
                    <img class="imagen" src="https://zachandmelissagotothemovies.files.wordpress.com/2018/09/maxresdefault.jpg" alt=""/>
                    <a class="overlay-mid2 overlayFade col-4np"  href="ripd.html">
                        <div class="overlaytext">RIPD</div>
                    </a>
                </div>
                <div class="col-4np">
                    <img class="imagen" src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/10/20132654/The-Walking-Dead-Portada.jpg"
                        alt=""/>
                    <a class="overlay-right2 overlayFade col-4np" href="thewalkingdead.html">
                        <div class="overlaytext">The Walking Dead</div>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-4np ">
                    <img class="imagen" src="https://i.pinimg.com/originals/cb/d4/8b/cbd48bf6ed40512f4693554c2d2b22c9.jpg" alt=""/>
                    <a class="overlay3 overlayFade col-4np" href="interestelar.html">
                        <div class="overlaytext">Interstellar</div>
                    </a>
                </div>
    
    
                <div class="col-4np">
                    <img class="imagen" src="https://i0.wp.com/www.anim-arte.com/wp-content/uploads/2016/03/Batman-vs-Superman-El-Origen-de-la-Justicia.jpg?fit=1920%2C1080"
                        alt=""/>
                    <a class="overlay-mid3 overlayFade col-4np" href="superman.html">
                        <div class="overlaytext">Batman vs Superman</div>
                    </a>
                </div>
                <div class="col-4np">
                    <img class="imagen" src="https://i.pinimg.com/originals/a1/e0/83/a1e0834cc11a208d7bdd07c9dd7eb137.jpg" alt=" "/>
                    <a class="overlay-right3 overlayFade col-4np"  href="bichos.html">
                        <div class="overlaytext">Bichos</div>
                    </a>
                </div>
            </div>
        </div>
        </div>

    );
    }
}
export default Frame_Home;