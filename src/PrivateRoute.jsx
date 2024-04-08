import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    if(loader){
        console.log('it works');

    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
   
       
};

export default PrivateRoute;