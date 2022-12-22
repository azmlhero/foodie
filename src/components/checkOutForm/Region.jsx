import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

  
 function Country(props) {
    const [country, setCountry] = useState([]);
  
    useEffect(() => {
      axios.get("https://countriesnow.space/api/v0.1/countries")
        .then((res) => {
          console.log(res)
          setCountry(res.data.data)
        }
        )
    }, []);
  
  
  
    return (
  
      <div className='ChildDiv' style={props.style}>
  
        <label>Countries</label>
  
        <select id='cars' value={props.value} onChange={(event) => { props.callbackMethod(event.target.value) }}>
  
          <option>Select Country</option>
  
          {
            country.map((con, id) => {
  
              return (
                <option key={id} value={con.id}>{con.country}</option>
              )
            })
  
          }
  
        </select>
      </div>
  
    )
  }
  

  
function State(props) {

      const [sta, setStateValue] = useState([])
  
      useEffect(() => {
          axios.post("https://countriesnow.space/api/v0.1/countries/states", {
              "country": props.value
          }).then((res) => {
              setStateValue(res.data.data.states)
          }
          )
      }, [props.value])
  
      return (
  
          <div className='ChildDiv' id='ChildDiv2'>
  
              <label for="cars">State</label>
  
              <select id="cars" value={props.values} onChange={(event) => { props.callbackMethods(event.target.value) }} >
  
                  
  
  
  
                  <option value="Punjab">Select State</option>
                  {
                      sta.map((sta, id) => {
  
                          return (
                              <option key={id} value={sta.name} >{sta.name}</option>
                          )
                      })
  
                  }
  
              </select>
          </div>
  
      )
  }
  
  function City(props) {
    const [city, setCity] = useState([]);
  
    useEffect(() => {
      axios
        .post("https://countriesnow.space/api/v0.1/countries/state/cities", {
          country: props.value,
  
          state: props.values,
        })
        .then((res) => {
          console.log(res.data.data);
  
          setCity(res.data.data);
        });
    }, [props.value, props.values]);
  
    return (
      <div className="divBody2" >
        <label >Cities</label>
  
        <select>
          <option value="Lahore">Select City</option>
  
          {city.map((cities, id) => {
            return (
              <option key={id} value={cities.index}>
                {cities}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
  
  
  
  

export default function Region(props) {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  return (
    <div>
      <div className="divBody">
       
        {/* <Country /> */}

        <Country  className="regionOption" callbackMethod={(value) => setCountries(value)} />

        <State
         className="regionOption"
          value={countries}
          callbackMethods={(value) => setStates(value)}
        />

        <City  className="regionOption"
        value={countries} values={states} />
      </div>
    </div>
  );
}

// function CountryDiv() {
//   const [country,setCountry]=useState([]);
//   const [countryValue,setCountryValue]=useState("")
   
//   useEffect(()=>{
//     axios.get("https://countriesnow.space/api/v0.1/countries").then((res) => {
//       console.log(res.data.data, "countries");
      
//         this.setCountry( res.data.data );
//   })

//   })
//   const handleCountry = (event) => {
//     console.log(event.target.value)
//     setCountryValue(event.target.value);
//   }
//   componentDidUpdate(prevState) {
//     if (prevState.countryValue !== this.state.countryValue) {
//       axios
//         .post("https://countriesnow.space/api/v0.1/countries/states", {
//           country: this.state.countryValue,
//         })
//         .then((res) => {
//           console.log(res.data.data.states, "state");
//           // {this.setState({country:res.data.data})}
//           {
//             this.setState({ sta: res.data.data.states });
//           }
//         });}}


//     return (
//       <div className="" style={this.props.style}>
//         <label>Countries</label>

//         <select
//           id="cars"
//           value={props.value}
//           onChange={handleCountry}

//           // onChange={(event)=>{
//           //   return(
//           //     console.log(event.target.value)
//           //   )
//           // }}
//         >
//           <option>Select Country</option>

//           {this.state.country.map((con, id) => {
//             return (
//               <option clasName="regionOption1" key={id} value={con.id}>
//                 {con.country}
//               </option>
//             );
//           })}
//         </select>
//         {/* <select>
//         {this.state.country.map((con, id) => {
//             return (
//               <option clasName="regionOption1" key={id} value={con.id}>
//                 {con.country}
//               </option>
//             );
//           })}
//            </select> */}
//       </div>
//     );
//   }
 


// function StateDiv () {
//   const[sta,setSta]=useState([])
  
// useEffect(()=>{
//   axios
//   .post("https://countriesnow.space/api/v0.1/countries/states", {
//     country: countryValue,
//   })
//   .then((res) => {
//     console.log(res.data.data.states, "state");
//     // {this.setState({country:res.data.data})}
//     {
//       this.setState({ sta: res.data.data.states });
//     }
//   });
// },[props.value])

      
  

  

//     return (
//       <div className="">
//         <label for="cars">State</label>

//         <select
//           id="cars"
//           value={this.props.values}
//           onChange={(event) => {
//             this.props.callbackMethods(event.target.value);
//           }}
//         >
//           <option value="volvo">Select State</option>
//           {this.state.sta.map((sta, id) => {
//             return (
//               <option clasName="regionOption1" key={id} value={sta.name}>
//                 {sta.name}
//               </option>
//             );
//           })}
//         </select>
//       </div>
//     );
        
//         }

// function CityDiv()   {
  
//   useEffect(()=>{
//     axios
//     .post("https://countriesnow.space/api/v0.1/countries", {
//       country: this.props.value,
//       state: this.props.values,
//     })
//     .then((res) => {
//       console.log(res.data.data);
//       {
//         this.setState({ city: res.data.data });
//       }
//     });

//   },[props.value,props.values])
//   // componentDidMount() {
//     // axios
//     //   .post("https://countriesnow.space/api/v0.1/countries", {
//     //     country: this.props.value,
//     //     state: this.props.values,
//     //   })
//     //   .then((res) => {
//     //     console.log(res.data.data);
//     //     {
//     //       this.setState({ city: res.data.data });
//     //     }
//     //   });
//   // }

  
//     return (
//       <div className="">
//         <label for="cars">Cities</label>

//         <select name="cars" id="cars">
//           <option value="volvo">Select City</option>

//           {this.state.city.map((cities, id) => {
//             return (
//               <option clasName="regionOption1" key={id} value={cities.index}>
//                 {cities}
//               </option>
//             );
//           })}
//         </select>
//       </div>
//     );
//   }

// export default function Region() {
//   const [getcountryvalue,setCountryValue]=useState("");
//   const [sta,setSta]=useState("");


      
    
  
  
//     return (
//       <div className="regionOption">
//         <CountryDiv
//           className="regionOptions"
//           callbackMethod={(value) => {setCountryValue(value)}}
//         />
//         <StateDiv
//           className="regionOptions"
//           value={getcountryvalue}
//           callbackMethods={(value) => {
//             setSta( value );
//           }}
//         />
//         <CityDiv
//           className="regionOptions"
//           value={getcountryvalue}
//           values={sta}
//         />
//       </div>
//     );
//   }

