import React from 'react';
import './country.css'
const Country = ({country}) => {

console.log(country.name);
const {name,flags}=country;
    return (
        <div className='country'>
            <img style={{
                height:'150px',
                width:'250px'
            }} src={flags.png} alt="" />
            <h4>{name?.common} </h4>
        </div>
    );
};

export default Country;