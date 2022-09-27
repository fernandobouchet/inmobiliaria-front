import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar/SearchBar'
import { LOGIN, PRIVATE } from '../routes/path'

const Home = () => {
  return (
    <div>

      <h1>Inmoviliaria Proyect 🔥</h1>
      <Link to={LOGIN}>Iniciar sesion</Link>
<br/>
<br/>
      <Link to={PRIVATE}>Profile</Link>
      <SearchBar/>
    </div>
  )
}

export default Home