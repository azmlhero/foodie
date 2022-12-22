import React, { useState } from "react"
import Header from "./landingPage/Header";
import Footer from "./landingPage/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Data from "./Data.json";
import Order from "./checkOutForm/Order";
import { useEffect } from "react";
// import img from "..//images/foodBhalo.jpg"


export default function Product() {
  
const navigate =useNavigate();
    const [product,setProduct]=useState(Data)
    const [qty,setQty]=useState(0)
    const [total,setTotal]=useState(0)

      // product:Data,
      const params=useParams()
      const prod = 
        product.filter(item => {
          return (item.id == params.id
        )});
  
  // componentDidMount() {
  //   // this.getData();
  //   this.incClick();
  //   this.decClick();

  // }

function decClick () {
    if (qty > 0) {
      setQty(qty-1);


    } else {
      return 0;
    }
  };

  function incClick () {
    if (qty < 5) {
      setQty(qty+1);
      
        
      }
    
  };
  useEffect(() => {

    prod.map((res) => {

        return (

            setTotal(res.price * qty)

        );

    })


}, [qty])

  const buyNow = (res) => {
    return (
      // this.parentToChild,
      // window.location = `/order`

    navigate("/order", { state: { id: res,id2:qty,id3:total } }) );
  };
  //   useEffect(() => {
  //     getData();
  //   }, [total, p_name, quantity]);

    return (
      <div>
        <h1>hello</h1>
        <div>
          <Header />
         { prod.map((res) => {
            console.log("RES=",res);
            return (
              <div>
                <div style={{ margin: "100px 0px 300px 0px" }}>
                  
                  <div>
                    <div className="productPageeach">
                      <img
                        style={{
                          marginLeft: "350px",
                          width: "250px",
                          height: "250px",
                          borderRadius: "25px",
                          textShadow: "100px",
                        }}
                        src={res.image}
                        alt="image"
                        className="productsListImg"
                      />

                      <div className="productPageRight">
                        <h2 className="productPageListName">
                          {" "}
                          Name: {res.name}{" "}
                        </h2>

                        <b
                          style={{ margin: "0px 200px 0px 0px " }}
                          className="productPageListType"
                        >
                          {" "}
                          Type:- {res.type}
                        </b>

                        <p
                          style={{ margin: "20px 200px 0px 0px " }}
                          className="productPageListPrice"
                        >
                          {" "}
                          Price: {res.price}
                        </p>

                        <div className="productPageButtons">
                          <div className="productPageListQty">
                            <button
                              disabled={qty === 0}
                              onClick={decClick}
                              className="productPageQtyInc"
                            >
                              -
                            </button>
                            <b className="productPageQty">{qty}</b>
                            <button
                              disabled={qty === 5}
                              onClick={incClick}
                              className="productPageQtyDec"
                            >
                              +
                            </button>
                          </div>
                          <div>
                            <h3>Total</h3> Rs. {total}
                          </div>

                          <button
                            disabled={qty === 0}
                            className="productPageListOrder"
                            onClick={() => buyNow(res)}
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                      {/* {prod.price} */}
                    </div>
                    .
                  </div>
                  {/* );
        })} */}
                </div>
              </div>
            );
          })}

          <Footer />
        </div>
      </div>
    );
}