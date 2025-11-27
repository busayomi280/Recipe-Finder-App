import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
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


export let favRecipes = JSON.parse(localStorage.getItem('bookmarks')) || [];

async function displayRecipe(recipes) {
  try {
    let recipeDisplay = document.querySelector(".recipe-container");
    recipeDisplay.innerHTML = "";
  recipes.map(recipe => {
    const isBookmarked = favRecipes.some(item => item.id === recipe.id);

    recipeDisplay.innerHTML += 
     `
      <div class="recipe" data-id="${recipe.id}">
          <a href="../pages/local-single.html?id=${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.name}" />
          </a>
          <section class="info">
            <h2>${recipe.name}</h2> 
            <i  class="${isBookmarked ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"} bookmark-icon" data-id="${recipe.id}"></i>
          </section>               
      </div>
    `}
  ).join("");
  } catch (error) {
    console.log(error);
  }
}

  function toggleBookmark(recipe) {
    let exists = favRecipes.some(item => item.id === recipe.id);
    if (exists){
      favRecipes.splice(favRecipes.indexOf(id), 1); // FIXED
    }else {
      favRecipes.push({
        id: recipe.id,
        name: recipe.name,
        imageUrl: recipe.imageUrl,
        ingredients: recipe.ingredients,
        steps: recipe.steps
      });
    }

    localStorage.setItem("bookmarks", JSON.stringify(favRecipes));
    displayRecipe();
    console.log(favRecipes);
  }
  document.querySelectorAll(".bookmark-icon").forEach(icon => {
    icon.addEventListener("click", function(e) {
      e.preventDefault();
      const recipeId = this.getAttribute("data-id");
      const recipe = recipeArray.find(r => r.id === recipeId);
      toggleBookmark(recipe);
    });
  });
  
