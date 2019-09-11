import React, { Component } from 'react';
import '../../Materials/botstrap/css/bootstrap.min.css';
import  Logo from '../../Materials/multimedia/icono.png';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import 'https://kit.fontawesome.com/db5a0a0049.js';

import  '../../Materials/styles/nav-styles.css'

/*import '../../Materials/botstrap/js/jquery-3.2.1.slim.min.js'
import '../../Materials/botstrap/js/popper.min.js'
import '../../Materials/botstrap/js/bootstrap.min.js'

*/
/*
        <script src="js/jquery-3.2.1.slim.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>

*/ 



class Nav extends Component {
    render() {
        
           
        /*var loadScript = function(src) {
            var tag = document.createElement('script');
            tag.async = false;
            tag.src = src;
            document.getElementsByTagName('body').appendChild(tag);
          }
          loadScript('https://kit.fontawesome.com/db5a0a0049.js');
        */

        //No se puede cargar el script de las imaganes

        return(
            <div class="">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="../home/view.home.html" id="view.title">ANIVEO  </a>
            <form class=" search-box nav_pagination">
                <input class="search_txt" type="search" placeholder="Escribe para buscar" aria-label="Search" />
                <a clanps="search_btn" href="../pagination/view.pagination.html">
                    <i class="fas fa-search color"></i>
                </a>
            </form>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img class="nombre_usuario" src={Logo} alt="Smiley face" height="30" width="30" className="pagination_img" />
                    <div class="nombre_usuario">{this.props.nombre}</div>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Ayuda</a>
                    <a class="dropdown-item" href="#">Listas</a>
                    <a class="dropdown-item" href="../initial/presentacion/presentacion.html">Salir</a>
                </div>
                </div>
            </nav>

            <script async="true" src="https://kit.fontawesome.com/db5a0a0049.js"></script>
        </div>

    );
    }
}
export default Nav;