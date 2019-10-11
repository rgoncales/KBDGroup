import React from 'react';
import '../themes-dist-5.1-gcweb/css/theme.css';
import Dropdown from './Dropdown';
import NavigationLink from './NavigationLink'

class Navbar extends React.Component {
  state = {
    showDropdown: false
  }

  toggleDropdown = () => {
    this.setState({showDropdown: !this.state.showDropdown})
  }

  render() {
    const renderFirstDropdown = (
      <Dropdown title={'Jobs and the workplace'} contentId={'gc-mnu-jobs'} index={0}>
        <ul id="gc-mnu-jobs" role="menu" aria-orientation="vertical">
          <li role="separator"/>
          <NavigationLink to="https://www.canada.ca/en/services/jobs/opportunities.html">
            Find a job
          </NavigationLink>
          <NavigationLink to="https://www.canada.ca/en/services/jobs/training.html">
            Training
          </NavigationLink>
          <NavigationLink to="https://www.canada.ca/business-management">
            Hire and manage employees
          </NavigationLink>
          <li role="separator"/>
        </ul>
      </Dropdown>
    )

    const renderSecondDropdown = (
      <Dropdown title={'My content'} contentId={'gc-mnu-cit'} index={0}>
        <ul id="gc-mnu-cit" role="menu" aria-orientation="vertical">
          <li role="separator"/>
          <NavigationLink to="/about">
            About
          </NavigationLink>
          <NavigationLink to="/hello">
            Greetings
          </NavigationLink>
          <NavigationLink to="/more-content">
            Some more content
          </NavigationLink>
          <li role="separator"/>
        </ul>
      </Dropdown>
    )

    return (
      <nav className="gcweb-menu wb-init gcweb-menu-inited" typeof="SiteNavigationElement" id="navbar">
        <div className="container">
          <h2 className="wb-inv">
            Menu
          </h2>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={this.state.showDropdown}
            onClick={() => this.toggleDropdown()}
          >
            <span className="wb-inv">
              Main
            </span>
            Menu
            <span className="expicon glyphicon glyphicon-chevron-down"></span>
          </button>
          <ul role="menu" aria-orientation="vertical" data-ajax-replace="./ajax/sitemenu-v5-en.html" className="wb-init wb-data-ajax-replace-inited" id="wb-auto-3">
            {renderFirstDropdown}
            {renderSecondDropdown}
          </ul>
        </div>
      </nav>

    );
  }
}

export default Navbar;
