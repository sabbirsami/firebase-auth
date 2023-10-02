import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZLG0hVME71-C_BgF_gfC5cd33J_SK-a8",
    authDomain: "fir-auth-f1422.firebaseapp.com",
    projectId: "fir-auth-f1422",
    storageBucket: "fir-auth-f1422.appspot.com",
    messagingSenderId: "528669590383",
    appId: "1:528669590383:web:1d2ba6604253e4026c5e9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
