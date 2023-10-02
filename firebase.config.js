// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE30ceo8mUXU3_B_0IiwYoTySg4Hyq-xg",
  authDomain: "user-email-password-d9d0a.firebaseapp.com",
  projectId: "user-email-password-d9d0a",
  storageBucket: "user-email-password-d9d0a.appspot.com",
  messagingSenderId: "202391556428",
  appId: "1:202391556428:web:19218756544001281bbfe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);
export default auth;