import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;

// Steps for authentication
// Step-1
// initial setup
// 1. firebase: create project
// 2. create web app
// 3. get configuration
// 4. initialiZe firebase
// 5. Enable auth method

// Step-2
// 1. Create login component
// 2. Create Register component
// 3. Route setup Login and Registration

// Step-3
//  1. sign in method
//  2. sign out method
//  3. State setup 
//  4. Special observer


// Steps-4 
// 1. create auth context 
// 2. create authProvider 
// 3. use authProvider 
// 4. create useAuth hook 
// 5. Set Provider context value 