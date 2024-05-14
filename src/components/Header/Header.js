import React from 'react'
import "./Header.css"
const Header = (props) => {
  return (
    <div className='header'>
      <h1>Coderz Academy</h1>
      <p>Hello  {props.isChenged && props.name } </p>
    </div>
  )
}

export default Header