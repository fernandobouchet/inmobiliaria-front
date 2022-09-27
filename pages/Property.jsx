import React from 'react'
import PropertyList from '../components/inmuebles/PropertyList/PropertyList'
import SearchBar from '../components/SearchBar/SearchBar'
import { Navbar } from '../components/navbar/Navbar'
import "./propety.css";
import { Footer } from '../components/footer/Footer';

const Property = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <PropertyList/>
      <Footer/>
    </div>
  )
}

export default Property
