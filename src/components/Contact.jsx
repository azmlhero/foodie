import React from "react";
import Header from "./landingPage/Header";
import Footer from "./landingPage/Footer";



export default function Contact() {
  return (
    <div>
      <Header/>
      <div className="flex flex-col items-center pt-56">
        <img className="" src="./contactimg1.jpg" />
        <div className="">
          <h1 className="pt-8 text-xl font-extrabold text-gray-900 sm:text-2xl md:text-2xl">
            <span className="block xl:inline">Contact At:</span>
            <span className="block pl-4 text-green-600 xl:inline">
              0334044482
            </span>
          </h1>
          <p className="pb-40 text-xl font-extrabold text-gray-900 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            Or At:<br/>
            <a
              href="https://mail.google.com/mail/"
              className="block pl-4 text-green-600 underline xl:inline"
            >

              ammarzahid335@gmail.com
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
