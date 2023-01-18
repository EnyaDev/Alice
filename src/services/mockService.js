const database = 
[{
  "id": 1,
  "title": "Lyreleaf Jewelflower",
  "category": "Brassicaceae",
  "stock": 85,
  "imgurl": "https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0218/1009.jpeg",
  "detail": "Streptanthus carinatus C. Wright ex A. Gray ssp. arizonicus (S. Watson) Kruckeb., Rodman & Worthington",
  "price": 169.99
}, {
  "id": 2,
  "title": "Mangosteen",
  "category": "Clusiaceae",
  "stock": 62,
  "imgurl": "https://www.infoagro.com/documentos/images/1463_machabuca_fase1.jpg",
  "detail": "Garcinia mangostana L.",
  "price": 185.0
}, {
  "id": 3,
  "title": "Scotch False Asphodel",
  "category": "Liliaceae",
  "stock": 13,
  "imgurl": "https://inaturalist-open-data.s3.amazonaws.com/photos/708083/large.jpg",
  "detail": "Tofieldia pusilla (Michx.) Pers.",
  "price": 84.26
}, {
  "id": 4,
  "title": "Dwarf Serviceberry",
  "category": "Rosaceae",
  "stock": 7,
  "imgurl": "https://newfs.s3.amazonaws.com/taxon-images-1000s1000/Rosaceae/amelanchier-spicata-fr-ahaines.jpg",
  "detail": "Amelanchier pumila (Torr. & A. Gray) Nutt. ex M. Roem.",
  "price": 195.92
}, {
  "id": 5,
  "title": "Henbane",
  "category": "Solanaceae",
  "stock": 76,
  "imgurl": "https://cdn.britannica.com/52/118052-050-04723187/Henbane.jpg",
  "detail": "Hyoscyamus L.",
  "price": 164.99
}, {
  "id": 6,
  "title": "Herbst's Bloodleaf",
  "category": "Amaranthaceae",
  "stock": 14,
  "imgurl": "https://static.vecteezy.com/system/resources/previews/003/516/786/large_2x/bright-leaves-of-herbsts-bloodleaf-iresine-herbstii-photo.jpg",
  "detail": "Iresine herbstii Hook.",
  "price": 110.39
}];

const obtenerProductos = () => {
    return new Promise((resolve, reject) => {

        let error = false;
      setTimeout(() => {
        if (error) reject("Undefined")
        else resolve(database);
      }, 2000);
    });
  };
  
  export default obtenerProductos;