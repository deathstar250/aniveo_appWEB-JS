import React, { Component } from 'react';
import '../../Materials/botstrap/css/bootstrap.min.css';


/*
        <script src="js/jquery-3.2.1.slim.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>

*/ 



class Nav extends Component {
    render() {
        return(
            <div class="">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="../home/view.home.html" id="view.title">ANIVEO  </a>
            <form class=" search-box nav_pagination">
                <input class="search_txt" type="search" placeholder="Escribe para buscar" aria-label="Search" />
                <a class="search_btn" href="../pagination/view.pagination.html">
                    <i class="fas fa-search color"></i>
                </a>
            </form>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="../home/recurses/icon_evidence.png" alt="Smiley face" height="30" width="30" className="pagination_img" />
                    MACIEL
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Ayuda</a>
                    <a class="dropdown-item" href="#">Listas</a>
                    <a class="dropdown-item" href="../initial/presentacion/presentacion.html">Salir</a>
                </div>
                </div>
            </nav>
        </div>
    );
    }
}
export default Nav;