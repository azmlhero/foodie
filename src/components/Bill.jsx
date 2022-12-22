import React from "react";
import Footer from "./landingPage/Footer";
import Header from "./landingPage/Header";
export default function Bill() {
  return (
    <div>
      <Header/>
      <div className="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
        <h3 className="text-2xl">
          Thanks for shopping from foodbhalo ! Your order is on the way{" "}
        </h3>
        {/* <h3 className="">
          Your Total is 1000
           {amount} 
        </h3> */}
        <a href="/">
        <button
          //   onClick={logout}
          className=" py-2 text-blue-800 border-blue-600 border-2 px-8 rounded"
        >
          OK
        </button>
        </a>
      </div>
      <Footer/>
    </div>
  );
}
