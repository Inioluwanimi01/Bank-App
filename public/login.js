 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
 import {
   getAuth,
   signInWithEmailAndPassword,
   
 } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAEIG2GGIAlkUz0aFYb7CoeUS3Y8Js6RW0",
   authDomain: "my-first-fb-project-706ea.firebaseapp.com",
   projectId: "my-first-fb-project-706ea",
   storageBucket: "my-first-fb-project-706ea.appspot.com",
   messagingSenderId: "289169955678",
   appId: "1:289169955678:web:09032ad8105c1a17144dcf",
   measurementId: "G-GET6P7NPGP"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth= getAuth(app);


document.getElementById("signIn").addEventListener("click", () => {
 
  let loginEmail = document.getElementById("email").value;
  let loginPassword = document.getElementById("loginPassword").value;
//  let signInUser = {email, password}

  signInWithEmailAndPassword (auth, loginEmail, loginPassword)
  .then(  (userCredential) => {
    // Signed in 
    const user =  userCredential.user;
    alert("Sign In Successful");
    console.log(user);

    window.location.href = "dashboard.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage)
    console.error("Error: ", errorCode, errorMessage);
  }); 
})

 