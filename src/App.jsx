
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { PRIVATE,LOGIN,REGISTER, LOGOUT, HOME, LISTPROPERTY } from '../routes/path'
import Login from '../components/usuario/login'
import Register from '../components/usuario/register'
import Home from '../pages/Home.jsx'
import PublicRoute from '../components/router/PublicRoute'
import PrivateRoute from '../components/router/PrivateRoute'
import { AuthContextProvider } from './../context/authContext'
import Profile from '../pages/Profile'
import Logout from '../pages/Logout'
import 'bootstrap/dist/css/bootstrap.css';
import Property from '../pages/Property'
function App() {


  return (
    <AuthContextProvider>


      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<PublicRoute/>}>
            <Route index element={<Home/>}/>
            <Route path={LOGIN} element={<Login/>}/>
            <Route path={REGISTER} element={<Register/>}/>
          </Route>
          <Route path={PRIVATE} element={<PrivateRoute/>}>
              <Route index element={<Profile/>}/>
              <Route path={LOGOUT} element={<Logout/>}/>
           </Route>
           <Route path={LISTPROPERTY} element={<Property/>}/>
        </Routes>
      </BrowserRouter>
  
    </AuthContextProvider>
   
  )
}

export default App
