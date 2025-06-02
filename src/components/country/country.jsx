import React, { useState } from 'react';
import './country.css'
const Country = ({country,handleVisitedCountry}) => {
 const [visited,setVisited]=useState(false);

 const visitedHandler=()=>{
  setVisited(!visited);
  handleVisitedCountry(country);
 }

// console.log(country);
const {name,flags,maps,capital,coatOfArms,flag,population}=country;
    return (
        <div className={`country ${visited && 'visited'}`}>
            <img  src={flags.png} alt="" />
            <img className='logo' src={coatOfArms?.svg || flag } alt="" />
            <h4>{name?.common} </h4>
            <p><strong>Capital: </strong>{capital} </p>
            <p><strong>Population: </strong>{population} </p>
            <a href={maps.googleMaps} target='blank' >View in Map</a>
            <button onClick={visitedHandler} >{visited?'Visited':'Mark As Visited'}</button>

        </div>
    );
};

export default Country;