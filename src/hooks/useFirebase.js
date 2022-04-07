import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();


const useFirebae =() =>{
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        return signInWithPopup(auth, googleProvider)

    }
    // oberve weather user auth state change or not
    useEffect( ()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
          });
    },[])

    const logout = () =>{
        signOut(auth)
        .then(() =>{
            setUser({});
        })
    }

    return{
        user,
        signInUsingGoogle,
        logout
    }

}

export default useFirebae;