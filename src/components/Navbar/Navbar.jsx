import React from 'react';

import './Navbar.css';
import logo from '../../icons/LogoCali.png';
import { Link } from 'react-scroll';

import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo' />
            <div className="Menu">
                <Link className="MenuListItem">.about()</Link>
                <Link className="MenuListItem">.skills()</Link>
                <Link className="MenuListItem">.resume()</Link>
                <Link className="MenuListItem">.projects()</Link>
            </div>
            {/* <button className="MenuBtn">wow
            </button> */}
            <MdOutlineDarkMode size = {30}  cursor = 'pointer'  />


        </nav>
    )
}



export default Navbar;