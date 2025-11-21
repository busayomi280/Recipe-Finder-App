import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmWn9jqqUkpXHSVCCRF5yrQhjq4m65bCs",
  authDomain: "recipe-app-28482.firebaseapp.com",
  projectId: "recipe-app-28482",
  storageBucket: "recipe-app-28482.firebasestorage.app",
  messagingSenderId: "669286564518",
  appId: "1:669286564518:web:ba38e16ee23f1afee56a67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

 signupForm.addEventListener("submit", async(e) => {
    e.preventDefault();
    
    let username = signupForm.username.value;
    let email = signupForm.email.value;
    let password = signupForm.password.value;
    let confirmPassword = signupForm.confirmPassword.value;

  try {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    const user = credential.user;
    console.log("user created:", user);
    
    await updateProfile(user, {
        displayName: username
    });

    if (password !== confirmPassword) {
      alert("Password must be the same as confirm password");
    } else {
        document.querySelector('.message').style.display = 'block';
      signupForm.reset();
      setTimeout(() => {
        window.location.href = "./otherhtmlpages/login.html";
      }, 2000 )
    }
  } catch (error) {
    console.log(error);
  }
});

