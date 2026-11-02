/*
Zees Delicious Crumbs Bakery - Master Interactive Script
Student Name: Zethembiso | Student ID: ST10518561
*/
document.addEventListener('DOMContentLoaded', () => {
    
    //1. Dynamic Product Loading, Search & Filter (services.html)
    const products = [
        {name: "Custom Birthday Cake", category: "cakes", price: 450, img: "images/decorating process.png", desc: "Handcrafted personalized cakes."},
        {name: "Artisanal Chocolate Pastry", category: "pastries", price: 32, img: "images/decorating process.png", desc: "Rich Belgian chocolate layered pastry."},
        {name: "Vanilla Wedding Cake", category: "cakes", price: 1200, img: "images/decorating process.png", desc: "Multi-tiered elegant wedding cake."},
        {name: "Butter Croissant", category: "pastries", prices: 25, img: "images/decorating process.png", desc: "Flaky french butter croissants"}
    ];

    const productsContainer = document.getElementById('dynamic-products');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');

    function renderProducts(items) {
        if (!productContainer) return;
        productContainer.innerHTML = '';
        if (items.length ===0) {
            productContainer.innerHTML = '<p>No bakery products found matching your search.</p>';
            return;
        }
        items.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
              <img src="${product.img}" alt="${product.name}" class="gallery-img">
              <h3>${product.name}</h3>
              <p><strong>Price: R${product.price}</strong></p>
              `;
              productContainer.appendChild(card);
        });
        initLightbox();
    }
    if (productContainer) {
        renderProducts(products);

        function filterProducts() {
            const query =searchInput ? searchInput.value.toLowerCase() : '';
            const cat = categoryFilter ? categoryFilter.value : 'all';

            const filtered = products.filter(p => {
                const matchesSearch = p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query);
                const matchesCat = cat === 'all' || p.category === cat;
                return matchesSearch && matchesCat;
            });
            renderProducts(filtered);
        }

        if (searchInput) searchInput.addEventListener('input, filterProducts');
        if (categoryFilter) categoryFilter.addEventListener('change, filterProducts');
    }

    //2. Accordion Component (about.html)
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            body.classList.toogle('active');
        });
    });

    //3. Lightbox Gallery Component
    function initLightbox() {
        const images = document.querySelectorAll('.gallery-img');
        const lightbox = document.getElementById('lightbox-modal');
        const lightboxImg = document.getElementById('lightbox-img');

        if (!lightbox || !lightboxImg) return;

        images.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
            });
        });

        lightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }

    //4. Leaflet Interactive Map (contact.html/index.html)
    const mapElement = document.getElementById('map');
    if (mapElement && typeof L !== 'undefined') {
        // Centered around KwaZulu-Natal (Nongoma / Durban region)
        const map = L.map('map').setView([-28.5000, 31.5000], 7);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Nongoma Branch Marker
        L.marker([-27.8966, 31.6461]).addTo(map)
          .bindPopup('<b>Zees Bakery - Nongoma Branch</b><br>Main Street, Nongoma');

        // Durban Branch Marker
        L.marker([-29.8587, 31.0218]).addTo(map)
          .bindPopup('<b>Zees Bakery - Durban Branch</b><br>Florida Road, Durban');
    }

    //5. Enquiry Form Real-time Calculation & Custom JS Validation (enquiry.html)
    const enquiryForm = document.getElementById('enquiry-form');
    if (enuiryForm) {
        const itemSelect = document.getElementById('item-type');
        const quantityInput = document.getElementById('quantity');
        const estimateDisplay = document.getElementById('cost-estimate');

        function updateEstimate() {
            if (!itemSelect || !quantityInput || !estimateDisplay) return;
            const unitPrice = parseFloat(itemSelect.selectedOptions[0].dataset.price || 0);
            const qty = parseInt(quantityInput.value || 0);
            const total = unitPrice * qty;
            estimateDisplay.textContent = `Estimated Total: R${total.toFixed(2)}`;
        }

        if (itemSelect && quantityInput) {
            itemSelect.addEventListener('change', updateEstimate);
            quantityInput.addEventListener('input', updateEstimate);
        }

        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            //Validate Email
            const email = document.getElementById('enquiry-email');
            const emailError = document.getElementById('email-error');
            const emailRegex = /^[^\s@]+@{^\s@}+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                emailError.style.display = 'block'
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }

            if (isValid) {
                responseBox.style.display = 'block'
                responseBox.clasName = 'response-box success';
                responseBox.innerHTML = `<strong>Thank You!</strong> Your enquiry has been received asynchronously. Our team will contact you shortly to comfirm your order.`;
                enquiryForm.reset();
                if (estimateDisplay) estimateDisplay.textContent = 'Estimated Total: R0.00';
            }
        });
    }

    // 6. Contact Form Validation 7 AJAX Simulation (Contact.html)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let valid = true;

            const name = document.getElementById('contact-name');
            const nameErr = document.getElementById('name-error');
            if (name.value.trim().length < 2) {
                nameErr.style.display = 'block';
                valid = false;
            } else {
                nameErr.style.display = 'none';
            }

            if (valid) {
                const resp = document.getElementById('contact-responcse');
                resp.style.display = 'block';
                resp.className = 'responce-box success';
                resp.innerHTML = `<strong>Message Sent!</strong> Thank you ${name.value}, your message has been successfully submitted to Zees Bakery.`;
            }
        });
    }

    });