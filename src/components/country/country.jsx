import React, { useState } from 'react';
import './country.css'
const Country = ({country,handleVisitedCountry,handleVisitedCountryFlags,removeVisitedCountry}) => {

const {name,flags,maps,capital,coatOfArms,flag,population}=country;

 const [visited,setVisited]=useState(false);

 const visitedHandler=()=>{
  setVisited(!visited);
  handleVisitedCountry(country);
  handleVisitedCountryFlags(flags.svg);
  if(visited){
    removeVisitedCountry(country);
  }
 }

// console.log(country);
    return (
        <div className={`country ${visited && 'visited'}`}>
            <img  src={flags.png} alt="" />
            <img className='logo' src={coatOfArms?.svg || flag } alt="" />
            <h4>{name?.common} </h4>
            <p><strong>Capital: </strong>{capital} </p>
            <p><strong>Population: </strong>{population} </p>
            <a href={maps.googleMaps} target='blank' >View in Map</a>
            <button onClick={visitedHandler} >{visited? 'Remove from visited':'Mark as visited'}</button>

        </div>
    );
};

export default Country;