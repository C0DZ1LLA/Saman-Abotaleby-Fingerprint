document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        en: {
            'shop-title': 'Online Shop',
            'electronics': 'Electronics',
            'wearables': 'Wearables',
            'drones': 'Drones',
            'smart-home': 'Smart Home',
            'gaming': 'Gaming',
            'health': 'Health',
            'fashion': 'Fashion',
            'accessories': 'Accessories',
            'toys': 'Toys',
            'office': 'Office',
            'cart-title': 'Cart',
            'checkout': 'Checkout',
            'add-to-cart': 'Add to Cart',
            'remove': 'Remove'
        },
        el: {
            'shop-title': 'Ηλεκτρονικό Κατάστημα',
            'electronics': 'Ηλεκτρονικά',
            'wearables': 'Φορετά',
            'drones': 'Μη Επανδρωμένα',
            'smart-home': 'Έξυπνο Σπίτι',
            'gaming': 'Παιχνίδια',
            'health': 'Υγεία',
            'fashion': 'Μόδα',
            'accessories': 'Αξεσουάρ',
            'toys': 'Παιχνίδια',
            'office': 'Γραφείο',
            'cart-title': 'Καλάθι',
            'checkout': 'Ολοκλήρωση Αγοράς',
            'add-to-cart': 'Προσθήκη στο Καλάθι',
            'remove': 'Αφαίρεση'
        }
    };

    function translatePage(language) {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
    }

    function translateProducts(language) {
        products.forEach(product => {
            const nameKey = `product-name-${product.id}`;
            const descriptionKey = `product-description-${product.id}`;
            const nameElement = document.querySelector(`[data-key="${nameKey}"]`);
            const descriptionElement = document.querySelector(`[data-key="${descriptionKey}"]`);
            if (language === 'en') {
                nameElement.textContent = product.en.name;
                descriptionElement.textContent = product.en.description;
            } else {
                nameElement.textContent = product.name;
                descriptionElement.textContent = product.description;
            }
        });
    }

    window.switchTheme = function(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        } else {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        }
    };

    window.switchLanguage = function(language) {
        translatePage(language);
        translateProducts(language);
    };

    const products = [
        { id: 1, name: 'Hypernova Laptop', description: 'Φουτουριστικός φορητός υπολογιστής με δυνατότητες κβαντικού υπολογισμού.', imageUrl: 'https://via.placeholder.com/200', price: 1999.99, category: 'Electronics', en: { name: 'Hypernova Laptop', description: 'A futuristic laptop with quantum computing capabilities.' } },
        { id: 2, name: 'Nebula Smartphone', description: 'Ένα smartphone με ολογραφική οθόνη και ενσωμάτωση AI.', imageUrl: 'https://via.placeholder.com/200', price: 1299.99, category: 'Electronics', en: { name: 'Nebula Smartphone', description: 'A smartphone with holographic display and AI integration.' } },
        { id: 3, name: 'Quantum Earbuds', description: 'Ακουστικά ακύρωσης θορύβου με απαράμιλλη ποιότητα ήχου.', imageUrl: 'https://via.placeholder.com/200', price: 299.99, category: 'Wearables', en: { name: 'Quantum Earbuds', description: 'Noise-cancelling earbuds with unparalleled sound quality.' } },
        { id: 4, name: 'Galactic Watch', description: 'Ένα smartwatch με παρακολούθηση υγείας και ηλιακή φόρτιση.', imageUrl: 'https://via.placeholder.com/200', price: 499.99, category: 'Wearables', en: { name: 'Galactic Watch', description: 'A smartwatch with health monitoring and solar charging.' } },
        { id: 5, name: 'Orion VR Headset', description: 'Ένα εντυπωσιακό VR headset με ανάλυση 8K.', imageUrl: 'https://via.placeholder.com/200', price: 899.99, category: 'Drones', en: { name: 'Orion VR Headset', description: 'An immersive VR headset with 8K resolution.' } },
        { id: 6, name: 'Stellar Drone', description: 'Ένα drone με πιλότο AI και εγγραφή βίντεο 4K.', imageUrl: 'https://via.placeholder.com/200', price: 999.99, category: 'Drones', en: { name: 'Stellar Drone', description: 'A drone with AI piloting and 4K video recording.' } },
        { id: 7, name: 'Smart Light Bulb', description: 'Ενεργειακά αποδοτική λάμπα με φωνητικό έλεγχο.', imageUrl: 'https://via.placeholder.com/200', price: 49.99, category: 'Smart Home', en: { name: 'Smart Light Bulb', description: 'Energy-efficient light bulb with voice control.' } },
        { id: 8, name: 'Smart Thermostat', description: 'Αυτοματοποιημένος έλεγχος θερμοκρασίας για το σπίτι σας.', imageUrl: 'https://via.placeholder.com/200', price: 199.99, category: 'Smart Home', en: { name: 'Smart Thermostat', description: 'Automated temperature control for your home.' } },
        { id: 9, name: 'Smart Door Lock', description: 'Ασφαλές και βολικό κλείδωμα πόρτας με απομακρυσμένη πρόσβαση.', imageUrl: 'https://via.placeholder.com/200', price: 149.99, category: 'Smart Home', en: { name: 'Smart Door Lock', description: 'Secure and convenient door lock with remote access.' } },
        { id: 10, name: 'Gaming Laptop', description: 'Φορητός υπολογιστής υψηλής απόδοσης για ενθουσιώδεις παίκτες.', imageUrl: 'https://via.placeholder.com/200', price: 1499.99, category: 'Gaming', en: { name: 'Gaming Laptop', description: 'High-performance laptop for gaming enthusiasts.' } },
        { id: 11, name: 'VR Gaming Console', description: 'Κονσόλα επόμενης γενιάς με εντυπωσιακή εμπειρία VR.', imageUrl: 'https://via.placeholder.com/200', price: 599.99, category: 'Gaming', en: { name: 'VR Gaming Console', description: 'Next-gen console with immersive VR experience.' } },
        { id: 12, name: 'Gaming Chair', description: 'Εργονομική καρέκλα σχεδιασμένη για μεγάλες συνεδρίες παιχνιδιών.', imageUrl: 'https://via.placeholder.com/200', price: 299.99, category: 'Gaming', en: { name: 'Gaming Chair', description: 'Ergonomic chair designed for long gaming sessions.' } },
        { id: 13, name: 'Fitness Tracker', description: 'Παρακολουθήστε την υγεία σας με προηγμένα χαρακτηριστικά γυμναστικής.', imageUrl: 'https://via.placeholder.com/200', price: 129.99, category: 'Health', en: { name: 'Fitness Tracker', description: 'Monitor your health with advanced fitness features.' } },
        { id: 14, name: 'Smart Scale', description: 'Παρακολουθήστε το βάρος και τον ΔΜΣ σας με ακρίβεια.', imageUrl: 'https://via.placeholder.com/200', price: 79.99, category: 'Health', en: { name: 'Smart Scale', description: 'Track your weight and BMI with precision.' } },
        { id: 15, name: 'Blood Pressure Monitor', description: 'Ακριβής και εύχρηστος μετρητής αρτηριακής πίεσης.', imageUrl: 'https://via.placeholder.com/200', price: 59.99, category: 'Health', en: { name: 'Blood Pressure Monitor', description: 'Accurate and easy-to-use blood pressure monitor.' } },
        { id: 16, name: 'Designer Jacket', description: 'Μοντέρνο και κομψό μπουφάν για όλες τις εποχές.', imageUrl: 'https://via.placeholder.com/200', price: 299.99, category: 'Fashion', en: { name: 'Designer Jacket', description: 'Stylish and modern jacket for all seasons.' } },
        { id: 17, name: 'Luxury Handbag', description: 'Κομψή τσάντα κατασκευασμένη από υλικά υψηλής ποιότητας.', imageUrl: 'https://via.placeholder.com/200', price: 799.99, category: 'Fashion', en: { name: 'Luxury Handbag', description: 'Elegant handbag made with premium materials.' } },
        { id: 18, name: 'Smart Glasses', description: 'Μοντέρνα γυαλιά με δυνατότητες επαυξημένης πραγματικότητας.', imageUrl: 'https://via.placeholder.com/200', price: 399.99, category: 'Fashion', en: { name: 'Smart Glasses', description: 'Fashionable glasses with AR capabilities.' } },
        { id: 19, name: 'Wireless Charger', description: 'Γρήγορος φορτιστής για όλες τις συσκευές σας.', imageUrl: 'https://via.placeholder.com/200', price: 49.99, category: 'Accessories', en: { name: 'Wireless Charger', description: 'Fast charging pad for all your devices.' } },
        { id: 20, name: 'Bluetooth Speaker', description: 'Φορητό ηχείο με υψηλής ποιότητας ήχο.', imageUrl: 'https://via.placeholder.com/200', price: 89.99, category: 'Accessories', en: { name: 'Bluetooth Speaker', description: 'Portable speaker with high-quality sound.' } },
        { id: 21, name: 'Smart Ring', description: 'Καινοτόμο δαχτυλίδι με δυνατότητες γυμναστικής και ειδοποιήσεων.', imageUrl: 'https://via.placeholder.com/200', price: 149.99, category: 'Accessories', en: { name: 'Smart Ring', description: 'Innovative ring with fitness and notification features.' } },
        { id: 22, name: 'Interactive Robot Toy', description: 'Διασκεδαστικό και εκπαιδευτικό ρομπότ για παιδιά.', imageUrl: 'https://via.placeholder.com/200', price: 59.99, category: 'Toys', en: { name: 'Interactive Robot Toy', description: 'Fun and educational robot for kids.' } },
        { id: 23, name: 'Drone Toy', description: 'Μίνι drone με εύκολους χειρισμούς για παιδιά.', imageUrl: 'https://via.placeholder.com/200', price: 99.99, category: 'Toys', en: { name: 'Drone Toy', description: 'Mini drone with easy controls for kids.' } },
        { id: 24, name: 'Smart Puzzle', description: 'Διαδραστικό παζλ που αλλάζει με κάθε παιχνίδι.', imageUrl: 'https://via.placeholder.com/200', price: 29.99, category: 'Toys', en: { name: 'Smart Puzzle', description: 'Interactive puzzle that changes with each play.' } },
        { id: 25, name: 'Ergonomic Office Chair', description: 'Άνετη καρέκλα σχεδιασμένη για πολλές ώρες εργασίας.', imageUrl: 'https://via.placeholder.com/200', price: 199.99, category: 'Office', en: { name: 'Ergonomic Office Chair', description: 'Comfortable chair designed for long hours.' } },
        { id: 26, name: 'Standing Desk', description: 'Ρυθμιζόμενο γραφείο για έναν υγιέστερο χώρο εργασίας.', imageUrl: 'https://via.placeholder.com/200', price: 399.99, category: 'Office', en: { name: 'Standing Desk', description: 'Adjustable desk for a healthier workspace.' } },
        { id: 27, name: 'Smart Pen', description: 'Στυλό που ψηφιοποιεί τον γραφικό σας χαρακτήρα.', imageUrl: 'https://via.placeholder.com/200', price: 99.99, category: 'Office', en: { name: 'Smart Pen', description: 'Pen that digitizes your handwriting.' } },
        { id: 28, name: 'Quantum Tablet', description: 'Ένα κορυφαίο tablet με κρυστάλλινη οθόνη.', imageUrl: 'https://via.placeholder.com/200', price: 899.99, category: 'Electronics', en: { name: 'Quantum Tablet', description: 'A high-end tablet with a crystal-clear display.' } },
        { id: 29, name: 'Futuristic Camera', description: 'Καταγράψτε στιγμές με ενισχυμένη καθαρότητα από AI.', imageUrl: 'https://via.placeholder.com/200', price: 799.99, category: 'Electronics', en: { name: 'Futuristic Camera', description: 'Capture moments with AI-enhanced clarity.' } },
        { id: 30, name: 'Smart Speaker', description: 'Ηχείο με φωνητικό έλεγχο και υψηλή πιστότητα ήχου.', imageUrl: 'https://via.placeholder.com/200', price: 199.99, category: 'Electronics', en: { name: 'Smart Speaker', description: 'Voice-controlled speaker with high-fidelity sound.' } }
    ];

    function createProductElement(product) {
        return `
            <div class="product" onclick="showProductModal(${product.id})">
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="event.stopPropagation(); addToCart(${product.id});" data-key="add-to-cart">Add to Cart</button>
            </div>
        `;
    }

    const categories = [...new Set(products.map(product => product.category))];

    const container = document.getElementById('product-container');
    categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');
        categoryElement.id = category.toLowerCase().replace(' ', '-');

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;

        const productList = document.createElement('div');
        productList.classList.add('product-list');

        const categoryProducts = products.filter(product => product.category === category);
        categoryProducts.forEach(product => {
            productList.innerHTML += createProductElement(product);
        });

        categoryElement.appendChild(categoryTitle);
        categoryElement.appendChild(productList);
        container.appendChild(categoryElement);
    });

    let cart = [];
    let totalPrice = 0;

    function updateCart() {
        const cartCount = document.getElementById('cart-count');
        const cartTotal = document.getElementById('cart-total');
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
                    <button onclick="removeFromCart(${index})" data-key="remove">Remove</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });

        cartCount.textContent = `Items: ${cart.length}`;
        cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('totalPrice', totalPrice);
    }

    function loadCartFromLocalStorage() {
        const storedCart = localStorage.getItem('cart');
        const storedTotalPrice = localStorage.getItem('totalPrice');
        if (storedCart) {
            cart = JSON.parse(storedCart);
            totalPrice = parseFloat(storedTotalPrice);
            updateCart();
        }
    }

    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        totalPrice += product.price;
        updateCart();
        saveCartToLocalStorage();  // Save cart to local storage
    }

    window.removeFromCart = function(index) {
        const product = cart[index];
        totalPrice -= product.price;
        if (product.quantity > 1) {
            product.quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        updateCart();
        saveCartToLocalStorage();  // Save cart to local storage
    }

    const modal = document.getElementById('product-modal');
    const modalImage = document.getElementById('modal-image');
    const modalName = document.getElementById('modal-name');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const modalAddToCart = document.getElementById('modal-add-to-cart');
    let currentProduct;

    window.showProductModal = function(productId) {
        currentProduct = products.find(p => p.id === productId);
        modalImage.src = currentProduct.imageUrl;
        modalName.textContent = currentProduct.name;
        modalDescription.textContent = currentProduct.description;
        modalPrice.textContent = `$${currentProduct.price.toFixed(2)}`;
        modal.style.display = 'flex';
    }

    document.getElementById('close-modal').onclick = function() {
        modal.style.display = 'none';
    }

    modalAddToCart.onclick = function() {
        addToCart(currentProduct.id);
        modal.style.display = 'none';
    };

    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Το καλάθι σας είναι άδειο!');
        } else {
            let cartItems = cart.map(item => item.name).join(', ');
            alert(`Ολοκλήρωση αγοράς των εξής αντικειμένων: ${cartItems}\nΣύνολο: €${totalPrice.toFixed(2)}`);
            cart = [];
            totalPrice = 0;
            updateCart();
            saveCartToLocalStorage();  // Save empty cart to local storage
        }
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    loadCartFromLocalStorage();  // Load cart from local storage on page load
});