const fs = require('fs');
let data = fs.readFileSync('./src/data/product.json');
let product = JSON.parse(data);
console.log(typeof(product));


class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(title, description, code, price, thumbnail, stock) {
    // Verificar si el código ya existe en la lista de productos
    const existingProduct = this.products.find(product => product.code === code);

    if (existingProduct) {
      console.log(`El producto con código ${code} ya existe.`);
      return;
    }

    // Agregar el producto con un ID autoincrementable
    const newProduct = {
      title,
      description,
      id: this.nextId++,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(newProduct);
    console.log(`Producto ${title} agregado con éxito.`);
  }

  getProductsById() {
    return this.products;
  }

  deleteProduct(id) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true; // Producto eliminado con éxito
    }
    return false; // No se encontró ningún producto con el ID especificado
  }

  
}


const miTienda = new ProductManager();
miTienda.addProduct("Peli1", "Terror", "ADJ", 3000, "https://www.cinepolis.com.ar/peliculas/la-noche-del-demonio-la-puerta-roja", 10);
miTienda.addProduct("Peli2", "Animacion", "BKJ", 3000, "https://www.netflix.com/ar/title/81582346", 5);
miTienda.addProduct("Peli3", "Animacion", "ADJ", 4000, "https://www.netflix.com/ar/title/81582346", 10); // Intento de agregar un producto con el mismo código
miTienda.addProduct("Peli4", "Animacion", "CKJ", 4000, "https://www.netflix.com/ar/title/81582346", 10);
const products = miTienda.getProductsById();
console.log(products);

function getProductsById (id){
  const productoEncontrado = products.find(products => products.id ==id);
  return productoEncontrado || null;
}

const idBuscado=2;
const productoEncontrado = getProductsById(idBuscado);

if (productoEncontrado){
  console.log('Producto encontrado:' , productoEncontrado);

} else {
  console.log('Producto no encontrado');
}
// Función para actualizar un producto por su ID y campo
function updateProduct(productId, fieldToUpdate, newValue) {
  // Buscamos el índice del producto con el ID proporcionado
  const index = products.findIndex(producto => producto.id === productId);

  // Si encontramos el producto
  if (index !== -1) {
    // Actualizamos el campo especificado con el nuevo valor
    products[index][fieldToUpdate] = newValue;
    console.log(`Producto con ID ${productId} actualizado: ${fieldToUpdate} = ${newValue}`);
  } else {
    console.log(`Producto con ID ${productId} no encontrado.`);
  }
}

// Uso de la función para actualizar el precio del Producto 2
updateProduct(2, 'price', 2500);

// Verificamos el estado actual de la lista de productos
console.log(products);


// Ahora, productos solo contendrá los productos con IDs diferentes a 2
console.log(products);

const productIdToDelete = 3;
if (miTienda.deleteProduct(productIdToDelete)) {
  console.log(`Producto con ID ${productIdToDelete} eliminado con éxito.`);
} else {
  console.log(`No se encontró ningún producto con ID ${productIdToDelete}.`);
}

// Ahora eliminaria el producto 2
console.log(products);


