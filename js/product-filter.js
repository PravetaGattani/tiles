/**
 * Square Feet - Premium Tiles & Sanitary Solutions
 * Product Filter JavaScript File
 * Author: Square Feet
 * Version: 1.0
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ======= Product Filtering System =======
    const productFilter = {
        filterNavLinks: document.querySelectorAll('.filter-nav a'),
        productCategories: document.querySelectorAll('.product-category'),
        productCards: document.querySelectorAll('.product-card'),
        searchBox: document.getElementById('product-search'),
        sortSelect: document.getElementById('sort'),
        
        init: function() {
            if (this.productCategories.length === 0 && this.productCards.length === 0) return;
            
            this.setupEventListeners();
            this.handleURLHash();
        },
        
        setupEventListeners: function() {
            // Filter navigation
            this.filterNavLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Update active class
                    this.filterNavLinks.forEach(navLink => {
                        navLink.parentElement.classList.remove('active');
                    });
                    link.parentElement.classList.add('active');
                    
                    // Get filter value
                    const filter = link.getAttribute('data-filter');
                    
                    // Apply filter
                    this.filterProducts(filter);
                    
                    // Update URL hash
                    window.location.hash = link.getAttribute('href');
                });
            });
            
            // Search functionality
            if (this.searchBox) {
                this.searchBox.addEventListener('input', () => {
                    this.searchProducts(this.searchBox.value.trim().toLowerCase());
                });
            }
            
            // Sort functionality
            if (this.sortSelect) {
                this.sortSelect.addEventListener('change', () => {
                    this.sortProducts(this.sortSelect.value);
                });
            }
        },
        
        handleURLHash: function() {
            // Check if the URL has a hash
            if (window.location.hash) {
                const hash = window.location.hash;
                
                // Find and activate the corresponding filter link
                this.filterNavLinks.forEach(link => {
                    if (link.getAttribute('href') === hash) {
                        link.click();
                    }
                });
            }
        },
        
        filterProducts: function(filter) {
            // Hide all product categories
            this.productCategories.forEach(category => {
                category.classList.remove('active');
            });
            
            // Show selected category or all categories
            if (filter === 'all') {
                this.productCategories.forEach(category => {
                    category.classList.add('active');
                });
            } else {
                const selectedCategory = document.getElementById(filter);
                if (selectedCategory) {
                    selectedCategory.classList.add('active');
                }
            }
            
            // Reset search
            if (this.searchBox) {
                this.searchBox.value = '';
            }
            
            // Reset sort
            if (this.sortSelect) {
                this.sortSelect.value = 'popularity';
            }
        },
        
        searchProducts: function(searchTerm) {
            if (!searchTerm) {
                // If search term is empty, restore the current active category
                const activeFilter = document.querySelector('.filter-nav li.active a');
                if (activeFilter) {
                    const filter = activeFilter.getAttribute('data-filter');
                    this.filterProducts(filter);
                }
                return;
            }
            
            // Show all product categories
            this.productCategories.forEach(category => {
                category.classList.add('active');
            });
            
            // Show/hide products based on search term
            this.productCards.forEach(card => {
                const productTitle = card.querySelector('h3').textContent.toLowerCase();
                const productDesc = card.querySelector('p').textContent.toLowerCase();
                
                if (productTitle.includes(searchTerm) || productDesc.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Update active filter
            this.filterNavLinks.forEach(link => {
                link.parentElement.classList.remove('active');
            });
            
            // Select the "All Products" filter
            const allProductsFilter = document.querySelector('.filter-nav li:first-child');
            if (allProductsFilter) {
                allProductsFilter.classList.add('active');
            }
        },
        
        sortProducts: function(sortType) {
            // Get active product category
            const activeCategory = document.querySelector('.product-category.active');
            if (!activeCategory) return;
            
            // Get products in the active category
            const productsRow = activeCategory.querySelector('.products-row');
            if (!productsRow) return;
            
            // Get product cards
            const productCards = Array.from(productsRow.querySelectorAll('.product-card'));
            
            // Sort product cards
            switch (sortType) {
                case 'popularity':
                    // In a real application, this would be based on actual popularity data
                    // Here we're just maintaining the default order
                    break;
                    
                case 'newest':
                    // In a real application, this would be based on actual date data
                    // For this demo, we'll just reverse the order to simulate newest first
                    productCards.reverse();
                    break;
                    
                case 'price-low':
                    // In a real application, this would sort by price
                    // For this demo, we'll sort alphabetically by title as a placeholder
                    productCards.sort((a, b) => {
                        const titleA = a.querySelector('h3').textContent;
                        const titleB = b.querySelector('h3').textContent;
                        return titleA.localeCompare(titleB);
                    });
                    break;
                    
                case 'price-high':
                    // In a real application, this would sort by price in descending order
                    // For this demo, we'll sort alphabetically by title in reverse order
                    productCards.sort((a, b) => {
                        const titleA = a.querySelector('h3').textContent;
                        const titleB = b.querySelector('h3').textContent;
                        return titleB.localeCompare(titleA);
                    });
                    break;
            }
            
            // Re-append sorted product cards to the DOM
            productCards.forEach(card => {
                productsRow.appendChild(card);
            });
        }
    };
    
    // Initialize the product filter system
    productFilter.init();
    
    // ======= Product Details Modal =======
    const productModal = {
        viewDetailsLinks: document.querySelectorAll('.view-details'),
        
        init: function() {
            if (this.viewDetailsLinks.length === 0) return;
            
            this.setupEventListeners();
        },
        
        setupEventListeners: function() {
            this.viewDetailsLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // In a real application, this would open a modal with product details
                    // For this demo, we'll just log a message to the console
                    const productCard = link.closest('.product-card');
                    const productTitle = productCard.querySelector('h3').textContent;
                    
                    alert(`Product details for "${productTitle}" would be displayed in a modal in a real application.`);
                });
            });
        }
    };
    
    // Initialize the product modal
    productModal.init();
});
