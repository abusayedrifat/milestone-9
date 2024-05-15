import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebas.init";
import { useState } from "react";


const LogIn = () => {

    const [user, setUser] = useState();

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

     const handleGoogleSignIn = () =>{
       signInWithPopup(auth, googleProvider)
       .then((result)=>{
        const loggedInUser = result.user;
        setUser(loggedInUser)
        console.log(loggedInUser);
       })
       .catch((error)=>{
        const errorMessage = error.message;
        console.log(errorMessage);
       })
     }

     const handleGitHubLogIn = ()=>{
        signInWithPopup(auth, gitHubProvider)
        .then((result)=>{
            const loggedInUser = result.user;
            setUser(loggedInUser);
            console.log(loggedInUser);
        })
        .catch((error)=>{
            const errorMessage = error.message;
            console.log(errorMessage);
        })
     }


     const handleLogOut = () =>{
        signOut(auth)
        .then((result)=>{
            setUser(null)
            console.log(result);
        })
        .catch((error)=>{
            console.log(error);
        })
     }
    return (
        <div>
            { user?
                <button onClick={handleLogOut}>LogOut</button>:
                <>
                <button onClick={handleGoogleSignIn}>Google LogIn</button>
                <button onClick={handleGitHubLogIn}>GitHub LogIn</button>
                </>
            }
           { user && <div>

            <h1>welcome {user.displayName}</h1>
           {user.email &&  <p>email : {user.email} </p>}
              <img src={user.photoURL} alt="" />
           </div>
           }
        </div>
    );
};

export default LogIn;