import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from "prop-types";
import Login from './registrations/Login'
import Signup from './registrations/Signup'




const Header = (props) => {

  const handleClick = () => {
      axios.delete('http://localhost:3001/logout', {withCredentials: true})
      .then(response => {
        props.handleLogout()
        props.history.push('/homebody')
      })
      .catch(error => console.log(error))
    }
  const headerCSS = {
    fontSize: "70px",
    textAlign: "center",
    color: "#353839",
    textDecoration: "underline",
    maxHeight: "125px"



}


 return (

   <div>
   <div>
     <Link to='/login'>Log In</Link>
     <br></br>
     <Link to='/signup'>Sign Up</Link>
     <br></br>
     {
       props.loggedInStatus ?
       <Link to='/logout' onClick={handleClick}>Log Out</Link> :
       null
     }
   </div>


   <div style={{maxHeight: "125px"}}>
    <Link style={{color: "#353839"}} to="/homebody"> Home| </Link><Link style={{color: "#353839"}} to="/restaurantguide"> Restaurant Guide </Link>
    <h1 style={headerCSS}>FdR Pdx</h1>
    </div>
    </div>





 );
}
export default Header;
