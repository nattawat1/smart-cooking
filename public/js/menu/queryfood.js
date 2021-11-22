import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import {
  getFirestore,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  collection,
  query,
  where,
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
    Beef();
    Chicken();
    Crispyflour();
    Moringglory();
    Pork();
  }
});

async function Beef() {
  var user = auth.currentUser;
  var uid = user.uid;
  const b = query(collection(db, uid), where("Beef", "==", "1"));
  const tur = query(collection(db, uid), where("Turkeyberry", "==", "1"));
  const querytur = await getDocs(tur);
  const queryb = await getDocs(b);
  const queryfood = document.querySelector(".beef");
  queryb.forEach((doc) => {
    console.log("Beef: ", doc.data().Beef);
    const html = `
    <div class="col-xl-auto col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <a href="Beef-Curry.html">
          <img
            class="card-img-top"
            src="img/menu-2/Rectangle 159 (5).png"
            height="170px"
          />
          <div
            class="
            text-xs
            font-weight-bold
            text-primary text-uppercase
            mb-3
            "
            ></div>
          <div class="h5 font-weight-bold text-gray-800">
          Beef Curry
          </div>
        </a>
      </div>
  </div>
  </div>
    `;
    queryfood.innerHTML = html;
  });
  querytur.forEach((doc) => {
    console.log("Turkeyberry: ", doc.data().Turkeyberry);
    const html = `
  <div class="col-xl-auto col-md-6 mb-4">
  <div class="card border-left-primary shadow h-100 py-2">
    <div class="card-body">
      <a href="Beef-Curry.html">
        <img
          class="card-img-top"
          src="img/menu-2/Rectangle 159 (5).png"
          height="170px"
        />
        <div
          class="
          text-xs
          font-weight-bold
          text-primary text-uppercase
          mb-3
          "
          ></div>
        <div class="h5 font-weight-bold text-gray-800">
        Beef Curry
        </div>
      </a>
    </div>
</div>
</div>
    `;
    queryfood.innerHTML = html;
  });
}

async function Chicken() {
  var user = auth.currentUser;
  var uid = user.uid;
  const ch = query(collection(db, uid), where("Chicken", "==", "1"));
  const n = query(collection(db, uid), where("Noodle", "==", "1"));
  const po = query(collection(db, uid), where("Potato", "==", "1"));
  const querypo = await getDocs(po);
  const querych = await getDocs(ch);
  const queryn = await getDocs(n);
  const queryfood = document.querySelector(".chicken");
  queryn.forEach((doc) => {
    console.log("Noodle: ", doc.data().Noodle);
    const html = `
    <div class="col-xl-auto col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <a href="Yakisoba.html">
          <img
            class="card-img-top"
            src="img/menu-2/Rectangle 164.png"
            height="170px"
          />
          <div
            class="
            text-xs
            font-weight-bold
            text-primary text-uppercase
            mb-3
            "
            ></div>
          <div class="h5 font-weight-bold text-gray-800">
            Yakisoba
          </div>
        </a>
      </div>
  </div>
</div>
    `;
    queryfood.innerHTML = html;
  });
  querypo.forEach((doc) => {
    console.log("Potato: ", doc.data().Potato);
    const html = `
    <div class="col-xl-auto col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <a href="ChickenBreasts.html">
          <img
            class="card-img-top"
            src="img/menu-2/Rectangle 159 (9).png"
            height="170px"
          />
          <div
            class="
            text-xs
            font-weight-bold
            text-primary text-uppercase
            mb-3
            "
            ></div>
          <div class="h5 font-weight-bold text-gray-800">
            Juicy Oven Baked Chicken Breasts
          </div>
        </a>
      </div>
    </div>
  </div>
    `;
    queryfood.innerHTML = html;
  });
  querych.forEach((doc) => {
    console.log("Chicken: ", doc.data().Chicken);
    const html = `
      <div class="col-xl-auto col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <a href="Yakisoba.html">
              <img
                class="card-img-top"
                src="img/menu-2/Rectangle 164.png"
                height="170px"
              />
              <div
                class="
                text-xs
                font-weight-bold
                text-primary text-uppercase
                mb-3
                "
                ></div>
              <div class="h5 font-weight-bold text-gray-800">
                Yakisoba
              </div>
            </a>
          </div>
      </div>
    </div>
  <div class="col-xl-auto col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <a href="ChickenBreasts.html">
          <img
            class="card-img-top"
            src="img/menu-2/Rectangle 159 (9).png"
            height="170px"
          />
          <div
            class="
            text-xs
            font-weight-bold
            text-primary text-uppercase
            mb-3
            "
            ></div>
          <div class="h5 font-weight-bold text-gray-800">
            Juicy Oven Baked Chicken Breasts
          </div>
        </a>
      </div>
    </div>
  </div>
    `;
    queryfood.innerHTML = html;
  });
}

async function Crispyflour() {
  var user = auth.currentUser;
  var uid = user.uid;
  const cr = query(collection(db, uid), where("Crispyflour", "==", "1"));
  const f = query(collection(db, uid), where("Fish", "==", "1"));
  const querycr = await getDocs(cr);
  const queryf = await getDocs(f);
  const queryfood = document.querySelector(".crispyflour");
  querycr.forEach((doc) => {
    console.log("Crispyflour: ", doc.data().Crispyflour);
    const html = `
    <div class="col-xl-auto col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <a href="Shrimp-Balls.html">
          <img
            class="card-img-top"
            src="img/menu-2/Rectangle 159.png"
            height="170px"
          />
          <div
            class="
            text-xs
            font-weight-bold
            text-primary text-uppercase
            mb-3
            "
            ></div>
          <div class="h5 font-weight-bold text-gray-800">
          Asian fried Shrimp Balls With Spicy Dipping Sauce
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="col-xl-auto col-md-6 mb-4">
  <div class="card border-left-primary shadow h-100 py-2">
    <div class="card-body">
      <a href="Fish-and-Chips.html">
        <img
          class="card-img-top"
          src="img/menu-2/Rectangle 159 (3).png"
          height="170px"
        />
        <div
          class="
          text-xs
          font-weight-bold
          text-primary text-uppercase
          mb-3
          "
          ></div>
        <div class="h5 font-weight-bold text-gray-800">
        Fish and Chips
        </div>
      </a>
    </div>
  </div>
</div>
    `;
    queryfood.innerHTML = html;
  });
  queryf.forEach((doc) => {
    console.log("Fish: ", doc.data().Fish);
    const html = `
    <div class="col-xl-auto col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <a href="Fish-and-Chips.html">
          <img
            class="card-img-top"
            src="img/menu-2/Rectangle 159 (3).png"
            height="170px"
          />
          <div
            class="
            text-xs
            font-weight-bold
            text-primary text-uppercase
            mb-3
            "
            ></div>
          <div class="h5 font-weight-bold text-gray-800">
          Fish and Chips
          </div>
        </a>
      </div>
    </div>
  </div>
    `;
    queryfood.innerHTML = html;
  });
}

async function Moringglory() {
  var user = auth.currentUser;
  var uid = user.uid;
  const m = query(collection(db, uid), where("Moringglory", "==", "1"));
  const s = query(collection(db, uid), where("Shrimp", "==", "1"));
  const v = query(collection(db, uid), where("Vermicelli", "==", "1"));
  const queryv = await getDocs(v);
  const querym = await getDocs(m);
  const querys = await getDocs(s);
  const queryfood = document.querySelector(".moringglory");
  queryv.forEach((doc) => {
    console.log("Vermicelli: ", doc.data().Vermicelli);
    const html = `
    <div class="col-xl-auto col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <a href="BakedShrimp.html">
          <img
            class="card-img-top"
            src="img/menu-2/Rectangle 159 (8).png"
            height="170px"
          />
          <div
            class="
            text-xs
            font-weight-bold
            text-primary text-uppercase
            mb-3
            "
            ></div>
          <div class="h5 font-weight-bold text-gray-800">
          Baked Shrimp with Glass noodles
          </div>
        </a>
      </div>
    </div>
  </div>
    `;
    queryfood.innerHTML = html;
  });
  querym.forEach((doc) => {
    console.log("Moringglory: ", doc.data().Moringglory);
    const html = `
    <div class="col-xl-auto col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <a href="Glory-Salad.html">
          <img
            class="card-img-top"
            src="img/menu-2/Rectangle 159 (2).png"
            height="170px"
          />
          <div
            class="
            text-xs
            font-weight-bold
            text-primary text-uppercase
            mb-3
            "
            ></div>
          <div class="h5 font-weight-bold text-gray-800">
          Deep Fried Morning Glory Salad
          </div>
        </a>
      </div>
    </div>
  </div>
    `;
    queryfood.innerHTML = html;
  });
  querys.forEach((doc) => {
    console.log("Shrimp: ", doc.data().Shrimp);
    const html = `
    <div class="col-xl-auto col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <a href="Shrimp-Balls.html">
          <img
            class="card-img-top"
            src="img/menu-2/Rectangle 159.png"
            height="170px"
          />
          <div
            class="
            text-xs
            font-weight-bold
            text-primary text-uppercase
            mb-3
            "
            ></div>
          <div class="h5 font-weight-bold text-gray-800">
          Asian fried Shrimp Balls With Spicy Dipping Sauce
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="col-xl-auto col-md-6 mb-4">
  <div class="card border-left-primary shadow h-100 py-2">
    <div class="card-body">
      <a href="Glory-Salad.html">
        <img
          class="card-img-top"
          src="img/menu-2/Rectangle 159 (2).png"
          height="170px"
        />
        <div
          class="
          text-xs
          font-weight-bold
          text-primary text-uppercase
          mb-3
          "
          ></div>
        <div class="h5 font-weight-bold text-gray-800">
        Deep Fried Morning Glory Salad
        </div>
      </a>
    </div>
  </div>
</div>
    <div class="col-xl-auto col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <a href="BakedShrimp.html">
          <img
            class="card-img-top"
            src="img/menu-2/Rectangle 159 (8).png"
            height="170px"
          />
          <div
            class="
            text-xs
            font-weight-bold
            text-primary text-uppercase
            mb-3
            "
            ></div>
          <div class="h5 font-weight-bold text-gray-800">
          Baked Shrimp with Glass noodles
          </div>
        </a>
      </div>
    </div>
  </div>
    `;
    queryfood.innerHTML = html;
  });
}

async function Pork() {
  var user = auth.currentUser;
  var uid = user.uid;
  const po = query(collection(db, uid), where("Pork", "==", "1"));
  const pa = query(collection(db, uid), where("Pasta", "==", "1"));
  const to = query(collection(db, uid), where("Tofu", "==", "1"));
  const queryto = await getDocs(to);
  const querypo = await getDocs(po);
  const querypa = await getDocs(pa);
  const queryfood = document.querySelector(".pork");
  queryto.forEach((doc) => {
    console.log("Tofu: ", doc.data().Tofu);
    const html = `
    <div class="col-xl-auto col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <a href="Clear-Soup.html">
          <img
            class="card-img-top"
            src="img/menu-2/Rectangle 159 (4).png"
            height="170px"
          />
          <div
            class="
            text-xs
            font-weight-bold
            text-primary text-uppercase
            mb-3
            "
            ></div>
          <div class="h5 font-weight-bold text-gray-800">
          Clear Soup with Tofu and Pork
          </div>
        </a>
      </div>
    </div>
  </div>
    `;
    queryfood.innerHTML = html;
  });
  querypa.forEach((doc) => {
    console.log("Pasta: ", doc.data().Pasta);
    const html = `
    <div class="col-xl-auto col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <a href="Dan-Dan-Pappardelle.html">
          <img
            class="card-img-top"
            src="img/menu-2/Rectangle 159 (1).png"
            height="170px"
          />
          <div
            class="
            text-xs
            font-weight-bold
            text-primary text-uppercase
            mb-3
            "
            ></div>
          <div class="h5 font-weight-bold text-gray-800">
          Dan Dan Pappardelle
          </div>
        </a>
      </div>
    </div>
  </div>
    `;
    queryfood.innerHTML = html;
  });
  querypo.forEach((doc) => {
    console.log("Pork: ", doc.data().Pork);
    const html = `
    <div class="col-xl-auto col-md-6 mb-4 card-title">
    <div class="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <a href="Dan-Dan-Pappardelle.html">
          <img
            class="card-img-top"
            src="img/menu-2/Rectangle 159 (1).png"
            height="170px"
          />
          <div
            class="
            text-xs
            font-weight-bold
            text-primary text-uppercase
            mb-3
            "
            ></div>
          <strong class="h5 font-weight-bold text-gray-800">
          Dan Dan Pappardelle
          </strong>
        </a>
      </div>
    </div>
  </div>
  <div class="col-xl-auto col-md-6 mb-4 card-title">
  <div class="card border-left-primary shadow h-100 py-2">
    <div class="card-body">
      <a href="Clear-Soup.html">
        <img
          class="card-img-top"
          src="img/menu-2/Rectangle 159 (4).png"
          height="170px"
        />
        <div
          class="
          text-xs
          font-weight-bold
          text-primary text-uppercase
          mb-3
          "
          ></div>
        <strong class="h5 font-weight-bold text-gray-800">
        Clear Soup with Tofu and Pork
        </strong>
      </a>
    </div>
  </div>
</div>
<div class="col-xl-auto col-md-6 mb-4 card-title">
<div class="card border-left-primary shadow h-100 py-2">
  <div class="card-body">
    <a href="PorkStir.html">
      <img
        class="card-img-top"
        src="img/menu-2/Rectangle 159 (7).png"
        height="170px"
      />
      <div
        class="
        text-xs
        font-weight-bold
        text-primary text-uppercase
        mb-3
        "
        ></div>
      <div class="h5 font-weight-bold text-gray-800">
      Pork Stir-Fry with Baby Bok Choy and Cashews
      </div>
    </a>
  </div>
</div>
</div>
<div class="col-xl-auto col-md-6 mb-4 card-title">
<div class="card border-left-primary shadow h-100 py-2">
  <div class="card-body">
    <a href="RoastedPork.html">
      <img
        class="card-img-top"
        src="img/menu-2/Rectangle 159 (10).png"
        height="170px"
      />
      <div
        class="
        text-xs
        font-weight-bold
        text-primary text-uppercase
        mb-3
        "
        ></div>
      <div class="h5 font-weight-bold text-gray-800">
      Honey Garlic Roasted Pork
      </div>
    </a>
  </div>
</div>
</div>
<div class="col-xl-auto col-md-6 mb-4 card-title">
<div class="card border-left-primary shadow h-100 py-2">
  <div class="card-body">
    <a href="KimchiSoup.html">
      <img
        class="card-img-top"
        src="img/menu-2/Rectangle 159 (6).png"
        height="170px"
      />
      <div
        class="
        text-xs
        font-weight-bold
        text-primary text-uppercase
        mb-3
        "
        ></div>
      <div class="h5 font-weight-bold text-gray-800">
      Kimchi Soup
      </div>
    </a>
  </div>
</div>
</div>
    `;
    queryfood.innerHTML = html;
  });
}