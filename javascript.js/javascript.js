// Array para almacenar los productos en el carrito
const products = [
    { id:1, nombre: "Ajna Día", precio: 180.00, categoría: Día, favorito:false, imagen: "../imagenes-carrito/Ajna-día-180.jpg" alt= "Modelo Ajna Día" },
    { id:2, nombre: "Alegría Día Niño", precio: 180.00, categoría: Niño Día, favorito:false, imagen: "../imagenes-carrito/alegría-dia-niño-180.jpg" alt= "Modelo Alegría Día Niño" },
    { id:3, nombre: "Alegría Noche Niño", precio: 180.00, categoría: Niño Noche, favorito:false, imagen: "../imagenes-carrito/alegría-noche-niño-180.jpg" alt="Modelo Alegría Noche Niño" },
    { id:4, nombre: "Anahata Día", precio: 180.00, categoría: Día, favorito:false, imagen: "../imagenes-carrito/anahata-dia-180.jpg" alt="Modelo Anahata día" },
    { id:5, nombre: "Anahata Noche", precio: 120.00, categoría: Noche, favorito:false, imagen: "../imagenes-carrito/anahata-noche-120.jpg" alt="Modelo Anahata noche" },
    { id:6, nombre: "Calma Día Niño", precio: 89.00, categoría: Niño Día, favorito:false, imagen: "../imagenes-carrito/calma-dia-niño-89.jpg" alt="Modelo Calma Día Niño" },
    { id:7, nombre: "Corona Animals Día", precio: 180.00, categoría: Día, favorito:false, imagen: "../imagenes-carrito/Corona animals-dia-180.jpg" alt="Modelo Corona Animals Día" },
    { id:8, nombre: "Corona Animals Noche", precio: 89.00, categoría: Noche, favorito:false, imagen: "../imagenes-carrito/Corona animals-noche-89.jpg" alt="Modelo Corona Animals Noche" },
    { id:9, nombre: "Corona Día", precio: 180.00, categoría: Día, favorito:false, imagen: "../imagenes-carrito/corona-dia-180.jpg" alt="Modelo Corona Día" },
    { id:10, nombre: "Corona Noche", precio: 180.00, categoría: Noche, favorito:false, imagen: "../imagenes-carrito/corona-noche-180.jpg" alt="Modelo Corona Noche" },
    { id:11, nombre: "Honra Día Niño", precio: 180.00, categoría: Día, favorito:false, imagen: "../imagenes-carrito/honra-dia-niños-180.jpg" alt="Modelo Honra Día Niño" },
    { id:12, nombre: "Honra Noche Niño", precio: 180.00, categoría: Niño Noche, favorito:false, imagen: "../imagenes-carrito/honra-noche-niños-180.jpg" alt="Modelo Honra Noche Niño" },
    { id:13, nombre: "Plexo Solar Día", precio: 150.00, categoría: Día, favorito:false, imagen: "../imagenes-carrito/plaxo solar- dia- 150.jpg" alt="Modelo Plexo Solar Día" },
    { id:14, nombre: "Plexo Solar Noche", precio: 180.00, categoría: Noche, favorito:false, imagen: "..imagenes-carrito/plaxo solar- noche- 180.jpg" alt="Modelo Plexo Solar Noche" },
    { id:15, nombre: "Plexo Solar Animals Día", precio: 180.00, categoría: Día, favorito:false, imagen: "../imagenes-carrito/plexo solar animals-dia-180.jpg" alt="Modelo Plexo Solar Animals Día" },
    { id:16, nombre: "Plexo Solar Animals Noche", precio: 180.00, categoría: Noche, favorito:false, imagen: "../imagenes-carrito/plexo solar animals-noche-180.jpg" alt="Modelo Plexo Solar Animals Noche" },
    { id:17, nombre: "Raíz Día", precio: 180.00, categoría: Día, favorito:false, imagen: "../imagenes-carrito/raiz-dia-180.jpg" alt="Modelo Raíz día" },
    { id:18, nombre: "Raíz Noche", precio: 180.00, categoría: Noche, favorito:false, imagen: "../imagenes-carrito/raiz-noche-180.jpg" alt="Modelo Raíz Noche"},
    { id:19, nombre: "Luz roja", precio: 19.00, categoría: Fotobiomodulación, favorito:false, imagen: "../imagenes-carrito/luz roja-fotobiomodulación-19.png" alt="Imagen de una bombilla de luz roja"},
    { id:20, nombre: "Lámpara terapia pequeña", precio: 499.00, categoría: Fotobiomodulación, favorito:false, imagen: "../imagenes-carrito/lampara-terapia-499.jpg" alt="Imagen de una lámpara de terapia de luz roja "},
    { id:21, nombre: "Lámpara terapia grande", precio: 850.00, categoría: Fotobiomodulación, favorito:false, imagen: "../imagenes-carrito/lampara-terapia-grande-850.jpg" alt="Imagen de una lámpara terapia de luz roja grande"},
];

const productsContainer = document.getElementById("products");
let lineasCarrito = [];

function displayProducts(){
    productsContainer.innerHTML = products.map(product => 

    `
    <div class = "product-card">
        <img src = "${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Precio: ${product.price.toFixed(2)} €</p>
        <div class="product-cantidad">
           <select id="cantidad-${product.id}">
                <option value = "1">1</option>
                <option value = "2">2</option>
                <option value = "3">3</option>
                <option value = "4">4</option>
                <option value = "5">5</option>
                <option value = "6">6</option>
            </select>
            <select id = "size-${product.id}">
            ${product.sizes.map(talla => 
                `<option value = "${talla}">${talla}</option>`
            ).join('')
            }
            </select>
        </div>
        <button onclick="addToCart(${product.id})">Añadir al carrito</button>
    </div>
    `
).join('');

}

// Array para almacenar los productos favoritos
const favoritos = [];
// Array para almacenar los productos en el carrito
const carrito = [];
// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        carrito.push(producto);
        console.log(`Agregado al carrito: ${producto.nombre}`);
    } else {
        console.log("Producto no encontrado");
    }
}
// Función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
    const index = carrito.findIndex(p => p.id === id);
    if (index !== -1) {
        const productoEliminado = carrito.splice(index, 1);
        console.log(`Eliminado del carrito: ${productoEliminado[0].nombre}`);
    } else {
        console.log("Producto no encontrado en el carrito");
    }
}
// Función para agregar un producto a favoritos
function agregarAFavoritos(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        favoritos.push(producto);
        console.log(`Agregado a favoritos: ${producto.nombre}`);
    } else {
        console.log("Producto no encontrado");
    }
}
// Función para eliminar un producto de favoritos
function eliminarDeFavoritos(id) {
    const index = favoritos.findIndex(p => p.id === id);
    if (index !== -1) {
        const productoEliminado = favoritos.splice(index, 1);
        console.log(`Eliminado de favoritos: ${productoEliminado[0].nombre}`);
    } else {
        console.log("Producto no encontrado en favoritos");
    }
}
// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    console.log("Productos en el carrito:");
    carrito.forEach(producto => {
        console.log(`${producto.nombre} - $${producto.precio}`);
    });
}
// Función para mostrar los productos favoritos
function mostrarFavoritos() {
    console.log("Productos favoritos:");
    favoritos.forEach(producto => {
        console.log(`${producto.nombre} - $${producto.precio}`);
    });
}
// Función para calcular el total del carrito
function calcularTotal() {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
}
// Función para mostrar el total del carrito
function mostrarTotal() {
    const total = calcularTotal();
    console.log(`Total del carrito: $${total}`);
}
// Ejemplo de uso
agregarAlCarrito(1);
agregarAlCarrito(2);
agregarAFavoritos(1);
agregarAFavoritos(3);
mostrarCarrito();
mostrarFavoritos();
mostrarTotal();
eliminarDelCarrito(1);
eliminarDeFavoritos(3);
mostrarCarrito();
mostrarFavoritos();
mostrarTotal();
// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    const carritoContainer = document.getElementById("carrito");
    carritoContainer.innerHTML = ""; // Limpiar el contenedor del carrito
    carrito.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");
        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
        `;
        carritoContainer.appendChild(productoDiv);
    });
}
// Función para mostrar los productos favoritos
function mostrarFavoritos() {
    const favoritosContainer = document.getElementById("favoritos");
    favoritosContainer.innerHTML = ""; // Limpiar el contenedor de favoritos
    favoritos.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");
        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="eliminarDeFavoritos(${producto.id})">Eliminar</button>
        `;
        favoritosContainer.appendChild(productoDiv);
    });
}
// Función para mostrar el total del carrito
function mostrarTotal() {
    const total = calcularTotal();
    const totalContainer = document.getElementById("total");
    totalContainer.innerHTML = `Total del carrito: $${total}`;
}
// Inicializar el carrito y favoritos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito();
    mostrarFavoritos();
    mostrarTotal();
});
// Función para filtrar productos por categoría
function filtrarPorCategoria(categoria) {
    const productosFiltrados = productos.filter(producto => producto.categoría === categoria);
    return productosFiltrados;
}
// Función para mostrar los productos filtrados
function mostrarProductosFiltrados(categoria) {
    const productosFiltrados = filtrarPorCategoria(categoria);
    const productosContainer = document.getElementById("productos");
    productosContainer.innerHTML = ""; // Limpiar el contenedor de productos
    productosFiltrados.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");
        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            <button onclick="agregarAFavoritos(${producto.id})">Agregar a favoritos</button>
        `;
        productosContainer.appendChild(productoDiv);
    });
}
// Inicializar la visualización de productos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarProductosFiltrados("Día"); // Mostrar productos de la categoría "Día" por defecto
});
// Función para mostrar todos los productos
function mostrarTodosLosProductos() {
    const productosContainer = document.getElementById("productos");
    productosContainer.innerHTML = ""; // Limpiar el contenedor de productos
    productos.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");
        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            <button onclick="agregarAFavoritos(${producto.id})">Agregar a favoritos</button>
        `;
        productosContainer.appendChild(productoDiv);
    });
}
// Inicializar la visualización de todos los productos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarTodosLosProductos(); // Mostrar todos los productos por defecto
});
// Función para mostrar los productos filtrados por categoría
function filtrarPorCategoria(categoria) {
    const productosFiltrados = productos.filter(producto => producto.categoría === categoria);
    const productosContainer = document.getElementById("productos");
    productosContainer.innerHTML = ""; // Limpiar el contenedor de productos
    productosFiltrados.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");
        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            <button onclick="agregarAFavoritos(${producto.id})">Agregar a favoritos</button>
        `;
        productosContainer.appendChild(productoDiv);
    });
}
// Función para mostrar los productos filtrados por categoría al hacer clic en un botón
function mostrarProductosPorCategoria(categoria) {
    const categoriaBoton = document.getElementById(categoria);
    categoriaBoton.addEventListener("click", () => {
        filtrarPorCategoria(categoria);
    });
}
// Inicializar los botones de categoría al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarProductosPorCategoria("Día");
    mostrarProductosPorCategoria("Noche");
    mostrarProductosPorCategoria("Niño Día");
    mostrarProductosPorCategoria("Niño Noche");
    mostrarProductosPorCategoria("Fotobiomodulación");
});
// Función para mostrar los productos filtrados por categoría al hacer clic en un botón
function mostrarProductosPorCategoria(categoria) {
    const categoriaBoton = document.getElementById(categoria);
    categoriaBoton.addEventListener("click", () => {
        filtrarPorCategoria(categoria);
    });
}
