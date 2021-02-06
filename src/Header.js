import React from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.css";
import { Button, IconButton } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <IconButton style={{color: "black"}}>
          <ReorderIcon />
        </IconButton>
        <div className="header__image">
          <img src="https://www.coupontrends.in/img/1489383836_ustraa%20coupons.png" />
        </div>
      </div>
      <div className="header__search">
        <SearchIcon style={{ marginLeft: "10px" }} />
        <input type="text" placeholder="search for a product" />
      </div>
      <div className="header__icons">
        <IconButton style={{color: "black"}}>
          <NotificationsIcon />
        </IconButton>
        <IconButton style={{color: "black"}}>
                  <ShoppingCartIcon />
        </IconButton>
        <IconButton style={{color: "black"}}>
          <AccountCircleIcon />
        </IconButton>
        <div className="header__button">
        <Button style={{minWidth:"100px", color:"white",minHeight:"45px"}}>Help ?</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
