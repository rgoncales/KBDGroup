import React from 'react'
import '../themes-dist-5.1-gcweb/css/theme.css';
import NavigationLink from './NavigationLink'

class Dropdown extends React.Component {
  state = {
    showDropdown: false
  }

  toggleDropdown = () => {
    this.setState({showDropdown: !this.state.showDropdown})
  }

  render() {
    return (

        <li role="presentation">
          <a onClick={() => this.toggleDropdown()} role="menuitem" tabindex={this.props.index} aria-haspopup="true" aria-controls={this.props.contentId} aria-expanded={this.state.showDropdown} href="#">
            {this.props.title}
          </a>
          {this.props.children}
        </li>
      
    )
  }
}

export default Dropdown
