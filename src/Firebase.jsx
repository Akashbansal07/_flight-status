import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCO6VtICNCSaVk6vHs59ob8Pa5gwSFWGSs",
    authDomain: "flight-status-a3805.firebaseapp.com",
    projectId: "flight-status-a3805",
    storageBucket: "flight-status-a3805.appspot.com",
    messagingSenderId: "687082544008",
    appId: "1:687082544008:web:de3003dc813e1d6c5e783d",
    measurementId: "G-49H2DY7L7N",
    databaseURL:"https://flight-status-a3805-default-rtdb.firebaseio.com"
  };

  export const app= initializeApp(firebaseConfig);