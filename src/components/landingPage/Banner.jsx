import React from "react";

export default function Banner() {
  return (
    <div style={{ border: "1px  black"
            
    }} className="banner1">
      <div style={{ border: "1px  black" }}>
        <h1 style={{ border: "1px  black" }}className="greeting">Welcome to Food Bhalo</h1>
        <b style={{ border: "1px  black" }}>Your food partner</b>
      </div>
      <img
        style={{ margin: "0px 0px 50px 70px",
                height: "500px",
                 width: "700px"}}
        src="./foodBhalo.png"
        alt="Welcome Charcter Img"
      ></img>
    </div>
  );
}
