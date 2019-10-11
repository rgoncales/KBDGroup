import React from 'react';
import '../themes-dist-5.1-gcweb/css/theme.css';
import Dropdown from './Dropdown';

class Navbar extends React.Component {
  state = {
    showDropdown: false
  }

  toggleDropdown = () => {
    this.setState({showDropdown: !this.state.showDropdown})
  }

  render() {
    const renderDropdown = this.state.showDropdown ? <Dropdown/> : null;

    return (
      <nav class="gcweb-menu wb-init gcweb-menu-inited" typeof="SiteNavigationElement" id="wb-auto-2">
        <div className="container">
          <h2 class="wb-inv">
            Menu
          </h2>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={this.state.showDropdown}
            onClick={() => this.toggleDropdown()}
          >
            <span class="wb-inv">
              Main
            </span>
            Menu
            <span class="expicon glyphicon glyphicon-chevron-down"></span>
          </button>
          {renderDropdown}
        </div>
      </nav>

    );
  }
}

export default Navbar;
