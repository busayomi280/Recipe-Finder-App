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
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

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

// Initialize Firebase
const db = getFirestore(app);
const colRef = collection(db, "Food Recipe");

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

      document.querySelector(".uploadPic").style.display = "none";
    };

    reader.readAsDataURL(file);
  };
});

document.querySelector(".logout-btn").addEventListener("click", async () => {
  await signOut(auth);
  document.querySelector(".message").textContent = "Logged out successfully!";
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 1000);
});

const savedImage = localStorage.getItem("profileImage");
if (savedImage) {
  document.querySelector(".profile-pic img").src = savedImage;
}
const recipeArray = [];
const response = await getDocs(colRef);
response.docs.forEach((doc) => {
  recipeArray.push({ ...doc.data(), id: doc.id });
});
console.log(recipeArray);

async function searchRecipe() {
  try {
    const searchInput = document
      .querySelector(".search-input")
      .value.trim()
      .toLowerCase();
    const searchDisplay = document.querySelector(".search-result");

    if (!searchInput) {
      alert("Please type something");
      return;
    }
    const results = recipeArray.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchInput)
    );

    searchDisplay.innerHTML = "";

    if (results.length === 0) {
      searchDisplay.innerHTML = `<p>No recipe found for "${searchInput}".</p>`;
      return;
    }
    results.forEach((recipe) => {
      searchDisplay.innerHTML += `
      <div class="recipe-card">
        <h3>${recipe.name}</h3>
        <a href="../pages/inter-single.html?id=${recipe.id}">
        <img src="${recipe.image}" alt="${recipe.name}">
        </a>
      </div>
    `;
    });
    document.querySelector(".clear").addEventListener("click", () => {
      searchDisplay.innerHTML = "";
    });
  } catch (error) {
    console.log(error);
  }
}
let search = document.querySelector(".search");
let cancel = document.querySelector(".clear");
search.addEventListener("click", () => {
  searchRecipe();

  search.style.display = "none";
  cancel.style.display = "block";
  document.querySelector(".search-input").value = "";
});
cancel.addEventListener("click", () => {
  cancel.style.display = "none";
  search.style.display = "block";
  document.querySelector(".search-input").value = "";
});
