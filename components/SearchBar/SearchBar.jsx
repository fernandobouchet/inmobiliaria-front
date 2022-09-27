import React, { Fragment } from 'react'
import './searchbar.css'
import { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    const [filter,setFilter] = useState({
      typeContract:'',
      numbeOfAmbients:'',
      price:'',
      city:'',
    })
    const handleChange = (e)=>{
      setFilter(prev=>({
            ...prev,
            [e.target.id]:e.target.value
        }))
        console.log(filter)
    }

    const submitSearch =()=>{
      console.log(filter);
    }

  return (
    <div class="cinputSearch">
      <input placeholder='¿A donde quieres mudarte?' id="city" onChange={handleChange} aria-label="Large" aria-describedby="inputGroup-sizing-sm" class="input-seach roundedE"></input>
      <select placeholder='Tipo de inmueble' id="optionProperty" onChange={handleChange} className="height70 margin10 roundedE">
        <option value="apartment">Departamento</option>
        <option value="hostel">Hostel</option>
        <option value="house">Casa</option>
        <option value="ph">PH</option>
      </select>
      <select id='typeContract' onChange={handleChange} className="height70 margin10 roundedE">
        <option value="cmpar">Compar</option>
        <option value="alquilar">Alquilar</option>
      </select>
      <select id="numbeOfAmbients" onChange={handleChange} className="height70 margin10 roundedE">
        <option value="1" >1 ambiente</option>
        <option value="2">2 ambientes</option>
        <option value="3">3 ambientes</option>
      </select>
        <input placeholder='Precio' className="height70 margin10 roundedE" id='price' type="number"></input>
      <FaSearch size={34} className="btnSearch" onClick={()=>submitSearch()}/> 
    </div>
  )
}

export default SearchBar


