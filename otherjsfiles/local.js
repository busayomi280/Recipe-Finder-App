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
const db = getFirestore(app);
const colRef = collection(db, "Food Recipe");

const recipeArray = [];

async function goToLocalDishes() {
  try {
    const response = await getDocs(colRef);
    response.docs.forEach((doc) => {
      recipeArray.push({ ...doc.data(), id: doc.id });
    });
    displayRecipe(recipeArray);
  } catch (error) {
    console.log(error);
  }
}
goToLocalDishes();

async function displayRecipe(recipes) {
    try {
        let recipeDisplay = document.querySelector('.recipe-container');
        recipeDisplay.innerHTML = '';
        recipeArray.forEach((recipe) => {
            recipeDisplay.innerHTML += `
            <div>
                <a href="../pages/local-single.html?id=${recipe.id}">
                <img src="${recipe.image}" alt="${recipe.name}" />
                </a>
                <h2>${recipe.name}</h2>
               
            </div>
            `
        }) 
    } catch (error) {
        console.log(error);
        
    }
}