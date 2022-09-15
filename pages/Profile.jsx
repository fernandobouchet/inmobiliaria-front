import React from 'react'
import { Link } from 'react-router-dom'
import { LOGOUT } from '../routes/path'

const Profile = () => {
  return (
    <div>
      <h1>  Ruta privada     </h1>
    <Link to={LOGOUT}> Cerrar sesion</Link>
    </div>
  )
}

export default Profile