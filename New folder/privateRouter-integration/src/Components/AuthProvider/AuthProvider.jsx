import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider()
    
    const [user, setUser] = useState(null)
    const [reloading, setReloading] = useState(true)
    
    const createUser = (email, password) =>{
        setReloading(true)
       return createUserWithEmailAndPassword(auth,email,password);
    }
    const logInUser = (email, password) =>{
        setReloading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogIn = ()=>{
        setReloading(true)
        return signInWithPopup(auth,provider)
    }

    const logOut = () =>{
        setReloading(true) 
        return signOut(auth)
    }

   useEffect( ()=>{
    const unsubscribe = onAuthStateChanged( auth, (currentUser) =>{
        setUser(currentUser)
        setReloading(false)
        console.log(currentUser);
        
    })
    return ()=>{
        unsubscribe();
    }
   },[])

    const authInfo = {user, reloading ,createUser, logInUser, logOut, googleLogIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;