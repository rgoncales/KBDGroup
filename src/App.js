import React from 'react';
import logo from './logo.svg';
import './App.css';
import './themes-dist-5.1-gcweb/css/theme.css';

function App() {
  return (
    <div className="App">

      <nav class="gcweb-menu wb-init gcweb-menu-inited" typeof="SiteNavigationElement" id="wb-auto-2">
        <div className="container">
          <h2 class="wb-inv">Menu</h2>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="wb-inv">
              Main
            </span>
            Menu
            <span class="expicon glyphicon glyphicon-chevron-down"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
