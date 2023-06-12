import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-wrapper">
        <div className="nav-left">
          <span className="Language">English</span>
          <div className="nav-searchbox">
            <input className="nav-input" />
            <SearchIcon style={{color:"gray",fontSize:16}} />
          </div>
        </div>
        <div className="nav-center">
          <h1>LAMA</h1>
        </div>
        <div className="nav-right">
          <div className="right-menu-item">REGISTER</div>
          <div className="right-menu-item">SIGN IN</div>
          <div className="right-menu-item">
            <Badge badgeContent={4} color="primary">
        <ShoppingCartOutlined/>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
