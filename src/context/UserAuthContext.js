import { createContext, useContext , useEffect, useState} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup, 

} from 'firebase/auth'
import {auth} from '../Firebase';

const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    const [user,setUser] = useState("");
    function signUp(email , password){
        return createUserWithEmailAndPassword(auth , email, password);
    }
    function login(email , password){
        console.log("email" , email);
        return signInWithEmailAndPassword(auth,email,password);
    }

    function logOut(){
        return signOut(auth);
    }

    function googleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider(); 
        return signInWithPopup(auth, googleAuthProvider)
    }


    useEffect(() => {
     const unsubcribe =   onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
        });
        return() =>{
            unsubcribe();
        }
    },[]);
    
    return <userAuthContext.Provider value={{user,login,signUp, logOut, googleSignIn}}>
    {children}
    </userAuthContext.Provider>
}

export function useUserAuth(){
    return useContext(userAuthContext);
}



