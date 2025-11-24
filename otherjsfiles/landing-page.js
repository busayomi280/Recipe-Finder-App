import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
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
const userName = document.querySelector(".username");


onAuthStateChanged(auth, async (user) => {
  if (user) {
    const username = user.displayName;
    userName.textContent = `Welcome ${username}`;

  } else {
    console.log("No user is logged in");
    window.location.href = "../pages/login.html";
  }
});
document.querySelector(".uploadPic").addEventListener("click", () => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.click();

  fileInput.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const imageURL = reader.result;

      // Save to localStorage
      localStorage.setItem("profileImage", imageURL);

      document.querySelector(".profile-pic img").src = imageURL;
      
  document.querySelector('.uploadPic').style.display = 'none';  
    };

    reader.readAsDataURL(file);
  };
});

// document.querySelector(".uploadPic").addEventListener("click", () => {
//   const fileInput = document.createElement("input");
//   fileInput.type = "file";
//   fileInput.accept = "image/*";
//   fileInput.click();
//   fileInput.onchange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const user = auth.currentUser;
    
//   }
// }
// );
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

const savedImage = localStorage.getItem("profileImage");
if (savedImage) {
  document.querySelector(".profile-pic img").src = savedImage;
}

