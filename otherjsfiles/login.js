import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
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

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  try {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    const user = credential.user;
    console.log("Login successfull:", user);

    document.querySelector(".message").style.display = "block";
    loginForm.reset();
    setTimeout(() => {
      window.location.href = "../pages/landing page.html";
    }, 2000);
  } catch (error) {
    console.log(error);
  }
});

