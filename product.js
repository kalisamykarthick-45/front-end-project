
const products = {
    1: {
        id: 1,
        name: "Premium Cotton Shirt",
        price: 999,
        oldPrice: 1399,
        desc: "Soft premium cotton, perfect for summer.",
        images: [
            "images/shirt 1.webp",
            "images/casual shirt k1.png",
            "images/casual shirt k2.png"
        ]
    },
    2: {
        id: 2,
        name: "Casual Shirt",
        price: 1299,
        oldPrice: 1799,
        desc: "Perfect casual shirt for daily wear.",
        images: [
            "images/shirt 2.webp",
            "images/casual shirt c1.png",
            "images/casual shirt c2.png"
        ]
    },
    3: {
        id: 3,
        name: "Formal Shirt",
        price: 1399,
        oldPrice: 1899,
        desc: "Perfect for meetings and office wear.",
        images: [
            "images/shirt 3.webp",
            "images/casual f1.png",
            "images/casual f2.png"
        ]
    },
    4: {
        id: 4,
        name: "Checked Shirt",
        price: 1199,
        oldPrice: 1599,
        desc: "Stylish weekend wear.",
        images: [
            "images/shirt 5.webp",
            "images/checked shirt s1.png",
            "images/checked shirt s2.png"
        ]
    },
    5: {
        id: 5,
        name: "Loafer",
        price: 1499,
        oldPrice: 1999,
        desc: "Everyday comfort loafers.",
        images: [
            "images/shoe new 1.webp",
            "images/loafer s1.png",
            "images/loafer s2.png"
        ]
    },
    6: {
        id: 6,
        name: "Formal Shoe",
        price: 1299,
        oldPrice: 1699,
        desc: "Professional look for formal events.",
        images: [
            "images/shoe new 2.webp",
            "images/shoe new 2.webp"
        ]
    },
    7: {
        id: 7,
        name: "Sports Shoe",
        price: 1899,
        oldPrice: 2499,
        desc: "High performance running shoes.", 
        images: ["images/shoe new 3.webp", 
            "images/sports shoe s1.png"
        ]
    },
    8: { id: 8, 
        name: "Classic Sports", 
        price: 1599, 
        oldPrice: 2099, 
        desc: "Great for gym and running.", 
        images: [
            "images/shoe new 4.webp", 
            "images/sports shoe small 1.png"
        ] 
    },
    9: { id: 9, 
        name: "Backpack", 
        price: 1199, 
        oldPrice: 1699, 
        desc: "Versatile backpack for travel.", 
        images: ["images/bag new 1.webp", 
            "images/bag s1.png"
        ] 
    },
    10: { id: 10, 
        name: "Hand Bag", 
        price: 1599, 
        oldPrice: 1999, 
        desc: "Refined design for ladies.", 
        images: ["images/bag new 2.webp", 
            "images/hand bag s1.png"
        ] 
    },
    11: { id: 11, 
        name: "Laptop Bag", 
        price: 899, 
        oldPrice: 1299, 
        desc: "Soft protection for your laptop.", 
        images: ["images/bag new 3.webp", 
            "images/lap bag s1.png"
        ] 
    },
    12: { 
        id: 12, 
        name: "Travel Bag", 
        price: 2599, 
        oldPrice: 3099, 
        desc: "Durable travel companion.", 
        images: ["images/bag new 4.webp", 
            "images/travel bag small 1.png"
        ] 
    },
    13: { 
        id: 13, 
        name: "Analog Watch", 
        price: 1499, 
        oldPrice: 1999, 
        desc: "Timeless elegance.", 
        images: 
        [
            "images/watch new 1.webp", 
            "images/watch men 1.webp"
        ] 
    },
    14: { 
        id: 14, 
        name: "Smart Watch", 
        price: 1799, 
        oldPrice: 2499, 
        desc: "Fitness tracker with smart features.", 
        images: ["images/watch new 2.webp", 
            "images/watch men k1.webp"
        ] 
    },
    15: { id: 15, name: "Minimalist Watch", price: 1299, oldPrice: 1699, desc: "Elegant watch for women.", images: ["images/watch new 4.webp", "images/watch women 1.webp"] },
    16: { id: 16, name: "Steel Watch", price: 999, oldPrice: 1399, desc: "Modern minimalist steel design.", images: ["images/watch new 5.webp", "images/watch women 1.webp"] },
    17: { id: 17, name: "Slim Jeans", price: 1199, oldPrice: 1599, desc: "Stretch denim for comfort.", images: ["images/jeans.1 women.webp", "images/jeans. s1.png"] },
    18: { id: 18, name: "Blue Jeans", price: 999, oldPrice: 1499, desc: "Classic straight fit.", images: ["images/jeans 6 women.webp", "images/jeans j1.png"] },
    19: { id: 19, name: "Dark Jeans", price: 1299, oldPrice: 1899, desc: "Regular fit dark wash.", images: ["images/jeans 7 women.webp", "images/jeans k1.png"] },
    20: { id: 20, name: "Track Suit", price: 899, oldPrice: 1299, desc: "Sporty design for workouts.", images: ["images/track suit big women.webp", "images/track suit sm 1 w.webp"] },
    21: { id: 21, name: "Cotton T-Shirt", price: 499, oldPrice: 799, desc: "Relaxed silhouette.", images: ["images/t shirt 2.webp", "images/t shirt s1.png"] },
    22: { id: 22, name: "Graphic Tee", price: 599, oldPrice: 899, desc: "Trendy printed design.", images: ["images/t shirt 3.webp", "images/t shirt sm 1.png"] },
    23: { id: 23, name: "Oversized Tee", price: 699, oldPrice: 999, desc: "Streetwear oversized style.", images: ["images/t shirt 4.webp", "images/t shirt s4.png"] },
    24: { id: 24, name: "Formal Suit", price: 2099, oldPrice: 3599, desc: "Luxury suit crafted with premium fabric.", images: ["images/suit image big.webp", "images/suit sm 1.png"] }
};


let cart = JSON.parse(localStorage.getItem('myCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('myWishlist')) || [];


document.addEventListener('DOMContentLoaded', () => {
    updateNavCounts();

    
    if (document.getElementById('cart-table-body')) {
        renderCartPage();
    }
    if (document.getElementById('wishlist-container')) {
        renderWishlistPage();
    }

   
    const searchInput = document.getElementById('navbar-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => filterProducts(e.target.value));
    }

  
    restoreWishlistIcons();
});


function saveCart() {
    localStorage.setItem('myCart', JSON.stringify(cart));
    updateNavCounts();
}

function saveWishlist() {
    localStorage.setItem('myWishlist', JSON.stringify(wishlist));
    updateNavCounts();
}

function updateNavCounts() {
   
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
        cartCountEl.innerText = totalQty;
    }


    const wishCountEl = document.getElementById('wishlistCount');
    if (wishCountEl) {
        wishCountEl.innerText = wishlist.length;
    }
}


let currentModalProductId = null;

function openProductModal(productId) {
    const product = products[productId];
    if (!product) return;

    currentModalProductId = productId;

  
    document.getElementById('modalTitle').innerText = product.name;
    document.getElementById('modalPrice').innerText = "₹" + product.price;
    document.getElementById('modalOldPrice').innerText = "₹" + product.oldPrice;
    document.getElementById('modalDesc').innerText = product.desc;

   
    const mainImg = document.getElementById('mainImage');
   
    const imgList = product.images || (product.image ? product.image : ["https://placehold.co/600x600"]);
    mainImg.src = imgList[0];

   
    const thumbContainer = document.getElementById('thumbContainer');
    thumbContainer.innerHTML = '';

    imgList.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('thumb-img');
        if (index === 0) img.classList.add('active');
        img.onclick = function () {
           
            document.getElementById('mainImage').src = this.src;
            
            document.querySelectorAll('.thumb-img').forEach(el => el.classList.remove('active'));
            this.classList.add('active');
        };
        thumbContainer.appendChild(img);
    });

    
    const qtyInput = document.getElementById('qtyInput');
    if (qtyInput) qtyInput.value = 1;

    
    const addBtn = document.querySelector('.btn-add-cart');
    
    const newAddBtn = addBtn.cloneNode(true);
    addBtn.parentNode.replaceChild(newAddBtn, addBtn);

    newAddBtn.addEventListener('click', () => {
        const qty = parseInt(document.getElementById('qtyInput').value) || 1;
        addToCart(productId, qty);
     
        const modalEl = document.getElementById('productModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();
    });

   
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

function updateQty(change) {
    const input = document.getElementById('qtyInput');
    let val = parseInt(input.value) || 1;
    val += change;
    if (val < 1) val = 1;
    input.value = val;
}


function addToCart(id, qty = 1) {
    const product = products[id];
    const existingItem = cart.find(item => item.id == id);

    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({ ...product, qty: qty });
    }

    saveCart();
    alert("Added to Cart!");
}

function renderCartPage() {
    const tbody = document.getElementById('cart-table-body');
    const subtotalEl = document.getElementById('cart-subtotal');
    const taxEl = document.getElementById('cart-tax');
    const totalEl = document.getElementById('cart-total');

    if (!tbody) return;

    tbody.innerHTML = '';
    let subtotal = 0;

    if (cart.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center py-4">Your cart is empty.</td></tr>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            subtotal += itemTotal;
           
            const imgSrc = Array.isArray(item.images) ? item.images[0] : item.images;

            const row = `
                <tr>
                    <td class="ps-3">
                        <div class="d-flex align-items-center">
                            <img src="${imgSrc}" width="60" height="60" class="rounded me-3" style="object-fit:cover">
                            <div>
                                <h6 class="mb-0 fw-bold">${item.name}</h6>
                                <small class="text-muted">ID: ${item.id}</small>
                            </div>
                        </div>
                    </td>
                    <td>₹${item.price}</td>
                    <td>
                        <div class="input-group input-group-sm" style="width: 100px;">
                            <button class="btn btn-outline-secondary" onclick="changeCartQty(${item.id}, -1)">-</button>
                            <input type="text" class="form-control text-center" value="${item.qty}" readonly>
                            <button class="btn btn-outline-secondary" onclick="changeCartQty(${item.id}, 1)">+</button>
                        </div>
                    </td>
                    <td class="fw-bold">₹${itemTotal}</td>
                    <td>
                        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})"><i class="bi bi-trash"></i></button>
                    </td>
                </tr>
            `;
            tbody.innerHTML += row;
        });
    }

   
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + tax;

    subtotalEl.innerText = "₹" + subtotal;
    taxEl.innerText = "₹" + tax;
    totalEl.innerText = "₹" + total;
}

function changeCartQty(id, change) {
    const item = cart.find(i => i.id == id);
    if (item) {
        item.qty += change;
        if (item.qty < 1) item.qty = 1;
        saveCart();
        renderCartPage();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id != id);
    saveCart();
    renderCartPage();
}


function toggleWishlist(btn, id) {
    const index = wishlist.indexOf(id);
    const icon = btn.querySelector('i');

    if (index === -1) {
        // Add
        wishlist.push(id);
        icon.classList.remove('bi-heart');
        icon.classList.add('bi-heart-fill');
        icon.classList.add('text-danger');
    } else {
        // Remove
        wishlist.splice(index, 1);
        icon.classList.remove('bi-heart-fill');
        icon.classList.remove('text-danger');
        icon.classList.add('bi-heart');
    }
    saveWishlist();


    if (document.getElementById('wishlist-container')) {
        renderWishlistPage();
    }
}

function restoreWishlistIcons() {
   
    document.querySelectorAll('.product-card').forEach(card => {
        const id = parseInt(card.getAttribute('data-id'));
        if (wishlist.includes(id)) {
            const icon = card.querySelector('.fav-btn i');
            if (icon) {
                icon.classList.remove('bi-heart');
                icon.classList.add('bi-heart-fill');
                icon.classList.add('text-danger');
            }
        }
    });
}

function renderWishlistPage() {
    const container = document.getElementById('wishlist-container');
    if (!container) return;

    container.innerHTML = '';

    if (wishlist.length === 0) {
        container.innerHTML = '<div class="col-12 text-center py-5"><h4>Your wishlist is empty.</h4><a href="shop.html" class="btn btn-primary mt-3">Go Shopping</a></div>';
        return;
    }

    wishlist.forEach(id => {
        const product = products[id];
        if (product) {
            const imgSrc = Array.isArray(product.images) ? product.images[0] : product.images;

            const cardHtml = `
            <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card h-100 border-0 shadow-sm">
                    <img src="${imgSrc}" class="card-img-top" alt="${product.name}" style="height: 300px; object-fit: cover;">
                    <div class="card-body text-center">
                        <h5 class="card-title fw-bold">${product.name}</h5>
                        <p class="card-text text-muted">₹${product.price} <del>₹${product.oldPrice}</del></p>
                        <button class="btn btn-dark w-100 mb-2" onclick="addToCart(${product.id})">Add to Cart</button>
                        <button class="btn btn-outline-danger w-100" onclick="removeFromWishlistPage(${product.id})">Remove</button>
                    </div>
                </div>
            </div>`;
            container.innerHTML += cardHtml;
        }
    });
}

function removeFromWishlistPage(id) {
    const index = wishlist.indexOf(id);
    if (index > -1) {
        wishlist.splice(index, 1);
        saveWishlist();
        renderWishlistPage();
    }
}


function filterProducts(query) {
    query = query.toLowerCase();
    const cards = document.querySelectorAll('.product-card'); 

   
    if (cards.length === 0) return;

    cards.forEach(card => {
        const title = card.querySelector('h5').innerText.toLowerCase();
        if (title.includes(query)) {
            card.parentElement.style.display = "block"; 
        } else {
            card.parentElement.style.display = "none"; 
        }
    });
}

function toggleShare(btn) {
    const card = btn.closest('.product-card');
    document.querySelectorAll('.product-card').forEach(c => {
        if (c !== card) c.classList.remove('show-share');
    });
    card.classList.toggle('show-share');
}

function shareProduct(type, id) {
    const url = window.location.href.split('#')[0] + '?product=' + id;
    const text = "Check out this product from Classic Brand 👟";

    if (type === 'whatsapp') {
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
    }
    if (type === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    }
    if (type === 'instagram') {
        alert("Instagram sharing works via app. Copy link instead.");
    }
    if (type === 'copy') {
        navigator.clipboard.writeText(url);
        alert("Product link copied!");
    }
}

