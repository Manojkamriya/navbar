import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <nav id="navbar">
      <div className="logo">
        <img src="/Images/icons/logo.png" alt="" />
      </div>
      <div className="left-icons">
        <img
          className="menu-open"
          src="/Images/icons/menu_open_2-bg.png"
          alt=""
        />

        <img src="/Images/icons/wallet.png" alt="" />

        <img
          className="search-icon"
          src="/Images/icons/search-icon.png"
          alt=""
        />
      </div>
      <div className="list">
        <ul>
            <li>MEN <img src="/Images/icons/dropdown2.png" alt="" /></li>
            <li>WOMEN <img src="/Images/icons/dropdown2.png" alt="" /></li>
            <li>ACCESSORIES <img src="/Images/icons/dropdown2.png" alt="" /></li>
        </ul>
      </div>
      <div className="desktop-search">
<input  type="text"
    name="productName"
    placeholder="search by product category or collection" />
      <img src="/Images/icons/search-icon.png" alt="" />
    </div>
      <div  className="lushio-text">
          <img src="/Images/icons/lushio-text-3-bg.png" alt="" />
        </div>
      <div className="right-icons">
        <img src="/Images/icons/wishlist.png" alt="" />
        <img src="/Images/icons/cart.png" alt="" />
        <img src="/Images/icons/wallet.png" alt="" />
        <img src="/navbar/Images/icons/profile.png" alt="Profile" />
        </div>
    </nav>
       
       
   
  );
}

export default Navbar;
