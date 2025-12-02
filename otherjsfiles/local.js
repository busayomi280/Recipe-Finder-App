import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmWn9jqqUkpXHSVCCRF5yrQhjq4m65bCs",
  authDomain: "recipe-app-28482.firebaseapp.com",
  projectId: "recipe-app-28482",
  storageBucket: "recipe-app-28482.firebasestorage.app",
  messagingSenderId: "669286564518",
  appId: "1:669286564518:web:ba38e16ee23f1afee56a67",
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const colRef = collection(db, "Food Recipe");

let recipeArray = [];
let savedBookmarks = [];

async function goToLocalDishes() {
  try {
    const response = await getDocs(colRef);
    recipeArray = response.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    displayRecipe(recipeArray);
  } catch (error) {
    console.log(error);
  }
}

goToLocalDishes();

async function loadBookmarks(uid) {
  const bookmarkRef = collection(db, `users/${uid}/bookmarks`);
  const snapshot = await getDocs(bookmarkRef);

  savedBookmarks = snapshot.docs.map(doc => doc.data());

  displayRecipe(recipeArray);  
}
async function displayRecipe(recipes) {
  let recipeDisplay = document.querySelector(".recipe-container");
  if (!recipeDisplay) return;

  recipeDisplay.innerHTML = "";

  recipes.forEach(recipe => {
    const isBookmarked = savedBookmarks.some(item => item.id === recipe.id);

    recipeDisplay.innerHTML += `
      <div class="recipe" data-id="${recipe.id}">
        <a href="../pages/local-single.html?id=${recipe.id}">
          <img src="${recipe.image}" alt="${recipe.name}" />
        </a>

        <section class="info">
          <h2>${recipe.name}</h2>
          <i 
            class="${isBookmarked ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"} bookmark-icon" 
            data-id="${recipe.id}">
          </i>
        </section>
      </div>
    `;
  });

  attachBookmarkEvents();
}

function attachBookmarkEvents() {
  const icons = document.querySelectorAll(".bookmark-icon");

  icons.forEach(icon => {
    icon.addEventListener("click", async (e) => {
      e.preventDefault();

      const user = auth.currentUser;
      if (!user) {
        alert("Please log in to save bookmarks.");
        return;
      }

      const recipeId = icon.getAttribute("data-id");
      const recipe = recipeArray.find(r => r.id === recipeId);

      // 🔥 Immediately update UI so user sees feedback
      icon.classList.toggle("fa-solid");
      icon.classList.toggle("fa-regular");

      // 🔥 Then update Firestore
      await toggleBookmark(recipe, user.uid);
    });
  });
}

/* -----------------------
   TOGGLE BOOKMARK IN FIRESTORE
------------------------ */
async function toggleBookmark(recipe, uid) {
  const docRef = doc(db, `users/${uid}/bookmarks/${recipe.id}`);

  const already = savedBookmarks.some(item => item.id === recipe.id);

  if (already) {
    await deleteDoc(docRef);
    savedBookmarks = savedBookmarks.filter(item => item.id !== recipe.id);
  } else {
    await setDoc(docRef, recipe);
    savedBookmarks.push(recipe);
  }

  displayRecipe(recipeArray);
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    loadBookmarks(user.uid);
  } else {
    savedBookmarks = [];
    displayRecipe(recipeArray);
  }
});
