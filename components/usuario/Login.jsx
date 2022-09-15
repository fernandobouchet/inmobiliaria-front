import {useState} from 'react'
import { Link } from 'react-router-dom';
import { HOME, REGISTER } from '../../routes/path';
import {login} from '../../services/usuario'
import { useAuthContext } from './../../context/authContext';
const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {Login} = useAuthContext();

    const handleSubmit = (e) =>{
        e.preventDefault()
       login({username, password}) && Login()

    }
    
    return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>

        <input 
        type="text"
        value={username}
        placeholder='Username'
        onChange={({target}) => setUsername(target.value)}
        />
        <input type="password"
            value={password}
            placeholder='Password'
            onChange={({target}) => setPassword(target.value)}
        />

        <button>login</button>
        </form>
        <div>
            Need an Account?
          <Link to={REGISTER}>Sign Up</Link> 
        </div>
        <Link to={HOME}>INICIO</Link>
    </div>
  )
}

export default Login