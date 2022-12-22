import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="navLinks">
      <h1 className="title">
        FoodBhalo <i>#Mart</i>
      </h1>
     
        <NavLink
          to="/"
          className="navBarItems"
        >
          HOME
        </NavLink>
        <NavLink
          to="/contact"className="navBarItems"
        >
          CONTACT
        </NavLink>
        <NavLink
          to="/contact"className="navBarItems"
        >
          DEALS
        </NavLink>

        <NavLink
          to="/order"className="navBarIconCart" 
        >
          <svg
            className="headerIcon"
            // className="searchListIcon"
            // class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        </NavLink>
      </div>
    </div>
  );
}
