import React from 'react';

import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

import './style.css';

function Header() {
  return (
  <div>
        <header>
            <div class="nav">
                <Router>
                    <nav>
                        <label for="drop" class="toggle">Menu</label>
                        <input type="checkbox" id="drop" />
                        <ul class="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Galeria">Galeria</Link></li>
                            <li><Link to="/Blog">Blog</Link></li>
                        </ul>
                    </nav>
                </Router>
            </div>
            <div class="header">

                <div class="titulo_site">
                    <h1>Ruan Felix</h1>
                    <h3>para quem gosta de comida de verdade!</h3>
                </div>

            </div>
	    </header>
    </div>

    );
}

export default Header;