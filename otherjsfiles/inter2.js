
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  setDoc,
  deleteDoc,
  doc,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
 apiKey: "AIzaSyCmWn9jqqUkpXHSVCCRF5yrQhjq4m65bCs",
  authDomain: "recipe-app-28482.firebaseapp.com",
  projectId: "recipe-app-28482",
  storageBucket: "recipe-app-28482.firebasestorage.app",
  messagingSenderId: "669286564518",
  appId: "1:669286564518:web:ba38e16ee23f1afee56a67",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const colRef = collection(db, 'International')

 const inter = []; 
const getRecipe = async () => {
   try {
            const res = await getDocs(colRef);
            res.docs.forEach((doc) => {
              inter.push({ ...doc.data(), id: doc.id });
            });
            renderRecipes(inter);
        } catch (error) {
            console.log(error);
            
        }
    }
    getRecipe()
let recipeDisplay = document.querySelector('.recipe-container');
let savedBookmarks = []; 

function renderRecipes(recipearr) {
  recipeDisplay.innerHTML = "";

  recipearr.forEach(recipe => {
    const isBookmarked = savedBookmarks.some(item => item.id === recipe.id);

    recipeDisplay.innerHTML += `
      <div class="recipe-card">
        <a href="../pages/inter-single.html?id=${recipe.id}">
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

async function loadBookmarks(uid) {
  const colRef = collection(db, `users/${uid}/bookmarks`);
  const snapshot = await getDocs(colRef);

  savedBookmarks = snapshot.docs.map(doc => doc.data());
  
  renderRecipes(inter);
}

async function toggleBookmark(recipeId, uid) {
  const recipe = inter.find(item => item.id == recipeId);
  const docRef = doc(db, `users/${uid}/bookmarks/${recipe.id}`);

  const already = savedBookmarks.some(item => item.id === recipe.id);

  if (already) {
    await deleteDoc(docRef);
    savedBookmarks = savedBookmarks.filter(item => item.id !== recipe.id);
  } else {
    await setDoc(docRef, recipe);
    savedBookmarks.push(recipe);
  }

  renderRecipes(inter);
}

function attachBookmarkEvents() {
  const icons = document.querySelectorAll(".bookmark-icon");

  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      const recipeId = icon.getAttribute("data-id");

      const user = auth.currentUser;
      if (!user) {
        alert("Please log in to save bookmarks.");
        return;
      }

      toggleBookmark(recipeId, user.uid);
    });
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    loadBookmarks(user.uid);
  } else {
    savedBookmarks = [];
    renderRecipes(inter);
  }
});

renderRecipes(inter);
