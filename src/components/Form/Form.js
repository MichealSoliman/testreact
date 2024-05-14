import React from 'react'
import "./Form.css"
const Form = (props) => {
  return (
    <form onSubmit={props.adduser}>
    <div className='from-group'>
    <input type="text" placeholder='Enter Name'
    onChange={(e)=>props.setname(e.target.value)}
    />
    </div>
    <div className='from-group'>
    <input type="email" placeholder='Enter Email' 
    onChange={(e)=>props.setemail(e.target.value)}
    />
    </div>
    <div className='from-group'>
    <input type="submit"  placeholder='Add User' />
    </div>
    </form>
  )
}

export default Form