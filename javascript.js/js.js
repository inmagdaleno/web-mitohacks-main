// Array para almacenar los productos en el carrito
const products = [
   
    { id: 1, name: "Alegría Día Niño", price: 180.00, category: "kids", favorite: false, image: "../imagenes-carrito/alegría-dia-niño-180.jpg", description: "Las lentes amarillas, se usan durante el día, para evitar el daño que ocasiona la luz azul artificial de las pantallas y/o bombillas a nuestra salud y la de los más pequeños. Nuestras lentes de día filtran hasta 450nm. Cada vez son más los niños con problemas metabólicos y la mayoría de estas patologías están relacionadas con el entorno de luz" },
    { id: 2, name: "Alegría Noche Niño", price: 180.00, category: "kids", favorite: false, image: "../imagenes-carrito/alegría-noche-niño-180.jpg", description: "Los más pequeños también sufren los daños de la luz azul artificial. En Mithohacks brindamos la mayor seguridad para su salud. Las lentes rojas se usan justo cuando cae el sol para no dañar la salud circadiana. Las lentes de noche filtran hasta 570nm, filtrando tanto la luz azul artificial como la verde." },
    { id: 3, name: "Anahata Día", price: 180.00, category: "dia", favorite: false, image: "../imagenes-carrito/anahata-dia-180.jpg", description: "Las lentes amarillas se usan durante el día. Para que protejan al 100% necesitan un tratamiento específico, para proteger la salud del ojo y del sistema hormonal, tras la exposición a luces artificiales. Nuestras lentes de día, filtran hasta 450nm, están fabricadas en laboratorio oftalmológico español y cuentan con Certificación ITEBSA" },
    { id: 4, name: "Anahata Noche", price: 120.00, category: "noche", favorite: false, image: "../imagenes-carrito/anahata-noche-120.jpg", description: "Las lentes rojas se usan durante la noche, justo cuando cae el sol, para evitar el daño que ocasiona la luz azul artificial de las pantallas y no dañar la salud circadiana. Filtran hasta 570nm, filtrando tanto la luz azul artificial como la verde. Sin oscuridad no hay melatonina y con Mithohacks puedes hackear la noche, simulando oscuridad." },
    { id: 5, name: "Calma Día Niño", price: 89.00, category: "kids", favorite: false, image: "../imagenes-carrito/calma-dia-niño-89.jpg", description: "Las lentes amarillas, se usan durante el día, para evitar el daño que ocasiona la luz azul artificial de las pantallas y/o bombillas a nuestra salud y la de los más pequeños. Nuestras lentes de día, filtran hasta 450nm. Cada vez son más los niños con problemas metabólicos y la mayoría de estas patologías están relacionadas con el entorno de luz" },
    { id: 6, name: "Corona Animals Día", price: 180.00, category: "dia", favorite: false, image: "../imagenes-carrito/Corona animals-dia-180.jpg", description: "Las lentes amarillas se usan durante el día. Para que protejan al 100% necesitan un tratamiento específico, para proteger la salud del ojo y del sistema hormonal, tras la exposición a luces artificiales. Nuestras lentes de día, filtran hasta 450nm, están fabricadas en laboratorio oftalmológico español y cuentan con Certificación ITEBSA" },
    { id: 7, name: "Corona Animals Noche", price: 89.00, category: "noche", favorite: false, image: "../imagenes-carrito/Corona animals-noche-89.jpg", description: "Las lentes rojas se usan durante la noche, justo cuando cae el sol, para evitar el daño que ocasiona la luz azul artificial de las pantallas y no dañar la salud circadiana. Filtran hasta 570nm, filtrando tanto la luz azul artificial como la verde. Sin oscuridad no hay melatonina y con Mithohacks puedes hackear la noche, simulando oscuridad." },
    { id: 8, name: "Corona Día", price: 180.00, category: "dia", favorite: false, image: "../imagenes-carrito/corona-dia-180.jpg", description: "Las lentes amarillas se usan durante el día. Para que protejan al 100% necesitan un tratamiento específico, para proteger la salud del ojo y del sistema hormonal, tras la exposición a luces artificiales. Nuestras lentes de día, filtran hasta 450nm, están fabricadas en laboratorio oftalmológico español y cuentan con Certificación ITEBSA" },
    { id: 9, name: "Corona Noche", price: 180.00, category: "noche", favorite: false, image: "../imagenes-carrito/corona-noche-180.jpg", description: "Las lentes rojas se usan durante la noche, justo cuando cae el sol, para evitar el daño que ocasiona la luz azul artificial de las pantallas y no dañar la salud circadiana. Filtran hasta 570nm, filtrando tanto la luz azul artificial como la verde. Sin oscuridad no hay melatonina y con Mithohacks puedes hackear la noche, simulando oscuridad." },
    { id: 10, name: "Honra Día Niño", price: 180.00, category: "kids", favorite: false, image: "../imagenes-carrito/honra-dia-niños-180.jpg", description: "Las lentes amarillas, se usan durante el día, para evitar el daño que ocasiona la luz azul artificial de las pantallas y/o bombillas a nuestra salud y la de los más pequeños. Nuestras lentes de día filtran hasta 450nm. Cada vez son más los niños con problemas metabólicos y la mayoría de estas patologías están relacionadas con el entorno de luz" },
    { id: 11, name: "Honra Noche Niño", price: 180.00, category: "kids", favorite: false, image: "../imagenes-carrito/honra-noche-niños-180.jpg", description: "Los más pequeños también sufren los daños de la luz azul artificial. En Mithohacks brindamos la mayor seguridad para su salud. Las lentes rojas se usan justo cuando cae el sol para no dañar la salud circadiana. Las lentes de noche filtran hasta 570nm, filtrando tanto la luz azul artificial como la verde."},
    { id: 12, name: "Plexo Solar Día", price: 150.00, category: "dia", favorite: false, image: "../imagenes-carrito/plaxo solar- dia- 150.jpg", description: "Las lentes amarillas se usan durante el día. Para que protejan al 100% necesitan un tratamiento específico, para proteger la salud del ojo y del sistema hormonal, tras la exposición a luces artificiales. Nuestras lentes de día, filtran hasta 450nm, están fabricadas en laboratorio oftalmológico español y cuentan con Certificación ITEBSA" },
    { id: 13, name: "Plexo Solar Noche", price: 180.00, category: "noche", favorite: false, image: "../imagenes-carrito/plaxo solar- noche- 180.jpg", description: "Las lentes rojas se usan durante la noche, justo cuando cae el sol, para evitar el daño que ocasiona la luz azul artificial de las pantallas y no dañar la salud circadiana. Filtran hasta 570nm, filtrando tanto la luz azul artificial como la verde. Sin oscuridad no hay melatonina y con Mithohacks puedes hackear la noche, simulando oscuridad." },
    { id: 14, name: "Solar Animals Día", price: 180.00, category: "dia", favorite: false, image: "../imagenes-carrito/plexo solar animals-dia-180.jpg", description: "Las lentes amarillas se usan durante el día. Para que protejan al 100% necesitan un tratamiento específico, para proteger la salud del ojo y del sistema hormonal, tras la exposición a luces artificiales. Nuestras lentes de día, filtran hasta 450nm, están fabricadas en laboratorio oftalmológico español y cuentan con Certificación ITEBSA" },
    { id: 15, name: "Solar Animals Noche", price: 180.00, category: "noche", favorite: false, image: "../imagenes-carrito/plexo solar animals-noche-180.jpg", description: "Las lentes rojas se usan durante la noche, justo cuando cae el sol, para evitar el daño que ocasiona la luz azul artificial de las pantallas y no dañar la salud circadiana. Filtran hasta 570nm, filtrando tanto la luz azul artificial como la verde. Sin oscuridad no hay melatonina y con Mithohacks puedes hackear la noche, simulando oscuridad." },
    { id: 16, name: "Raíz Día", price: 180.00, category: "dia", favorite: false, image: "../imagenes-carrito/raiz-dia-180.jpg", description: "Las lentes amarillas se usan durante el día. Para que protejan al 100% necesitan un tratamiento específico, para proteger la salud del ojo y del sistema hormonal, tras la exposición a luces artificiales. Nuestras lentes de día, filtran hasta 450nm, están fabricadas en laboratorio oftalmológico español y cuentan con Certificación ITEBSA" },
    { id: 17, name: "Raíz Noche", price: 180.00, category: "noche", favorite: false, image: "../imagenes-carrito/raiz-noche-180.jpg", description: "Las lentes rojas se usan durante la noche, justo cuando cae el sol, para evitar el daño que ocasiona la luz azul artificial de las pantallas y no dañar la salud circadiana. Filtran hasta 570nm, filtrando tanto la luz azul artificial como la verde. Sin oscuridad no hay melatonina y con Mithohacks puedes hackear la noche, simulando oscuridad." },
    { id: 18, name: "Luz roja", price: 19.00, category: "fotobiomadulacion", favorite: false, image: "../imagenes-carrito/luz roja-fotobiomodulación-19.png", description: "Protege tu ritmo circadiano, mejora tu descanso y transforma tus noches. Hemos diseñado esta bombilla de luz roja específica para el uso nocturno, pensada para ayudarte a proteger tu sistema nervioso, tu producción de melatonina y tu calidad de sueño, respetando tu biología ancestral."},
    { id: 19, name: "Lámpara terapia pequeña", price: 499.00, category: "fotobiomadulacion", favorite: false, image: "../imagenes-carrito/lampara-terapia-499.jpg", description: "La fotobiomodulación sirve para: El Anti-envejecimiento de la piel, combatir enfermedades neurológicas y autoinmunes, mejorar la salud ocular, combatir el dolor y la inflamación, mejorar la salud de articulaciones y músculos, aumentar la energía, mejorar el estado de ánimo, aumentar la pérdida de grasa, aumentar la fuerza y resistencia, además de combatir la caída del cabello." },
    { id: 20, name: "Lámpara terapia grande", price: 850.00, category: "fotobiomadulacion", favorite: false, image: "../imagenes-carrito/lampara-terapia-grande-850.jpg", description: "La fotobiomodulación sirve para: El Anti-envejecimiento de la piel, combatir enfermedades neurológicas y autoinmunes, mejorar la salud ocular, combatir el dolor y la inflamación, mejorar la salud de articulaciones y músculos, aumentar la energía, mejorar el estado de ánimo, aumentar la pérdida de grasa, aumentar la fuerza y resistencia, además de combatir la caída del cabello." },
];

const productsContainer = document.getElementById("products");
const categorySelect = document.getElementById("category");
let lineasCarrito = [];
let currentCategory = "todos"; // Por defecto, mostrar todos los productos

// Definir categorías con sus nombres de visualización
const categoryNames = {
    "todos": "Todos los productos",
    "dia": "Mithohacks Día",
    "noche": "Mithohacks Noche",
    "kids": "Mithohacks Kids",
    "fotobiomadulacion": "Fotobiomodulación"
};

// Función para filtrar productos por categoría
function filterProducts() {
    const filteredProducts = currentCategory === "todos" 
        ? products 
        : products.filter(product => product.category.toLowerCase() === currentCategory.toLowerCase());
    
    productsContainer.innerHTML = filteredProducts.map((product) => 
        `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}">
            </div>
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

// Mostrar productos en la página
function displayProducts() {
    filterProducts();
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
            <span class="cart-cantidad">${linea.cantidad}</span>
            <button class="mas" onclick="actualizarCantidad(${index}, ${linea.cantidad + 1})">+</button>
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
    
    // Cargar las categorías en el selector
    categorySelect.innerHTML = "";
    
    // Primero añadir la opción "Todos los productos"
    const todosOption = document.createElement("option");
    todosOption.value = "todos";
    todosOption.textContent = categoryNames["todos"];
    categorySelect.appendChild(todosOption);
    
    // Obtener categorías únicas del array de productos
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    
    // Añadir cada categoría al selector con su nombre de visualización
    uniqueCategories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = categoryNames[category] || category; 
        categorySelect.appendChild(option);
    });
    
    // Establecer "todos" como valor predeterminado
    categorySelect.value = "todos";
    
    // Añadir event listener para el filtro de categorías
    categorySelect.addEventListener("change", function() {
        currentCategory = this.value;
        filterProducts();
    });
    
    displayProducts();
    
    // Asegurarse de que el botón flotante esté oculto al inicio
    document.getElementById("toggle-cart").style.display = "none";
});

// Función para crear y configurar el modal
function setupProductModal() {
    // Crear estructura del modal
    const modalHTML = `
        <div id="product-modal" class="modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-header">
                    <h2 id="modal-title"></h2>
                    <p id="modal-category"></p>
                </div>
                <div class="modal-body">
                    <div class="modal-image-container">
                        <img id="modal-image" src="" alt="">
                    </div>
                    <div class="modal-details">
                        <p id="modal-description"></p>
                        <p id="modal-price" class="modal-price"></p>
                        <div class="modal-qty">
                            <label for="modal-quantity">Cantidad:</label>
                            <select id="modal-quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <button id="modal-add-to-cart" class="modal-add-button">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insertar el modal en el DOM
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    let currentProductId = null;
    
    // Función para abrir el modal con los datos del producto
    function openModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        currentProductId = productId;
        
        // Establecer los valores del producto en el modal
        document.getElementById("modal-title").textContent = product.name;
        document.getElementById("modal-category").textContent = getCategoryDisplayName(product.category);
        document.getElementById("modal-image").src = product.image;
        document.getElementById("modal-image").alt = product.name;
        document.getElementById("modal-description").textContent = product.description;
        document.getElementById("modal-price").textContent = `Precio: ${product.price.toFixed(2)}€`;
        document.getElementById("modal-quantity").value = "1";
        
        // Mostrar el modal
        document.getElementById("product-modal").style.display = "flex";
    }
    
    // Función para obtener el nombre de visualización de la categoría
    function getCategoryDisplayName(categoryKey) {
        return categoryNames[categoryKey] || categoryKey;
    }
    
    // Añadir evento para cerrar el modal con el botón X
    document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("product-modal").style.display = "none";
    });
    
    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", function(event) {
        const modal = document.getElementById("product-modal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
    
    // Añadir evento para el botón "Añadir al carrito" dentro del modal
    document.getElementById("modal-add-to-cart").addEventListener("click", function() {
        if (currentProductId) {
            const cantidad = parseInt(document.getElementById("modal-quantity").value);
            addToCartFromModal(currentProductId, cantidad);
            document.getElementById("product-modal").style.display = "none";
        }
    });
    
    // Función para añadir al carrito desde el modal
    function addToCartFromModal(productId, cantidad) {
        const producto = products.find(p => p.id === productId);
        
        // Comprobar si el producto existe en el carrito
        const productoExiste = lineasCarrito.findIndex(item => item.id === productId);
        
        if (productoExiste === -1) {
            // El producto no está en el carrito
            lineasCarrito.push({...producto, cantidad});
        } else {
            // El producto ya está en el carrito
            lineasCarrito[productoExiste].cantidad += cantidad;
        }
        
        actualizarCarrito();
        guardarEnLocalStorage();
    }
    
    return { openModal };
}

// Modificar la función displayProducts para añadir eventos de clic a las imágenes
function displayProducts() {
    filterProducts();
    
    // Añadir eventos de clic a las imágenes de productos después de que se hayan cargado
    document.querySelectorAll('.product-image-container img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productId = parseInt(productCard.dataset.productId);
            modalController.openModal(productId);
        });
    });
}

// Modificar la función filterProducts para incluir el ID del producto como atributo data
function filterProducts() {
    const filteredProducts = currentCategory === "todos" 
        ? products 
        : products.filter(product => product.category.toLowerCase() === currentCategory.toLowerCase());
    
    productsContainer.innerHTML = filteredProducts.map((product) => 
        `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}">
            </div>
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
    
    // Añadir eventos de clic a las imágenes después de cargarlas
    document.querySelectorAll('.product-image-container img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productId = parseInt(productCard.dataset.productId);
            modalController.openModal(productId);
        });
    });
}

// Inicializar el modal y obtener el controlador cuando se cargue el DOM
let modalController;
document.addEventListener("DOMContentLoaded", function() {
    leerDelLocalStorage();
    
    // Inicializar el modal
    modalController = setupProductModal();
    
    // Cargar las categorías en el selector
    categorySelect.innerHTML = "";
    
    // Primero añadir la opción "Todos los productos"
    const todosOption = document.createElement("option");
    todosOption.value = "todos";
    todosOption.textContent = categoryNames["todos"];
    categorySelect.appendChild(todosOption);
    
    // Obtener categorías únicas del array de productos
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    
    // Añadir cada categoría al selector con su nombre de visualización
    uniqueCategories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = categoryNames[category] || category; 
        categorySelect.appendChild(option);
    });
    
    // Establecer "todos" como valor predeterminado
    categorySelect.value = "todos";
    
    // Añadir event listener para el filtro de categorías
    categorySelect.addEventListener("change", function() {
        currentCategory = this.value;
        filterProducts();
    });
    
    displayProducts();
    
    // Asegurarse de que el botón flotante esté oculto al inicio
    document.getElementById("toggle-cart").style.display = "none";
});