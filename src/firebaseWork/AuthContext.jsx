import { createContext, useEffect } from "react";
import { useState } from "react";

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth";
import auth from "./firebase.config";

 
export const fireContext = createContext(null)

       const GProvider = new GoogleAuthProvider()

const AuthContext = ({children}) => {

    const [user, setUser] = useState([])
    

    const createUser = (email, password) =>{

      return createUserWithEmailAndPassword(auth, email, password)


    }

    const signIn = (email, password) =>{

      return signInWithEmailAndPassword(auth, email, password)

    }


    const googlepop = () =>{

        return signInWithPopup(auth, GProvider)
    }

    const logOut = () =>{
        signOut(auth)
    }

    useEffect( ()=> {
      
        const unSubcribe = onAuthStateChanged(auth, currentUser =>{

             setUser(currentUser)
             console.log(currentUser)


        })
        
        return ()=>{
          
            unSubcribe();

        }

    } , [])


    const authInfo = {user, createUser, signIn, googlepop, logOut }

    return (
        <div>

            <fireContext.Provider value={authInfo}>
                {children}
            </fireContext.Provider>
            
        </div>
    );
};

export default AuthContext;