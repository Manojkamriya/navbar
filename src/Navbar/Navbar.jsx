import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <nav id="navbar">
      <div className="logo">
        <img src="/navbar/Images/icons/logo.png" alt="" />
      </div>
      <div className="left-icons">
        <img
          className="menu-open"
          src="/navbar/Images/icons/menu_open_2-bg.png"
          alt=""
        />

        <img src="/navbar/Images/icons/wallet.png" alt="" />

        <img
          className="search-icon"
          src="/navbar/Images/icons/search-icon.png"
          alt=""
        />
      </div>
      <div className="list">
        <ul>
            <li>MEN <img src="/navbar/Images/icons/dropdown2.png" alt="" /></li>
            <li>WOMEN <img src="/navbar/Images/icons/dropdown2.png" alt="" /></li>
            <li>ACCESSORIES <img src="/navbar/Images/icons/dropdown2.png" alt="" /></li>
        </ul>
      </div>
      <div className="desktop-search">
<input  type="text"
    name="productName"
    placeholder="search by product category or collection" />
      <img src="/navbar/Images/icons/search-icon.png" alt="" />
    </div>
      <div  className="lushio-text">
          <img src="/navbar/Images/icons/lushio-text-3-bg.png" alt="" />
        </div>
      <div className="right-icons">
        <img src="/navbar/Images/icons/wishlist.png" alt="" />
        <img src="/navbar/Images/icons/cart.png" alt="" />
        <img src="/navbar/Images/icons/wallet.png" alt="" />
        <img src="/navbar/Images/icons/profile.png" alt="Profile" />
        </div>
    </nav>
       
       
   
  );
}

export default Navbar;
