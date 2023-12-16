// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_PASS);

const firebaseConfig = {
      apiKey: "AIzaSyAiLpQ4ZCJTqbMwmvAj5MK2nE1-e8-ysZ4",
      authDomain: "wholehealth-1fcbe.firebaseapp.com",
      projectId: "wholehealth-1fcbe",
      storageBucket: "wholehealth-1fcbe.appspot.com",
      messagingSenderId: "1018841568352",
      appId: "1:1018841568352:web:04074a6e0714440c0d9f05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


// apiKey: import.meta.env.VITE_APIKEY,
// authDomain: import.meta.env.VITE_AUTHDOMAIN,
// projectId: import.meta.env.VITE_PROJECTID,
// storageBucket: import.meta.env.VITE_STORAGEBUCKET,
// messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
// appId: import.meta.env.VITE_APPID