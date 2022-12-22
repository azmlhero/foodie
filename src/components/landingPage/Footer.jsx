import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      {/* <NavLink   to="/about">
       <button className="bg-red-600 text-4xl  text-white">
          Become A Doctor
        </button>
      </NavLink> */}
      <div className="footerPt1">
        <div>
          <NavLink to="/profile" className="footerPt2">
            <h1 className="footerPt2Heading">Who we are .....?</h1>
          </NavLink>
          <p className="footerIntro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            cumque debitis inventore magni sunt reprehenderit architecto enim
            amet provident ad saepe animi aut dolorem, reiciendis id nobis quam
            sint praesentium. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ex aliquam nostrum numquam quasi itaque. Excepturi, eveniet
            praesentium. Beatae, fugiat. Reprehenderit, voluptate quis. Aliquid
            ea soluta doloremque nihil fugit omnis doloribus!
          </p>
          {/* <a href="/profile/orders">
            <h2 className="footerPt2HeadingChild">Orders</h2>
          </a>
          <a href="/profile/favourites">
            <h2 className="footerPt2HeadingChild">Favourites</h2>
          </a>
          <a href="/profile/ProductReturns">
            <h2 className="footerPt2HeadingChild">Product Return</h2>
          </a> */}
        </div>

        <div>
          <a href="/services" className="footerPt2">
            <h1 className="footerPt2Heading">Services</h1>
          </a>
          <a href="/maps">
            <h2 className="footerPt2HeadingChild">Food</h2>
          </a>
          <a href="/viewAppointments">
            <h2 className="footerPt2HeadingChild">Grocery</h2>
          </a>
          <a href="/about">
            <h2 className="footerPt2HeadingChild">Animal Food</h2>
          </a>
        </div>
        <div>
          <div className="footerPt2">
            <h1 className="footerPt2Heading">Social</h1>
          </div>
          <a href="https://www.facebook.com/" target="_blank">
            <h2 className="footerPt2HeadingChild">
              <FacebookIcon /> FaceBook
            </h2>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <h2 className="footerPt2HeadingChild">
              <InstagramIcon /> Instagram
            </h2>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <h2 className="footerPt2HeadingChild">
              <TwitterIcon /> Twitter
            </h2>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <h2 className="footerPt2HeadingChild">
              <svg
                className="tiktok"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg>
              {/* <FontAwesomeIcon  icon="fa-brands fa-tiktok" /> */}
              Tiktok
            </h2>
          </a>
          <a href="https://youtube.com" target="_blank">
            <h2 className="footerPt2HeadingChild">
              <YouTubeIcon /> Youtube
            </h2>
          </a>
        </div>
      </div>

      <div className="footerReserved">
        <h2 className="footerReservedContent">
          All Copyrights Reserved by Ammar Zahid
        </h2>
      </div>
      <hr />
    </div>
  );
}
