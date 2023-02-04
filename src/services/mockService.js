const database = 
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

const obtenerProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(database);
    }, 2000);
  });
};

const getPlants = (idURL) => {
  return new Promise((resolve, reject) => {
    const reqItem = database.find((item) => {
      return item.id === parseInt(idURL);
    });

    setTimeout(() => {
      if (reqItem) resolve(reqItem);
      else reject("No se encontró el producto");
    }, 2000);
  });
};

const getPlantsByCategory = (categoryURL) => {
  return new Promise((resolve, reject) => {
    let reqItems = database.filter((item) => item.category === categoryURL);

    setTimeout(() => {
      resolve(reqItems);
    }, 2000);
  });
};

export default obtenerProductos;

export { getPlants, getPlantsByCategory };