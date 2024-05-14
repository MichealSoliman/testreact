
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';
import { useState } from 'react';



 const App = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [isChenged, setisChenged] = useState(false)
  const adduser = (e)=>{
    e.preventDefault();
    setisChenged(true)
  }

  return (
    <div className='App' >
   <Header name ={name} isChenged = {isChenged}/>
   <div className='main'>
    <Sidebar name = {name} isChenged = {isChenged}/>
    <Form setemail ={setemail} setname ={setname} adduser = {adduser}/>
   </div>
   

    </div>
  )
}

export default App;