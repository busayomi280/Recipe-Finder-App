import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-storage.js";

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
const userName = document.querySelector(".username");

const db = getFirestore(app);
const storage = getStorage(app);

let currentUser;

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const username = user.displayName;
    userName.textContent = `Welcome ${username}`;

  } else {
    console.log("No user is logged in");
    window.location.href = "../pages/login.html";
  }
});

document.querySelector(".logout-btn").addEventListener("click", async () => {
  await signOut(auth);
  document.querySelector(".message").textContent = "Logged out successfully!";
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 1000);
});

async function fetchRecipe() {
  try {
    const response = await fetch("https://www.themealdb.com/api.php");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

