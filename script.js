/* =========================================
   1. GLOBAL HELPERS (Must be at the top)
   ========================================= */

// FIX: This function controls the image swapping in the modal
function changeImage(element) {
    // 1. Change the main image source to the clicked thumbnail's source
    document.getElementById('mainImage').src = element.src;
    
    // 2. Remove 'active' class from all thumbnails
    document.querySelectorAll('.thumb-img').forEach(img => {
        img.classList.remove('active');
        img.style.border = "1px solid #ddd"; // Optional styling reset
    });

    // 3. Add 'active' class to clicked thumbnail
    element.classList.add('active');
    element.style.border = "2px solid #333"; // Highlight active
}

/* =========================================
   2. MODAL LOGIC (Fixes "Images not changing")
   ========================================= */

function openProductModal(productId) {
    const product = products[productId];
    if (!product) {
        console.error("Product not found");
        return;
    }

    // --- A. Populate Text Data ---
    document.getElementById('modalTitle').innerText = product.name;
    document.getElementById('modalPrice').innerText = "₹" + product.price;
    document.getElementById('modalOldPrice').innerText = "₹" + product.oldPrice;
    document.getElementById('modalDesc').innerText = product.desc;

    // --- B. Handle Images ---
    const mainImg = document.getElementById('mainImage');
    
    // Safety check: ensure product has images, otherwise use placeholder
    const imgList = product.images && product.images.length > 0 
        ? product.images 
        : ["https://placehold.co/600x600/f5f5f5/333?text=No+Image"];

    // Set initial main image
    mainImg.src = imgList[0];

    // Clear old thumbnails from previous opens
    const thumbContainer = document.getElementById('thumbContainer');
    thumbContainer.innerHTML = ''; 

    // Generate new thumbnails dynamically
    imgList.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('thumb-img');
        img.style.cursor = "pointer";
        img.style.width = "80px"; // Enforce size
        img.style.height = "80px";
        img.style.objectFit = "cover";
        img.className = "thumb-img border rounded"; 
        
        // Add spacing
        img.style.marginRight = "10px";

        // Set first image as active
        if (index === 0) {
            img.classList.add('active');
            img.style.border = "2px solid #333";
        }

        // Attach Click Event
        img.onclick = function() {
            changeImage(this);
        };

        thumbContainer.appendChild(img);
    });

    // --- C. Reset Quantity ---
    const qtyInput = document.getElementById('qtyInput');
    if (qtyInput) qtyInput.value = 1;

    // --- D. Fix "Add to Cart" Button Logic ---
    const addBtn = document.querySelector('.btn-add-cart');
    
    // Clone button to remove old event listeners (prevents adding multiple times)
    const newAddBtn = addBtn.cloneNode(true);
    addBtn.parentNode.replaceChild(newAddBtn, addBtn);

    // Add new event listener
    newAddBtn.addEventListener('click', () => {
        const qty = parseInt(document.getElementById('qtyInput').value) || 1;
        addToCart(productId, qty);
        
        // Close modal after adding
        const modalEl = document.getElementById('productModal');
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        modalInstance.hide();
    });

    // --- E. Show the Modal ---
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

/* =========================================
   3. CART LOGIC (Fixes "Cart not updated")
   ========================================= */

function addToCart(id, qty = 1) {
    const product = products[id];
    
    // Check if item exists in cart
    const existingItem = cart.find(item => item.id == id);

    if (existingItem) {
        existingItem.qty += qty;
    } else {
        // Ensure we store the first image URL string, not the whole array, for the cart display
        const primaryImage = Array.isArray(product.images) ? product.images[0] : product.images;
        
        cart.push({ 
            ...product, 
            qty: qty,
            image: primaryImage // Explicitly save one image for the cart
        });
    }

    saveCart(); // This saves to localStorage AND updates the navbar count
    
    // Visual Feedback
    alert(`${product.name} added to cart!`);
}

function updateNavCounts() {
    // Update Cart Count Badge
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
        cartCountEl.innerText = totalQty;
        // Make badge visible/invisible based on count
        cartCountEl.style.display = totalQty > 0 ? 'inline-block' : 'none';
    }

    // Update Wishlist Count Badge
    const wishCountEl = document.getElementById('wishlistCount');
    if (wishCountEl) {
        wishCountEl.innerText = wishlist.length;
    }
}