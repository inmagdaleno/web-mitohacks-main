// First, add the favorites array at the top with other global variables
let favoritesList = [];

// Add the favorites panel HTML to the DOM
document.body.insertAdjacentHTML('beforeend', `
    <div id="favorites" class="cart">
        <h2>Favoritos</h2>
        <div id="favorites-items"></div>
    </div>
`);

// Add CSS for the favorites panel
const style = document.createElement('style');
style.textContent = `
    #favorites {
        right: -350px;
    }
    
    #favorites.open {
        right: 0;
    }
    
    .favorite-item {
        display: flex;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid #eee;
    }
    
    .favorite-item img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 8px;
        margin-right: 15px;
    }
    
    .favorite-item-details {
        flex-grow: 1;
    }
    
    .favorite-item-name {
        font-weight: bold;
        margin-bottom: 5px;
    }
    
    .favorite-item-price {
        color: #666;
    }
    
    .remove-favorite {
        background-color: #f44336;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
        margin-left: 10px;
    }
    
    .add-to-cart-favorite {
        background-color: #FBB206;
        color: #333;
        border: none;
        padding: 8px 15px;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 10px;
        font-weight: bold;
        width: 100%;
    }
    
    .add-to-cart-favorite:hover {
        background-color: #facb5d;
    }
`;
document.head.appendChild(style);

// Update toggleFavorite function
function toggleFavorite(event, productId) {
    event.stopPropagation();
    const product = products.find(p => p.id === productId);
    if (product) {
        product.favorite = !product.favorite;
        
        if (product.favorite) {
            if (!favoritesList.find(f => f.id === product.id)) {
                favoritesList.push(product);
            }
        } else {
            favoritesList = favoritesList.filter(f => f.id !== product.id);
        }
        
        // Update icons
        const icons = document.querySelectorAll(`[data-product-id="${productId}"] .fa-heart`);
        icons.forEach(icon => icon.classList.toggle('active'));
        
        // Update modal favorite icon if modal is open
        const modalFavoriteIcon = document.querySelector('#modal-favorite-icon');
        if (modalFavoriteIcon && parseInt(document.querySelector('.modal-content').dataset.productId) === productId) {
            modalFavoriteIcon.classList.toggle('active');
        }
        
        updateFavoritesList();
        saveFavoritesToLocalStorage();
    }
}

// Function to update favorites panel
function updateFavoritesList() {
    const favoritesContainer = document.getElementById('favorites-items');
    favoritesContainer.innerHTML = favoritesList.map(product => `
        <div class="favorite-item">
            <img src="${product.image}" alt="${product.name}">
            <div class="favorite-item-details">
                <div class="favorite-item-name">${product.name}</div>
                <div class="favorite-item-price">${product.price.toFixed(2)}€</div>
                <button class="add-to-cart-favorite" onclick="addToCart(${product.id})">
                    Añadir al carrito
                </button>
            </div>
            <button class="remove-favorite" onclick="removeFavorite(${product.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

// Function to remove from favorites
function removeFavorite(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        product.favorite = false;
        favoritesList = favoritesList.filter(f => f.id !== productId);
        
        // Update all heart icons for this product
        const icons = document.querySelectorAll(`[data-product-id="${productId}"] .fa-heart`);
        icons.forEach(icon => icon.classList.remove('active'));
        
        updateFavoritesList();
        saveFavoritesToLocalStorage();
    }
}

// Save favorites to localStorage
function saveFavoritesToLocalStorage() {
    localStorage.setItem('favoritesGuardados', JSON.stringify(favoritesList));
}

// Load favorites from localStorage
function loadFavoritesFromLocalStorage() {
    const savedFavorites = localStorage.getItem('favoritesGuardados');
    if (savedFavorites) {
        favoritesList = JSON.parse(savedFavorites);
        // Update product.favorite status
        favoritesList.forEach(favorite => {
            const product = products.find(p => p.id === favorite.id);
            if (product) product.favorite = true;
        });
        updateFavoritesList();
    }
}

// Show/hide favorites panel
function toggleFavoritesPanel() {
    const favoritesPanel = document.getElementById('favorites');
    favoritesPanel.classList.toggle('open');
}

// Add click event to favorites icon in navbar
document.addEventListener('DOMContentLoaded', function() {
    // Add the existing initialization code here
    
    // Add click handler for favorites icon
    const favoritesIcon = document.querySelector('.fa-heart.icon-nav');
    if (favoritesIcon) {
        favoritesIcon.parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            toggleFavoritesPanel();
        });
    }
    
    // Load saved favorites
    loadFavoritesFromLocalStorage();
});

// Close favorites panel when clicking outside
document.addEventListener('click', function(e) {
    const favoritesPanel = document.getElementById('favorites');
    const favoritesIcon = document.querySelector('.fa-heart.icon-nav');
    
    if (favoritesPanel.classList.contains('open') && 
        !favoritesPanel.contains(e.target) && 
        e.target !== favoritesIcon && 
        !favoritesIcon.contains(e.target)) {
        favoritesPanel.classList.remove('open');
    }
});