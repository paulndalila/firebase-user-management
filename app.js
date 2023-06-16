import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { API_KEY, Project_Id } from "./config.js";

const firebaseConfig = {
apiKey: API_KEY,
authDomain: Project_Id+".firebaseapp.com",
projectId: Project_Id,
storageBucket: Project_Id+".appspot.com",
messagingSenderId: "375389616803",
appId: "1:375389616803:web:34aa43121f0b7622441d16",
measurementId: "G-SGLETW01R3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();	  

//Registration code  
document.getElementById("register").addEventListener("click", function() {
    var email =  document.getElementById("regEmail").value;
    var password = document.getElementById("regPassword").value;
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

        const user = userCredential.user;
        alert("You've registered successfully!");
        document.getElementById("regEmail").value = "";
        document.getElementById("regPassword").value = "";

    })
    .catch((error) => {
        console.log(error.Message+" "+error.code);
    });		  		  
});

//Login code	  
document.getElementById("login").addEventListener("click", function() {
    var email =  document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
        const user = userCredential.user;
        console.log(user);
        alert("You've logged in successfully!");
        document.getElementById("loginEmail").value = "";
        document.getElementById("loginPassword").value = "";

    })
    .catch((error) => {
        console.log(error.Message+" "+error.code);
    });		  		  
});