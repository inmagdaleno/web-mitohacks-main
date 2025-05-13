// Array para almacenar los productos en el carrito
const products = [
   
    { id: 1, name: "Alegria Dia Niño", price: 180.00, category: "Niño", favorite: false, image: "../imagenes-carrito/alegría-dia-niño-180.jpg" },
    { id: 2, name: "Alegria Noche Niño", price: 180.00, category: "Niño", favorite: false, image: "../imagenes-carrito/alegría-noche-niño-180.jpg" },
    { id: 3, name: "Anahata Dia", price: 180.00, category: "Dia", favorite: false, image: "../imagenes-carrito/anahata-dia-180.jpg" },
    { id: 4, name: "Anahata Noche", price: 120.00, category: "Noche", favorite: false, image: "../imagenes-carrito/anahata-noche-120.jpg" },
    { id: 5, name: "Calma Dia Niño", price: 89.00, category: "Niño", favorite: false, image: "../imagenes-carrito/calma-dia-niño-89.jpg" },
    { id: 6, name: "Corona Animals Dia", price: 180.00, category: "Dia", favorite: false, image: "../imagenes-carrito/Corona animals-dia-180.jpg" },
    { id: 7, name: "Corona Animals Noche", price: 89.00, category: "Noche", favorite: false, image: "../imagenes-carrito/Corona animals-noche-89.jpg" },
    { id: 8, name: "Corona Dia", price: 180.00, category: "Dia", favorite: false, image: "../imagenes-carrito/corona-dia-180.jpg" },
    { id: 9, name: "Corona Noche", price: 180.00, category: "Noche", favorite: false, image: "../imagenes-carrito/corona-noche-180.jpg" },
    { id: 10, name: "Honra Dia Niño", price: 180.00, category: "Dia", favorite: false, image: "../imagenes-carrito/honra-dia-niños-180.jpg" },
    { id: 11, name: "Honra Noche Niño", price: 180.00, category: "Niño", favorite: false, image: "../imagenes-carrito/honra-noche-niños-180.jpg"},
    { id: 12, name: "Plexo Solar Dia", price: 150.00, category: "Dia", favorite: false, image: "../imagenes-carrito/plaxo solar- dia- 150.jpg" },
    { id: 13, name: "Plexo Solar Noche", price: 180.00, category: "Noche", favorite: false, image: "../imagenes-carrito/plaxo solar- noche- 180.jpg" },
    { id: 14, name: "Solar Animals Dia", price: 180.00, category: "Dia", favorite: false, image: "../imagenes-carrito/plexo solar animals-dia-180.jpg" },
    { id: 15, name: "Solar Animals Noche", price: 180.00, category: "Noche", favorite: false, image: "../imagenes-carrito/plexo solar animals-noche-180.jpg"},
    { id: 16, name: "Raiz Dia", price: 180.00, category: "Dia", favorite: false, image: "../imagenes-carrito/raiz-dia-180.jpg" },
    { id: 17, name: "Raiz Noche", price: 180.00, category: "Noche", favorite: false, image: "../imagenes-carrito/raiz-noche-180.jpg" },
    { id: 18, name: "Luz roja", price: 19.00, category: "Fotobiomodulacion", favorite: false, image: "../imagenes-carrito/luz roja-fotobiomodulación-19.png" },
    { id: 19, name: "Lampara terapia pequeña", price: 499.00, category: "Fotobiomodulacion", favorite: false, image: "../imagenes-carrito/lampara-terapia-499.jpg" },
    { id: 20, name: "Lampara terapia grande", price: 850.00, category: "Fotobiomodulacion", favorite: false, image: "../imagenes-carrito/lampara-terapia-grande-850.jpg"},
];

const productsContainer = document.getElementById("products");
let lineasCarrito = [];

// Mostrar productos en la página
function displayProducts() {
    productsContainer.innerHTML = products.map((product) => 
        `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="product-cantidad">
                <p>Precio: ${product.price.toFixed(2)}€</p>
                <select id="cantidad-${product.id}">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button onclick="addToCart(${product.id})">Añadir al carrito</button>
        </div>
        `
    ).join('');
}

// Añadir producto al carrito
function addToCart(productId) {
    const producto = products.find(p => p.id === productId);
    const cantidad = parseInt(document.getElementById(`cantidad-${productId}`).value);

    // Comprobar si el producto existe en el carrito
    const productoExiste = lineasCarrito.findIndex(item => item.id === productId);

    if (productoExiste === -1) {
        // El producto no está en el carrito
        lineasCarrito.push({...producto, cantidad});
    } else {
        // El producto ya está en el carrito
        lineasCarrito[productoExiste].cantidad += cantidad;
    }

    console.log(lineasCarrito);
    actualizarCarrito();
    guardarEnLocalStorage();
}

// Actualizar vista del carrito
function actualizarCarrito() {
    document.getElementById("cart-items").innerHTML = lineasCarrito.map((linea, index) =>
        `
        <div class="cart-item">
            <span>${linea.name} - ${linea.price.toFixed(2)}€</span>
            <button onclick="actualizarCantidad(${index}, ${linea.cantidad - 1})">-</button>
            <span>${linea.cantidad}</span>
            <button onclick="actualizarCantidad(${index}, ${linea.cantidad + 1})">+</button>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        </div>
        `
    ).join('');
    
    // Calcular el total de la compra
    const totalCarrito = lineasCarrito.reduce((suma, item) => suma + (item.price * item.cantidad), 0);
    document.getElementById("cart-total").textContent = `Total: ${totalCarrito.toFixed(2)} €`;

    // Mostrar número de productos comprados
    const numComprados = lineasCarrito.reduce((suma, item) => suma + item.cantidad, 0);

    // Actualizar contador del carrito
    actualizarContadoresCarrito(numComprados);
    
    // Mostrar u ocultar el botón de comprar
    if (numComprados === 0) {
        document.getElementById("comprar").style.display = "none";
    } else {
        document.getElementById("comprar").style.display = "block";
    }
}

// Función para actualizar ambos contadores del carrito
function actualizarContadoresCarrito(numComprados) {
    const navbarContador = document.getElementById("navbar-contador");
    const flotanteContador = document.getElementById("flotante-contador");
    
    if (numComprados === 0) {
        navbarContador.style.display = "none";
        flotanteContador.style.display = "none";
    } else {
        navbarContador.textContent = numComprados;
        navbarContador.style.display = "block";
        
        // También actualizamos el contador del botón flotante
        // aunque pueda estar oculto en este momento
        flotanteContador.textContent = numComprados;
        flotanteContador.style.display = "block";
    }
}

// Actualizar cantidad de un producto
function actualizarCantidad(indice, cantidad) {
    // Si cantidad es menor que 1 borro la línea
    if (cantidad < 1) {
        removeFromCart(indice);
    } else {
        // Actualizo
        lineasCarrito[indice].cantidad = cantidad;
        actualizarCarrito();
        guardarEnLocalStorage();
    }
}

// Eliminar producto del carrito
function removeFromCart(indice) {
    // Eliminar del array lineasCarrito el elemento con el indice indicado
    lineasCarrito.splice(indice, 1);
    actualizarCarrito();
    guardarEnLocalStorage();
}

// Función para mostrar el carrito
function mostrarCarrito() {
    document.getElementById("cart").classList.add("open");
    document.getElementById("navbar-cart-container").style.display = "none";
    document.getElementById("toggle-cart").style.display = "flex";
}

// Función para ocultar el carrito
function ocultarCarrito() {
    document.getElementById("cart").classList.remove("open");
    document.getElementById("navbar-cart-container").style.display = "block";
    document.getElementById("toggle-cart").style.display = "none";
}

// Mostrar/ocultar carrito con el botón flotante
document.getElementById("toggle-cart").addEventListener("click", () => {
    const cart = document.getElementById("cart");
    if (cart.classList.contains("open")) {
        ocultarCarrito();
    } else {
        mostrarCarrito();
    }
});

// Mostrar carrito al hacer clic en el icono de la barra de navegación
document.getElementById("navbar-cart").addEventListener("click", (e) => {
    e.preventDefault();
    mostrarCarrito();
});

// Cerrar carrito cuando se hace clic fuera
document.addEventListener("click", (e) => {
    const cart = document.getElementById("cart");
    const toggleCart = document.getElementById("toggle-cart");
    const navbarCart = document.getElementById("navbar-cart");
    
    // Si el carrito está abierto y el clic no fue en el carrito ni en los botones
    if (cart.classList.contains("open") && 
        !cart.contains(e.target) && 
        e.target !== toggleCart && 
        !toggleCart.contains(e.target) &&
        e.target !== navbarCart && 
        !navbarCart.contains(e.target)) {
        ocultarCarrito();
    }
});

// Botón comprar
document.getElementById("comprar").addEventListener("click", () => {
    const totalCompra = lineasCarrito.reduce((suma, item) => suma + item.price * item.cantidad, 0);
    alert(`Compra realizada por: ${totalCompra.toFixed(2)} €`);
    // Vaciar carrito después de la compra
    lineasCarrito = [];
    actualizarCarrito();
    guardarEnLocalStorage();
    ocultarCarrito();
});

// Guardar carrito en localStorage
function guardarEnLocalStorage() {
    localStorage.setItem("carritoGuardado", JSON.stringify(lineasCarrito));
}

// Recuperar carrito del localStorage
function leerDelLocalStorage() {
    // Comprobar si hay un carrito guardado en el navegador en el localStorage
    if (localStorage.getItem("carritoGuardado") !== null) {
        const datos = localStorage.getItem("carritoGuardado");
        lineasCarrito = JSON.parse(datos);
        actualizarCarrito();
    }
}

// Inicializar la página
document.addEventListener("DOMContentLoaded", function() {
    leerDelLocalStorage();
    displayProducts();
    
    // Asegurarse de que el botón flotante esté oculto al inicio
    document.getElementById("toggle-cart").style.display = "none";
});