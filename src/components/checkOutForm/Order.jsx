import React, { useEffect, Component } from "react";
import Header from "../landingPage/Header";
import Footer from "../landingPage/Footer";
import { TextField, Button } from "@mui/material";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
// import Region from "./Region";
import Data from "../Data.json";
import Region from "./Region";

export default function Order() {
  // const id = window.location.pathname.split(/[order,/]/);
  // // let lastElement = arry[arry.length - 1];
  // console.log("TotallastElement", id[id.length - 1]);
  // console.log("Qty", id[id.length - 2]);
  // console.log("ProductId", id[id.length - 3]);

  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    address: "",
  });
  const navigate=useNavigate();
  const location =useLocation();

  console.log("LOCATION=",location.state.id.name);

 function handleSubmit  (event)  {
    event.preventDefault();
    // alert(`submitted`);
    console.log(user);
    navigate("/bill");
  };

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  

  return (
    <div>
      <Header />

      <div className="">
        <h1>Invoice</h1>

        <table className="productOrderTable">
          <thead>
            <tr className="productOrderTableHeading">
              <th className="productOrderTableHeading1">Name</th>

              <th className="productOrderTableHeading2">Quantity</th>
              <th className="productOrderTableHeading3">Total</th>
            </tr>
            <tr className="productOrderTableHeading">
             
                  <th className="productOrderTableHeading1">{location.state.id.name}</th>
          

              <th className="productOrderTableHeading2">{location.state.id2}</th>
              <th className="productOrderTableHeading3">{location.state.id3}/Rs</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <form onSubmit={handleSubmit}  className="formStyle">
          <h2>Contact Information</h2>
          <div>
            <div className="divInputFields">
              <label>First Name:</label>
              <input
                className="inputFields"
                type="text"
                placeholder="Your Name*"
                required="Name is required"
                name="name"
                value={user.name}
                onChange={handleInputs}
              />
              <br />
              <label> Last Name:</label>
              <input
                className="inputFields"
                type="text"
                placeholder="last Name*"
                name="lastname"
                value={user.lastname}
                onChange={handleInputs}
              />
            </div>
            <br />
            <label>Enter your Email </label>
            <input
              className="email"
              type="email"
              placeholder="Email *"
              required
              name="email"
              value={user.email}
              onChange={handleInputs}
            />

            <Region />
            <TextField
              sx={{ width: "75%", margin: "0px 20px 20px 20px" }}
              label="Address"
              InputLabelProps={{
                shrink: true,
              }}
              required
              type="text"
              // value={email}
              placeholder="HOUSE#1 STREET 2 NEAR G1 MARKET"
              name="address"
              value={user.address}
              onChange={handleInputs}
            />
            {/* navigate("/bill") */}
            {/* <NavLink to="/bill"> */}
            <Button
              type="submit"
              sx={{ width: "75%" }}
              variant="outlined"
              style={{ height: "50px" }}
              onClick={() => {}}
            >
              Confirm Order
            </Button>
            {/* </NavLink> */}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
