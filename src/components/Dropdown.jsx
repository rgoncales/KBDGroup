import React from 'react'
import '../themes-dist-5.1-gcweb/css/theme.css';

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
        <a role="menuitem"
          tabindex={this.props.index}
          aria-haspopup="true"
          aria-controls={this.props.contentId}
          aria-expanded={this.state.showDropdown}
          href="#"
          onClick={() => this.toggleDropdown()} >
          {this.props.title}
        </a>
        {this.props.children}
      </li>
    )
  }
}

export default Dropdown
