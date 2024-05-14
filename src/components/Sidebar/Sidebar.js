import React from 'react'
import "./Sidebar.css"
const Sidebar = (props) => {
  return (
    <div className='sidebar'>
     <ul>
         <li><a href="#">Home</a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Contact</a></li>
         <li><a href="#">Blog</a></li>
         <li><a href="#">Hello {props.isChenged && props.name}</a></li>
         
     </ul>
    </div>
  )
}

export default Sidebar