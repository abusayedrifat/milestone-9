import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const signInUser = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () =>{
    signOut(auth)
    .then(result =>{
        console.log(result.user);
        setLoading(true)
    })
    .catch(error =>{
        console.log(error.message);
    })
  }
  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('observer unsubscribed',currentUser);
        setUser(currentUser)
        setLoading(false)
    });
    return ()=>{
        unSubscribe();
    }
    
  },[])
const authInfo = {user,loading, createUser, signInUser, logOut}   
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children: PropTypes.node
}