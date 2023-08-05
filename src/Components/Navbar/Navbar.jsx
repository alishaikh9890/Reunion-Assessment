import React from 'react'
import "./Navbar.css"
import logo from "./../../Assets/estatery_logo.png"



const Navbar = () => {
  return (
    <div>
        <div className='nav'>
            <div className='nav-filter'>
                <div className='logo'><img src={logo} alt="" /><h3>Estatery</h3></div>
                <h4 style={{color:"rgb(112,100,240)" , backgroundColor:"rgb(232,230,248)"}}>Rent</h4>
                <h4>Buy</h4>
                <h4>Sell</h4>
                <h4>Manage Property ⌵ </h4>
                <h4>Resources ⌵</h4>
            </div> 
            
            <div className='nav-login'>
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar