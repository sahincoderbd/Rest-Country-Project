import { useEffect } from "react";
import { useState } from "react"
import Country from "../country/country";
import "./countries.css"


export default function Countries(){

  const [countries,setCountries]=useState([]);

  const [visitedCountry,setVisitedCountry]=useState([]);

  const [visitedCountryFlags,setVisitedCountryFlags]=useState([]);


   useEffect(()=>{
   fetch('https://restcountries.com/v3.1/all')
   .then(res=>res.json())
   .then(data=>setCountries(data))


   },[])

   const handleVisitedCountry=country=>{
    if(!visitedCountry.includes(country)){
      const newVisitedCountries=[...visitedCountry,country];
      setVisitedCountry(newVisitedCountries);
    }

   }

   const removeVisitedCountry=toremovevisitedcountry=>{
    const newVisitedArray=visitedCountry.filter( c=> c !== toremovevisitedcountry);
    setVisitedCountry(newVisitedArray);
    const newVisitedFlags= visitedCountryFlags.filter(f=> f !== toremovevisitedcountry.flags.svg)
   setVisitedCountryFlags(newVisitedFlags);
   }

   const handleVisitedCountryFlags=flag=>{
   console.log(flag);
   if (!visitedCountryFlags.includes(flag)){
    const newVisitedCountriesFlagsArray=[...visitedCountryFlags,flag];
    setVisitedCountryFlags(newVisitedCountriesFlagsArray);
    }
   
   }
    return (

        <div>
        <h3>Countries : {countries.length}</h3>
        <h3>Visited Countries : {visitedCountry.length}</h3>
        <div className="visited-flags">
        {
            visitedCountryFlags.map((flag,id)=><img key={id} src={flag}></img>)
          }

        </div>
        
        <ul>
           
          {
            visitedCountry.map(country=><li key={country.ccn3}> {country.name.common}</li>)
          }
        </ul>
          <div className="countries">

          {
            countries.map(country=><Country removeVisitedCountry={removeVisitedCountry} handleVisitedCountryFlags={handleVisitedCountryFlags} handleVisitedCountry={handleVisitedCountry} key={country.cca3} country={country}></Country>
        )


        }
          </div>
        



        </div>
    )
}