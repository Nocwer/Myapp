import React from "react";
import {Link} from 'react-router-dom'
const navBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
    <link to="/">
        <img src='./titulo-pokemon.png' width='50'/>
    </link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
        <li class="nav-item">
            <link class="nav-link" to="/">inicio</link>
        </li>
        <li class="nav-item">
            <link class="nav-link" to="/pokemon">pokemon</link>
        </li>
        <li class="nav-item">
            <link class="nav-link" to="/items">items</link>
        </li>
        </ul>
    </div>
    </div>
</nav>
        </div>
    )
}
