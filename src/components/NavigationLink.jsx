import React from 'react'
import '../themes-dist-5.1-gcweb/css/theme.css';

const NavigationLink = ({ to, className, children }) => {
  return (
    <li role="presentation">
      <a role="menuitem" tabindex="-1" href={to}>
        {children}
      </a>
    </li>
  )
}

export default NavigationLink
