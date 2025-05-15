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
    { id: 19, name: "Lámpara Pequeña", price: 499.00, category: "fotobiomadulacion", favorite: false, image: "../imagenes-carrito/lampara-terapia-499.jpg", description: "La fotobiomodulación sirve para: El Anti-envejecimiento de la piel, combatir enfermedades neurológicas y autoinmunes, mejorar la salud ocular, combatir el dolor y la inflamación, mejorar la salud de articulaciones y músculos, aumentar la energía, mejorar el estado de ánimo, aumentar la pérdida de grasa, aumentar la fuerza y resistencia, además de combatir la caída del cabello." },
    { id: 20, name: "Lámpara Grande", price: 850.00, category: "fotobiomadulacion", favorite: false, image: "../imagenes-carrito/lampara-terapia-grande-850.jpg", description: "La fotobiomodulación sirve para: El Anti-envejecimiento de la piel, combatir enfermedades neurológicas y autoinmunes, mejorar la salud ocular, combatir el dolor y la inflamación, mejorar la salud de articulaciones y músculos, aumentar la energía, mejorar el estado de ánimo, aumentar la pérdida de grasa, aumentar la fuerza y resistencia, además de combatir la caída del cabello." },
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
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image-container">
                <button class="favorite-button" onclick="toggleFavorite(event, ${product.id})">
                    <i class="fas fa-heart ${product.favorite ? 'active' : ''}"></i>
                </button>
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
    
    // Add click events to images
    document.querySelectorAll('.product-image-container img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productId = parseInt(productCard.dataset.productId);
            modalController.openModal(productId);
        });
    });
}

// Add this new function to handle favorites
function toggleFavorite(event, productId) {
    event.stopPropagation(); // Prevent modal from opening when clicking favorite button
    const product = products.find(p => p.id === productId);
    if (product) {
        product.favorite = !product.favorite;
        // Update the icon in both card and modal if it's open
        const icons = document.querySelectorAll(`[data-product-id="${productId}"] .fa-heart`);
        icons.forEach(icon => icon.classList.toggle('active'));
        
        // Update modal favorite icon if modal is open
        const modalFavoriteIcon = document.querySelector('#modal-favorite-icon');
        if (modalFavoriteIcon && parseInt(document.querySelector('.modal-content').dataset.productId) === productId) {
            modalFavoriteIcon.classList.toggle('active');
        }
    }
}

// Modify the setupProductModal function to include the favorite button
function setupProductModal() {
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
                        <div class="modal-actions">
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
                            <div class="modal-favorite" onclick="toggleFavorite(event, null)">
                                <i id="modal-favorite-icon" class="fas fa-heart"></i>
                                <label>Agregar a favoritos</label>
                            </div>
                        </div>
                        <button id="modal-add-to-cart" class="modal-add-button">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insert the modal in the DOM
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    let currentProductId = null;
    
    function openModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        currentProductId = productId;
        
        // Update modal content
        const modalContent = document.querySelector('.modal-content');
        modalContent.dataset.productId = productId;
        
        document.getElementById("modal-title").textContent = product.name;
        document.getElementById("modal-category").textContent = getCategoryDisplayName(product.category);
        document.getElementById("modal-image").src = product.image;
        document.getElementById("modal-image").alt = product.name;
        document.getElementById("modal-description").textContent = product.description;
        document.getElementById("modal-price").textContent = `Precio: ${product.price.toFixed(2)}€`;
        document.getElementById("modal-quantity").value = "1";
        
        // Update favorite icon state
        const favoriteIcon = document.getElementById("modal-favorite-icon");
        favoriteIcon.classList.toggle('active', product.favorite);
        
        // Update click handler for favorite button
        document.querySelector('.modal-favorite').onclick = (e) => toggleFavorite(e, productId);
        
        // Show modal
        document.getElementById("product-modal").style.display = "flex";
    }
    
    // Add event to close modal with X button
    document.querySelector(".close-modal").addEventListener("click", () => {
        document.getElementById("product-modal").style.display = "none";
    });
    
    // Close modal when clicking outside
    window.addEventListener("click", function(event) {
        const modal = document.getElementById("product-modal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
    
    // Add event for "Add to cart" button inside modal
    document.getElementById("modal-add-to-cart").addEventListener("click", function() {
        if (currentProductId) {
            const cantidad = parseInt(document.getElementById("modal-quantity").value);
            addToCartFromModal(currentProductId, cantidad);
            document.getElementById("product-modal").style.display = "none";
        }
    });
    
    function addToCartFromModal(productId, cantidad) {
        const producto = products.find(p => p.id === productId);
        
        const productoExiste = lineasCarrito.findIndex(item => item.id === productId);
        
        if (productoExiste === -1) {
            lineasCarrito.push({...producto, cantidad});
        } else {
            lineasCarrito[productoExiste].cantidad += cantidad;
        }
        
        actualizarCarrito();
        guardarEnLocalStorage();
    }
    
    function getCategoryDisplayName(categoryKey) {
        return categoryNames[categoryKey] || categoryKey;
    }
    
    return { openModal };
}

// Initialize modal controller and setup event listeners
let modalController;
document.addEventListener("DOMContentLoaded", function() {
    leerDelLocalStorage();
    
    modalController = setupProductModal();
    
    categorySelect.innerHTML = "";
    
    const todosOption = document.createElement("option");
    todosOption.value = "todos";
    todosOption.textContent = categoryNames["todos"];
    categorySelect.appendChild(todosOption);
    
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    
    uniqueCategories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = categoryNames[category] || category; 
        categorySelect.appendChild(option);
    });
    
    categorySelect.value = "todos";
    
    categorySelect.addEventListener("change", function() {
        currentCategory = this.value;
        filterProducts();
    });
    
    displayProducts();
    
    document.getElementById("toggle-cart").style.display = "none";
});