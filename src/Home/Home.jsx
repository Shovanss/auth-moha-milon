import { useContext } from "react";
import { AuthContext } from "../AuthProvider";




const Home = () => {
    const authInfo = useContext(AuthContext);
    return (
        <div>
            <h3>This is home {authInfo.name}</h3> 
        </div>
    );
};

export default Home;