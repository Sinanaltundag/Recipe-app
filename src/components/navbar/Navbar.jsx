import React from 'react'
import { NavBar} from './style';
import {NavLink, Span} from '../GlobalStyledComp';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <NavBar className="nav-container">
<Link to="/home"><NavLink fontWeight={"bold"} text fontStyle={"italic"}>{`<Clarusway>`}</NavLink><Span>RECIPE</Span></Link>
<div className="nav-right">

<Link to="/about"><NavLink >About</NavLink></Link>
<a href="https://github.com/Sinanaltundag"><NavLink>Github</NavLink></a>
<Link to="/" onClick={()=>sessionStorage.clear()}><NavLink>Logout</NavLink></Link>
</div>
        </NavBar>
    </div>
  )
}

export default Navbar