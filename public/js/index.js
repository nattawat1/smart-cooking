import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import {
  getFirestore,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  collection,
  doc,
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdWQFLhPwXxBOWBKrhCz-biUs2F776OZk",
  authDomain: "smart-cooking-9cd09.firebaseapp.com",
  projectId: "smart-cooking-9cd09",
  storageBucket: "smart-cooking-9cd09.appspot.com",
  messagingSenderId: "879943701858",
  appId: "1:879943701858:web:632cf2f2c27ec380d0483b",
  measurementId: "G-X1MJDMSJMC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();

auth.onAuthStateChanged((user) => {
  if (user) {
    getuser();
    // addingredients();
  } else {
    window.location = "login.html";
  }
});

const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut();
});

async function getuser() {
  var user = auth.currentUser;
  var uid = user.uid;
  const docRef = doc(db, uid, "data");
  const docSnap = await getDoc(docRef);
  const accountDetails = document.querySelector(".account-details");
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data().FirstName);
    const html = `
    <div>${docSnap.data().FirstName}</div>
    `;
    accountDetails.innerHTML = html;
  }
}

// async function addingredients() {
//   var user = auth.currentUser;
//   var uid = user.uid;
//   const docRef = await setDoc(doc(db, uid, "Ingredients"), {
//     Chicken: "0",
//     Pork: "0",
//     Beef: "0",
//     Vermicelli: "0",
//     Noodle: "0",
//     Pasta: "0",
//     Shrimp:"0",
//     Fish:"0",
//     Egg:"0",
//     Eggtofu:"0",
//     Tofu:"0",
//     Cheese:"0",
//     Crispyflour:"0",
//     Potato:"0",
//     Turkeyberry:"0",
//     Moringglory:"0",
//     Ivygourd:"0",
//     Kaffir:"0",
//     Spinach:"0",
//     Sauce:"0",
//   });
// }