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
            <div className="regionOption">
       
        {/* <Country /> */}

        <Country  className="regionOptions" callbackMethod={(value) => setCountries(value)} />

        <State
         className="regionOptions"
          value={countries}
          callbackMethods={(value) => setStates(value)}
        />

        <City  className="regionOptions"
        value={countries} values={states} />
      </div>
    </div>
  );
}
