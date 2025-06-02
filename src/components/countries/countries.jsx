import { useEffect } from "react";
import { useState } from "react"
import Country from "../country/country";
import "./countries.css"


export default function Countries(){

  const [countries,setCountries]=useState([]);
  const [visitedCountry,setVisitedCountry]=useState([]);

   useEffect(()=>{
   fetch('https://restcountries.com/v3.1/all')
   .then(res=>res.json())
   .then(data=>setCountries(data))


   },[])

   const handleVisitedCountry=country=>{
    console.log(country);
    const newVisitedCountries=[...visitedCountry,country];
    setVisitedCountry(newVisitedCountries);
   }
    return (

        <div>
        <h3>Countries : {countries.length}</h3>
        <h3>Visited Countries : {visitedCountry.length}</h3>
       
        <ul>

          {
            visitedCountry.map(country=><li key={country.ccn3}> {country.name.common}</li>)
          }
        </ul>
          <div className="countries">

          {
            countries.map(country=><Country handleVisitedCountry={handleVisitedCountry} key={country.cca3} country={country}></Country>
        )


        }
          </div>
        



        </div>
    )
}