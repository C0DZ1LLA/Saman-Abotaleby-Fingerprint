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
        translateProducts(language);
    }

    function translateProducts(language) {
        products.forEach(product => {
            const nameKey = `product-name-${product.id}`;
            const descriptionKey = `product-description-${product.id}`;
            const nameElement = document.querySelector(`[data-key="${nameKey}"]`);
            const descriptionElement = document.querySelector(`[data-key="${descriptionKey}"]`);
            if (nameElement && descriptionElement) {
                nameElement.textContent = product.name[language];
                descriptionElement.textContent = product.description[language];
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
    };

    const products = [
        { id: 1, name: { en: 'Hypernova Laptop', el: 'Υπερνόβα Φορητός Υπολογιστής' }, description: { en: 'A futuristic laptop with quantum computing capabilities.', el: 'Φουτουριστικός φορητός υπολογιστής με δυνατότητες κβαντικού υπολογισμού.' }, imageUrl: 'https://via.placeholder.com/200', price: 1999.99, category: 'Electronics' },
        { id: 2, name: { en: 'Nebula Smartphone', el: 'Κινητό Τηλέφωνο Νεφέλωμα' }, description: { en: 'A smartphone with holographic display and AI integration.', el: 'Ένα smartphone με ολογραφική οθόνη και ενσωμάτωση AI.' }, imageUrl: 'https://via.placeholder.com/200', price: 1299.99, category: 'Electronics' },
        { id: 3, name: { en: 'Quantum Earbuds', el: 'Κβαντικά Ακουστικά' }, description: { en: 'Noise-cancelling earbuds with unparalleled sound quality.', el: 'Ακουστικά ακύρωσης θορύβου με απαράμιλλη ποιότητα ήχου.' }, imageUrl: 'https://via.placeholder.com/200', price: 299.99, category: 'Wearables' },
        { id: 4, name: { en: 'Galactic Watch', el: 'Γαλαξιακό Ρολόι' }, description: { en: 'A smartwatch with health monitoring and solar charging.', el: 'Ένα smartwatch με παρακολούθηση υγείας και ηλιακή φόρτιση.' }, imageUrl: 'https://via.placeholder.com/200', price: 499.99, category: 'Wearables' },
        { id: 5, name: { en: 'Orion VR Headset', el: 'VR Κράνος Ωρίων' }, description: { en: 'An immersive VR headset with 8K resolution.', el: 'Ένα εντυπωσιακό VR headset με ανάλυση 8K.' }, imageUrl: 'https://via.placeholder.com/200', price: 899.99, category: 'Drones' },
        { id: 6, name: { en: 'Stellar Drone', el: 'Αστρονομικό Drone' }, description: { en: 'A drone with AI piloting and 4K video recording.', el: 'Ένα drone με πιλότο AI και εγγραφή βίντεο 4K.' }, imageUrl: 'https://via.placeholder.com/200', price: 999.99, category: 'Drones' },
        { id: 7, name: { en: 'Smart Light Bulb', el: 'Έξυπνη Λάμπα' }, description: { en: 'Energy-efficient light bulb with voice control.', el: 'Ενεργειακά αποδοτική λάμπα με φωνητικό έλεγχο.' }, imageUrl: 'https://via.placeholder.com/200', price: 49.99, category: 'Smart Home' },
        { id: 8, name: { en: 'Smart Thermostat', el: 'Έξυπνος Θερμοστάτης' }, description: { en: 'Automated temperature control for your home.', el: 'Αυτοματοποιημένος έλεγχος θερμοκρασίας για το σπίτι σας.' }, imageUrl: 'https://via.placeholder.com/200', price: 199.99, category: 'Smart Home' },
        { id: 9, name: { en: 'Smart Door Lock', el: 'Έξυπνη Κλειδαριά' }, description: { en: 'Secure and convenient door lock with remote access.', el: 'Ασφαλές και βολικό κλείδωμα πόρτας με απομακρυσμένη πρόσβαση.' }, imageUrl: 'https://via.placeholder.com/200', price: 149.99, category: 'Smart Home' },
        { id: 10, name: { en: 'Gaming Laptop', el: 'Φορητός Υπολογιστής Παιχνιδιών' }, description: { en: 'High-performance laptop for gaming enthusiasts.', el: 'Φορητός υπολογιστής υψηλής απόδοσης για ενθουσιώδεις παίκτες.' }, imageUrl: 'https://via.placeholder.com/200', price: 1499.99, category: 'Gaming' },
        { id: 11, name: { en: 'VR Gaming Console', el: 'Κονσόλα Παιχνιδιών VR' }, description: { en: 'Next-gen console with immersive VR experience.', el: 'Κονσόλα επόμενης γενιάς με εντυπωσιακή εμπειρία VR.' }, imageUrl: 'https://via.placeholder.com/200', price: 599.99, category: 'Gaming' },
        { id: 12, name: { en: 'Gaming Chair', el: 'Καρέκλα Παιχνιδιών' }, description: { en: 'Ergonomic chair designed for long gaming sessions.', el: 'Εργονομική καρέκλα σχεδιασμένη για μεγάλες συνεδρίες παιχνιδιών.' }, imageUrl: 'https://via.placeholder.com/200', price: 299.99, category: 'Gaming' },
        { id: 13, name: { en: 'Fitness Tracker', el: 'Παρακολούθηση Γυμναστικής' }, description: { en: 'Monitor your health with advanced fitness features.', el: 'Παρακολουθήστε την υγεία σας με προηγμένα χαρακτηριστικά γυμναστικής.' }, imageUrl: 'https://via.placeholder.com/200', price: 129.99, category: 'Health' },
        { id: 14, name: { en: 'Smart Scale', el: 'Έξυπνη Ζυγαριά' }, description: { en: 'Track your weight and BMI with precision.', el: 'Παρακολουθήστε το βάρος και τον ΔΜΣ σας με ακρίβεια.' }, imageUrl: 'https://via.placeholder.com/200', price: 79.99, category: 'Health' },
        { id: 15, name: { en: 'Blood Pressure Monitor', el: 'Μετρητής Αρτηριακής Πίεσης' }, description: { en: 'Accurate and easy-to-use blood pressure monitor.', el: 'Ακριβής και εύχρηστος μετρητής αρτηριακής πίεσης.' }, imageUrl: 'https://via.placeholder.com/200', price: 59.99, category: 'Health' },
        { id: 16, name: { en: 'Designer Jacket', el: 'Μπουφάν Σχεδιαστών' }, description: { en: 'Stylish and modern jacket for all seasons.', el: 'Μοντέρνο και κομψό μπουφάν για όλες τις εποχές.' }, imageUrl: 'https://via.placeholder.com/200', price: 299.99, category: 'Fashion' },
        { id: 17, name: { en: 'Luxury Handbag', el: 'Πολυτελής Τσάντα' }, description: { en: 'Elegant handbag made with premium materials.', el: 'Κομψή τσάντα κατασκευασμένη από υλικά υψηλής ποιότητας.' }, imageUrl: 'https://via.placeholder.com/200', price: 799.99, category: 'Fashion' },
        { id: 18, name: { en: 'Smart Glasses', el: 'Έξυπνα Γυαλιά' }, description: { en: 'Fashionable glasses with AR capabilities.', el: 'Μοντέρνα γυαλιά με δυνατότητες επαυξημένης πραγματικότητας.' }, imageUrl: 'https://via.placeholder.com/200', price: 399.99, category: 'Fashion' },
        { id: 19, name: { en: 'Wireless Charger', el: 'Ασύρματος Φορτιστής' }, description: { en: 'Fast charging pad for all your devices.', el: 'Γρήγορος φορτιστής για όλες τις συσκευές σας.' }, imageUrl: 'https://via.placeholder.com/200', price: 49.99, category: 'Accessories' },
        { id: 20, name: { en: 'Bluetooth Speaker', el: 'Ηχείο Bluetooth' }, description: { en: 'Portable speaker with high-quality sound.', el: 'Φορητό ηχείο με υψηλής ποιότητας ήχο.' }, imageUrl: 'https://via.placeholder.com/200', price: 89.99, category: 'Accessories' },
        { id: 21, name: { en: 'Smart Ring', el: 'Έξυπνο Δαχτυλίδι' }, description: { en: 'Innovative ring with fitness and notification features.', el: 'Καινοτόμο δαχτυλίδι με δυνατότητες γυμναστικής και ειδοποιήσεων.' }, imageUrl: 'https://via.placeholder.com/200', price: 149.99, category: 'Accessories' },
        { id: 22, name: { en: 'Interactive Robot Toy', el: 'Διαδραστικό Ρομπότ Παιχνίδι' }, description: { en: 'Fun and educational robot for kids.', el: 'Διασκεδαστικό και εκπαιδευτικό ρομπότ για παιδιά.' }, imageUrl: 'https://via.placeholder.com/200', price: 59.99, category: 'Toys' },
        { id: 23, name: { en: 'Drone Toy', el: 'Παιχνίδι Drone' }, description: { en: 'Mini drone with easy controls for kids.', el: 'Μίνι drone με εύκολους χειρισμούς για παιδιά.' }, imageUrl: 'https://via.placeholder.com/200', price: 99.99, category: 'Toys' },
        { id: 24, name: { en: 'Smart Puzzle', el: 'Έξυπνο Παζλ' }, description: { en: 'Interactive puzzle that changes with each play.', el: 'Διαδραστικό παζλ που αλλάζει με κάθε παιχνίδι.' }, imageUrl: 'https://via.placeholder.com/200', price: 29.99, category: 'Toys' },
        { id: 25, name: { en: 'Ergonomic Office Chair', el: 'Εργονομική Καρέκλα Γραφείου' }, description: { en: 'Comfortable chair designed for long hours.', el: 'Άνετη καρέκλα σχεδιασμένη για πολλές ώρες εργασίας.' }, imageUrl: 'https://via.placeholder.com/200', price: 199.99, category: 'Office' },
        { id: 26, name: { en: 'Standing Desk', el: 'Ρυθμιζόμενο Γραφείο' }, description: { en: 'Adjustable desk for a healthier workspace.', el: 'Ρυθμιζόμενο γραφείο για έναν υγιέστερο χώρο εργασίας.' }, imageUrl: 'https://via.placeholder.com/200', price: 399.99, category: 'Office' },
        { id: 27, name: { en: 'Smart Pen', el: 'Έξυπνο Στυλό' }, description: { en: 'Pen that digitizes your handwriting.', el: 'Στυλό που ψηφιοποιεί τον γραφικό σας χαρακτήρα.' }, imageUrl: 'https://via.placeholder.com/200', price: 99.99, category: 'Office' },
        { id: 28, name: { en: 'Quantum Tablet', el: 'Κβαντικό Tablet' }, description: { en: 'A high-end tablet with a crystal-clear display.', el: 'Ένα κορυφαίο tablet με κρυστάλλινη οθόνη.' }, imageUrl: 'https://via.placeholder.com/200', price: 899.99, category: 'Electronics' },
        { id: 29, name: { en: 'Futuristic Camera', el: 'Φουτουριστική Κάμερα' }, description: { en: 'Capture moments with AI-enhanced clarity.', el: 'Καταγράψτε στιγμές με ενισχυμένη καθαρότητα από AI.' }, imageUrl: 'https://via.placeholder.com/200', price: 799.99, category: 'Electronics' },
        { id: 30, name: { en: 'Smart Speaker', el: 'Έξυπνο Ηχείο' }, description: { en: 'Voice-controlled speaker with high-fidelity sound.', el: 'Ηχείο με φωνητικό έλεγχο και υψηλή πιστότητα ήχου.' }, imageUrl: 'https://via.placeholder.com/200', price: 199.99, category: 'Electronics' }
    ];
    

    function createProductElement(product, language) {
        return `
            <div class="product" onclick="showProductModal(${product.id})">
                <img src="${product.imageUrl}" alt="${product.name[language]}">
                <h3 data-key="product-name-${product.id}">${product.name[language]}</h3>
                <p data-key="product-description-${product.id}">${product.description[language]}</p>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="event.stopPropagation(); addToCart(${product.id});" data-key="add-to-cart">${translations[language]['add-to-cart']}</button>
            </div>
        `;
    }

    function renderProducts(language) {
        const container = document.getElementById('product-container');
        container.innerHTML = '';
        const categories = [...new Set(products.map(product => product.category))];

        categories.forEach(category => {
            const categoryElement = document.createElement('div');
            categoryElement.classList.add('category');
            categoryElement.id = category.toLowerCase().replace(' ', '-');

            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = translations[language][category.toLowerCase().replace(' ', '-')];

            const productList = document.createElement('div');
            productList.classList.add('product-list');

            const categoryProducts = products.filter(product => product.category === category);
            categoryProducts.forEach(product => {
                productList.innerHTML += createProductElement(product, language);
            });

            categoryElement.appendChild(categoryTitle);
            categoryElement.appendChild(productList);
            container.appendChild(categoryElement);
        });
    }

    // Initial render
    renderProducts('el');

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
                    <button onclick="removeFromCart(${index})" data-key="remove">${translations['el']['remove']}</button>
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
