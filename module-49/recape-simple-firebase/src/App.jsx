import { useState } from 'react'
import './App.css'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebaseAuthentication.init'
import AuthenticationCard from './authentication card/AuthenticationCard'
import AuthenticationCard2 from './authentication card2/AuthenticationCard2'



function App() {

  const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider()
const [user, setUser] = useState(null);


const handleGoogleLogIn = () =>{
  signInWithPopup(auth, googleProvider)
  .then((result)=>{
    const loggedUser = result.user;
    setUser(loggedUser)
    console.log(loggedUser);
  })
  .catch((error)=>{
    const errorMsg = error.message;
    console.log(errorMsg);
  })
}
const handleGitHubLogIn = () =>{
  signInWithPopup(auth, gitHubProvider)
  .then((result)=>{
    const loggedUser = result.user;
    setUser(loggedUser)
    console.log(loggedUser);
  })
  .catch((error)=>{
    const errorMsg = error.message;
    console.log(errorMsg);
  })
};

const handleLogOut = () =>{
  signOut(auth)
  .then(()=>{
    setUser(null)
  })
  .catch((error)=>{
    console.log(error);
  })
}


  return (
    <>
     <h1>Home Page</h1>
     <div className='container'>
       { user? <button onClick={handleLogOut} >logOut</button> : <div>
       <button onClick={handleGoogleLogIn}> <AuthenticationCard></AuthenticationCard> </button>
       <button onClick={handleGitHubLogIn}> <AuthenticationCard2></AuthenticationCard2> </button>
       </div>

       }
       { user &&  <div>

        <h2>Welcome {user.displayName} </h2>
        <p>You have succesfully logged in by {user.providerData[0].providerId}</p>
        <img src={user.photoURL} alt="" />
       </div>



       }
     </div>
    </>
  )
}

export default App
