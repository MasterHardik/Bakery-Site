// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";
import "./lines2.jpg";
import SearchInput from "../Search/SearchInput";

function Navbar({ Categories }) {
  const sideSlider = document.getElementById("sideSlider");
  const toggleButton = document.getElementById("toggleButton");

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="./cake.jpg" alt="cake-img" id="cake_img" />
          <h2>Bakery Delights</h2>
        </div>
        <SearchInput />
        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <select name="category" id="category">
              {Categories.map((cake_type, index) => (
                <option key={index} value={cake_type}>
                  {cake_type}
                </option>
              ))}
            </select>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </ul>
        {/* <div id="sideSlider" class="side-slider">
        <img src="lines2.jpg" alt="" height={50} width={50} />
      </div> */}
        {/* {toggleButton.addEventListener("click", function () {
        if (sideSlider.style.width === "250px") {
          sideSlider.style.width = "0";
        } else {
          sideSlider.style.width = "250px";
        }
      })} */}
      </nav>
      <div className="nav_menu">nav</div>
    </>
  );
}

export default Navbar;
