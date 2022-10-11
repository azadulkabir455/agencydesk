import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAILoA5NLjZqt6k8QSeXNQRpmmdR24lJek",
    authDomain: "authentication-tut-d6a6c.firebaseapp.com",
    projectId: "authentication-tut-d6a6c",
    storageBucket: "authentication-tut-d6a6c.appspot.com",
    messagingSenderId: "626101404159",
    appId: "1:626101404159:web:992a72f803a353c7baa7ca",
    measurementId: "G-HDPFMXXQPZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);