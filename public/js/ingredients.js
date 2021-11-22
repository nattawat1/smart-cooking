import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import {
  getFirestore,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  collection,
  doc,
  updateDoc,
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

const BeefUpdatebtn = document.getElementById("beef");
BeefUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Beef = doc(db, uid, "Ingredients");
  updateDoc(Beef, {
    Beef: "1",
  });
});
const ChickenUpdatebtn = document.getElementById("chicken");
ChickenUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Chicken = doc(db, uid, "Ingredients");
  updateDoc(Chicken, {
    Chicken: "1",
  });
});
const PorkUpdatebtn = document.getElementById("pork");
PorkUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Pork = doc(db, uid, "Ingredients");
  updateDoc(Pork, {
    Pork: "1",
  });
});
const VermicelliUpdatebtn = document.getElementById("vermicelli");
VermicelliUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Vermicelli = doc(db, uid, "Ingredients");
  updateDoc(Vermicelli, {
    Vermicelli: "1",
  });
});
const NoodleUpdatebtn = document.getElementById("noodle");
NoodleUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Noodle = doc(db, uid, "Ingredients");
  updateDoc(Noodle, {
    Noodle: "1",
  });
});
const PastaUpdatebtn = document.getElementById("pasta");
PastaUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Pasta = doc(db, uid, "Ingredients");
  updateDoc(Pasta, {
    Pasta: "1",
  });
});
const ShrimpUpdatebtn = document.getElementById("shrimp");
ShrimpUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Shrimp = doc(db, uid, "Ingredients");
  updateDoc(Shrimp, {
    Shrimp: "1",
  });
});
const EggUpdatebtn = document.getElementById("egg");
EggUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Egg = doc(db, uid, "Ingredients");
  updateDoc(Egg, {
    Egg: "1",
  });
});
const EggtofuUpdatebtn = document.getElementById("eggtofu");
EggtofuUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Eggtofu = doc(db, uid, "Ingredients");
  updateDoc(Eggtofu, {
    Eggtofu: "1",
  });
});
const TofuUpdatebtn = document.getElementById("tofu");
TofuUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Tofu = doc(db, uid, "Ingredients");
  updateDoc(Tofu, {
    Tofu: "1",
  });
});
const CheeseUpdatebtn = document.getElementById("cheese");
CheeseUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Cheese = doc(db, uid, "Ingredients");
  updateDoc(Cheese, {
    Cheese: "1",
  });
});
const CrispyflourUpdatebtn = document.getElementById("crispyflour");
CrispyflourUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Crispyflour= doc(db, uid, "Ingredients");
  updateDoc(Crispyflour, {
    Crispyflour: "1",
  });
});
const KimchiUpdatebtn = document.getElementById("kimchi");
KimchiUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Kimchi = doc(db, uid, "Ingredients");
  updateDoc(Kimchi, {
    Kimchi: "1",
  });
});
const PotatoUpdatebtn = document.getElementById("potato");
PotatoUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Potato = doc(db, uid, "Ingredients");
  updateDoc(Potato, {
    Potato: "1",
  });
});
const TurkeyberryUpdatebtn = document.getElementById("turkeyberry");
TurkeyberryUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Turkeyberry = doc(db, uid, "Ingredients");
  updateDoc(Turkeyberry, {
    Turkeyberry: "1",
  });
});
const MoringgloryUpdatebtn = document.getElementById("moringglory");
MoringgloryUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Moringglory = doc(db, uid, "Ingredients");
  updateDoc(Moringglory, {
    Moringglory: "1",
  });
});
const IvygourdUpdatebtn = document.getElementById("ivygourd");
IvygourdUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Ivygourd = doc(db, uid, "Ingredients");
  updateDoc(Ivygourd, {
    Ivygourd: "1",
  });
});
const KaffirUpdatebtn = document.getElementById("kaffir");
KaffirUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Kaffir = doc(db, uid, "Ingredients");
  updateDoc(Kaffir, {
    Kaffir: "1",
  });
});
const SpinachUpdatebtn = document.getElementById("spinach");
SpinachUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Spinach = doc(db, uid, "Ingredients");
  updateDoc(Spinach, {
    Spinach: "1",
  });
});
const SauceUpdatebtn = document.getElementById("sauce");
SauceUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Sauce = doc(db, uid, "Ingredients");
  updateDoc(Sauce, {
    Sauce: "1",
  });
});

const FishUpdatebtn = document.getElementById("fish");
FishUpdatebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Fish = doc(db, uid, "Ingredients");
  updateDoc(Fish, {
    Fish: "1",
  });
});



const Beefdebtn = document.getElementById("debeef");
Beefdebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Beefde = doc(db, uid, "Ingredients");
  updateDoc(Beefde, {
    Beef: "0",
  });
});
const Chickendebtn = document.getElementById("dechicken");
Chickendebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Chickende = doc(db, uid, "Ingredients");
  updateDoc(Chickende, {
    Chicken: "0",
  });
});
const Porkdebtn = document.getElementById("depork");
Porkdebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Porkde = doc(db, uid, "Ingredients");
  updateDoc(Porkde, {
    Pork: "0",
  });
});
const Vermicellidebtn = document.getElementById("devermicelli");
Vermicellidebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Vermicellide = doc(db, uid, "Ingredients");
  updateDoc(Vermicellide, {
    Vermicelli: "0",
  });
});
const Noodledebtn = document.getElementById("denoodle");
Noodledebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Noodlede = doc(db, uid, "Ingredients");
  updateDoc(Noodlede, {
    Noodle: "0",
  });
});
const Pastadebtn = document.getElementById("depasta");
Pastadebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Pastade = doc(db, uid, "Ingredients");
  updateDoc(Pastade, {
    Pasta: "0",
  });
});
const Shrimpdebtn = document.getElementById("deshrimp");
Shrimpdebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Shrimpde = doc(db, uid, "Ingredients");
  updateDoc(Shrimpde, {
    Shrimp: "0",
  });
});
const Eggdebtn = document.getElementById("deegg");
Eggdebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Eggde = doc(db, uid, "Ingredients");
  updateDoc(Eggde, {
    Egg: "0",
  });
});
const Eggtofudebtn = document.getElementById("deeggtofu");
Eggtofudebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Eggtofude = doc(db, uid, "Ingredients");
  updateDoc(Eggtofude, {
    Eggtofu: "0",
  });
});
const Tofudebtn = document.getElementById("detofu");
Tofudebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Tofude = doc(db, uid, "Ingredients");
  updateDoc(Tofude, {
    Tofu: "0",
  });
});
const Cheesedebtn = document.getElementById("decheese");
Cheesedebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Cheesede = doc(db, uid, "Ingredients");
  updateDoc(Cheesede, {
    Cheese: "0",
  });
});
const Crispyflourdebtn = document.getElementById("decrispyflour");
Crispyflourdebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Crispyflourde= doc(db, uid, "Ingredients");
  updateDoc(Crispyflourde, {
    Crispyflour: "0",
  });
});
const Kimchidebtn = document.getElementById("dekimchi");
Kimchidebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Kimchide = doc(db, uid, "Ingredients");
  updateDoc(Kimchide, {
    Kimchi: "0",
  });
});
const Potatodebtn = document.getElementById("depotato");
Potatodebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Potatode = doc(db, uid, "Ingredients");
  updateDoc(Potatode, {
    Potato: "0",
  });
});
const Turkeyberrydebtn = document.getElementById("deturkeyberry");
Turkeyberrydebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Turkeyberryde = doc(db, uid, "Ingredients");
  updateDoc(Turkeyberryde, {
    Turkeyberry: "0",
  });
});
const Moringglorydebtn = document.getElementById("demoringglory");
Moringglorydebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Moringgloryde = doc(db, uid, "Ingredients");
  updateDoc(Moringgloryde, {
    Moringglory: "0",
  });
});
const Ivygourddebtn = document.getElementById("deivygourd");
Ivygourddebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Ivygourdde = doc(db, uid, "Ingredients");
  updateDoc(Ivygourdde, {
    Ivygourd: "0",
  });
});
const Kaffirdebtn = document.getElementById("dekaffir");
Kaffirdebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Kaffirde = doc(db, uid, "Ingredients");
  updateDoc(Kaffirde, {
    Kaffir: "0",
  });
});
const Spinachdebtn = document.getElementById("despinach");
Spinachdebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Spinachde = doc(db, uid, "Ingredients");
  updateDoc(Spinachde, {
    Spinach: "0",
  });
});
const Saucedebtn = document.getElementById("desauce");
Saucedebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Saucede = doc(db, uid, "Ingredients");
  updateDoc(Saucede, {
    Sauce: "0",
  });
});

const Fishdebtn = document.getElementById("defish");
Fishdebtn.addEventListener("click", (event) => {
  var user = auth.currentUser;
  var uid = user.uid;
  const Fishde = doc(db, uid, "Ingredients");
  updateDoc(Fishde, {
    Fish: "0",
  });
});