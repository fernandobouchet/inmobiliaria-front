import {Navigate, Outlet} from 'react-router-dom';
import {LOGIN} from '../../routes/path';
import {useAuthContext} from '../../context/authContext';


export default function PublicRoute() {
    const {isAuthenticated} = useAuthContext();

    if(!isAuthenticated){
        return <Navigate to={LOGIN}/>;
    }

    return (
        <div>
            <Outlet/>
        </div>
    )
}