
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";


export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
  const [user,newUser] = useState(null);
  const [loader,setLoader] = useState(true);
  const createUser = (email,pass) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth,email,pass)
  }
  const loginUser = (email,pass) =>{
    setLoader(true);
    return signInWithEmailAndPassword(auth,email,pass)
  }
  const logOut = () =>{
    setLoader(true);
    return signOut(auth)
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('wprrled',currentUser)
      newUser(currentUser);
      setLoader(false);
    });
    return () => {
      unSubscribe()
    }
  },[])

  const authInfo = {user,loader,createUser,loginUser,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
{children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;