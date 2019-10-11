import React from 'react'
import './_MainContainer.css';

const MainContainer = ({title, children}) => {
  return (
    <div className='MainContainer'>
      <div className='page-content'>
        <h1>
          {title}
        </h1>
        <div className='body'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainContainer
