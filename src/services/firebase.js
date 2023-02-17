import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    doc,
    query,
    where,
    orderBy,
    addDoc,
    Firestore,
    writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-cqDWPYyrSV8lPxR3OCPk71yb1pSZMM0",
  authDomain: "reactalice.firebaseapp.com",
  projectId: "reactalice",
  storageBucket: "reactalice.appspot.com",
  messagingSenderId: "56064189781",
  appId: "1:56064189781:web:8dfe289cabeb00c7103bdc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function obtenerProductos() {
    const productsRef = collection(db, "products");
    const q = query(productsRef, orderBy("index"));
const snapshot = await getDocs(q);

const plants = snapshot.docs.map((elem) => {
    let plants = elem.data();
    plants.id = elem.id;
    return plants;
});

return plants;
}
export async function getPlants(idUrl) {
const productsRef = collection(db, "products");
const docRef = doc(productsRef, idUrl);

const snapshot = await getDoc(docRef);
return { ...snapshot.data(), id: snapshot.id };
}
export async function getPlantsByCategory(categoryUrl) {
const productsRef = collection(db, "products");

const q = query(productsRef, where("category", "==", categoryUrl));
const snapshot = await getDocs(q);
const plants = snapshot.docs.map((elem) => {
    let plants = elem.data();
    plants.id = elem.id;
    return plants;
});
return plants;
}
export async function getPlantsByKeyowrd(keyword) {
const productsRef = collection(db, "products");

const q = query(productsRef, where("title", "==", keyword));
const snapshot = await getDocs(q);
const plants = snapshot.docs.map((elem) => {
    let plants = elem.data();
    plants.id = elem.id;
    return plants;
});
return plants;
}

export async function createOrder_WithStockControl(order) {
const orderRef = collection(db, "order");

let respuesta = await addDoc(orderRef, order);

return respuesta.id;
}

export async function exportArray() {
    const products = 
[{
  "id": 1,
  "title": "Lyreleaf Jewelflower",
  "category": "Exteriores",
  "stock": 85,
  "imgurl": "https://www.hogarmania.com/archivos/201907/geranio-rosa-morado-XxXx80.jpg",
  "detail": "Streptanthus carinatus, arizonicus",
  "price": 169.99
}, {
  "id": 2,
  "title": "Mangosteen",
  "category": "Interiores",
  "stock": 62,
  "imgurl": "https://media.revistagq.com/photos/5f0c6e5c8c6c2847199b399d/master/w_1600%2Cc_limit/plantas-de-interior-floresyplantas-pilea-peperomioides-20.jpg",
  "detail": "Garcinia mangostana L.",
  "price": 185.0
}, {
  "id": 3,
  "title": "Scotch False Asphodel",
  "category": "Exteriores",
  "stock": 13,
  "imgurl": "https://t1.uc.ltmcdn.com/es/posts/8/8/2/hortensias_cuidados_y_caracteristicas_49288_15_600.webp",
  "detail": "Tofieldia pusilla (Michx.) Pers.",
  "price": 84.26
}, {
  "id": 4,
  "title": "Dwarf Serviceberry",
  "category": "Cactus y Suculentas",
  "stock": 7,
  "imgurl": "https://m.media-amazon.com/images/I/81TI5-UOx7L._AC_UF894,1000_QL80_.jpg",
  "detail": "Amelanchier pumila Nutt. ex M. Roem.",
  "price": 195.92
}, {
  "id": 5,
  "title": "Henbane",
  "category": "Cactus y Suculentas",
  "stock": 76,
  "imgurl": "https://www.clarin.com/img/2020/09/07/pequenos-cactus-en-mini-macetas___bGXvGXU3V_720x0__1.jpg",
  "detail": "Hyoscyamus L.",
  "price": 164.99
}, {
  "id": 6,
  "title": "Herbst's Bloodleaf",
  "category": "Interiores",
  "stock": 14,
  "imgurl": "https://www.elblogdelatabla.com/wp-content/uploads/2022/02/Calathea-Orbifolia.jpg",
  "detail": "Iresine herbstii Hook.",
  "price": 110.39
}];

for (let item of products) {
    item.index = item.id;
    delete item.id;
    addDoc(collection(db, "products"), item).then((respuesta) =>
    console.log("item creado: ", respuesta.id)
    );
}
}

export async function exportArrayWithBatch() {
    const products = 
    [{
      "id": 1,
      "title": "Lyreleaf Jewelflower",
      "category": "Exteriores",
      "stock": 85,
      "imgurl": "https://www.hogarmania.com/archivos/201907/geranio-rosa-morado-XxXx80.jpg",
      "detail": "Streptanthus carinatus, arizonicus",
      "price": 169.99
    }, {
      "id": 2,
      "title": "Mangosteen",
      "category": "Interiores",
      "stock": 62,
      "imgurl": "https://media.revistagq.com/photos/5f0c6e5c8c6c2847199b399d/master/w_1600%2Cc_limit/plantas-de-interior-floresyplantas-pilea-peperomioides-20.jpg",
      "detail": "Garcinia mangostana L.",
      "price": 185.0
    }, {
      "id": 3,
      "title": "Scotch False Asphodel",
      "category": "Exteriores",
      "stock": 13,
      "imgurl": "https://t1.uc.ltmcdn.com/es/posts/8/8/2/hortensias_cuidados_y_caracteristicas_49288_15_600.webp",
      "detail": "Tofieldia pusilla (Michx.) Pers.",
      "price": 84.26
    }, {
      "id": 4,
      "title": "Dwarf Serviceberry",
      "category": "Cactus y Suculentas",
      "stock": 7,
      "imgurl": "https://m.media-amazon.com/images/I/81TI5-UOx7L._AC_UF894,1000_QL80_.jpg",
      "detail": "Amelanchier pumila Nutt. ex M. Roem.",
      "price": 195.92
    }, {
      "id": 5,
      "title": "Henbane",
      "category": "Cactus y Suculentas",
      "stock": 76,
      "imgurl": "https://www.clarin.com/img/2020/09/07/pequenos-cactus-en-mini-macetas___bGXvGXU3V_720x0__1.jpg",
      "detail": "Hyoscyamus L.",
      "price": 164.99
    }, {
      "id": 6,
      "title": "Herbst's Bloodleaf",
      "category": "Interiores",
      "stock": 14,
      "imgurl": "https://www.elblogdelatabla.com/wp-content/uploads/2022/02/Calathea-Orbifolia.jpg",
      "detail": "Iresine herbstii Hook.",
      "price": 110.39
    }];

    const batch = writeBatch(db);

for (let item of products) {
    item.index = item.id;
    delete item.id;

    const collectionRef = collection(db, "products");
    const newDoc = doc(collectionRef);

    batch.set(newDoc, item);
}

batch.commit().then(() => console.log("batch listo"));

}

export default db;