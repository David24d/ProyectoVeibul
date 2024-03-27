// App.js
import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import FranjaNegra from './componentes/FranjaNegra';
import NavBar from './componentes/NavBar';

function App() {
  return (
    <div>
      <FranjaNegra />
      <div className="veibul">
        <div className="icon-container">
          <FontAwesomeIcon icon={faUser} className="fa-icon" />
          <FontAwesomeIcon icon={faShoppingCart} className="fa-icon" />
          <FontAwesomeIcon icon={faSearch} className="fa-icon" />
        </div>
        <h1>VEIBUL</h1>
      </div>
      <NavBar />
      <img src="https://i.pinimg.com/474x/a8/fa/d5/a8fad5d4f6e01640bf8b6648bb0915ad.jpg" alt="Mujer con ropa de moda" className="full-width" />
      <h1>NUEVAS COLECCIONES DE NUESTRA MARCA</h1>
      <button className="button">VER MÁS</button>
    </div>
  );
}

export default App;
