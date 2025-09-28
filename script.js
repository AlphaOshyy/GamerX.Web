// === PRODUCTS ARRAY ===
let products = [
  { id: 1, brand: "MSI", name: "Full Gaming PC", price: "Rs.560,000", img: ["img/Products/p1.jpg","img/Products/p1-2.jpg","img/Products/p1-3.jpg"], desc: "High-performance gaming PC with RTX 4070Ti, Intel i9 CPU, 32GB DDR5 RAM, and 1TB SSD.", specs:["CPU: Intel i9-13900K","GPU: NVIDIA RTX 4070 Ti","RAM: 32GB DDR5","Storage: 1TB NVMe SSD","Motherboard: MSI Z790","PSU: 850W Gold"] },
  { id: 2, brand: "Asus", name: "Full Gaming PC", price: "Rs.620,000", img: ["img/Products/p2.jpg","img/Products/p2-2.jpg"], desc: "Asus high-performance gaming PC with latest components for smooth 4K gameplay.", specs:["CPU: Intel i7-13700KF","GPU: NVIDIA RTX 4080","RAM: 32GB DDR5","Storage: 1TB SSD + 2TB HDD","Cooling: Liquid RGB Cooler"] },
  { id: 3, brand: "Asus", name: "G15 Gaming Laptop", price: "Rs.840,000", img: ["img/Products/p3.jpg","img/Products/p3-2.jpg"], desc: "Portable high-performance laptop for gaming and streaming.", specs:["CPU: AMD Ryzen 9 7945HX","GPU: RTX 4070 Laptop","RAM: 32GB DDR5","Storage: 1TB SSD","Display: 15.6\" 240Hz"] },
  { id: 4, brand: "MSI", name: "Vector-Ultra 9", price: "Rs.755,000", img: ["img/Products/p4.jpg","img/Products/p4-2.jpg"], desc: "Powerful desktop PC with top-notch gaming specs.", specs:["CPU: Intel i9-13900K","GPU: RTX 4080","RAM: 32GB DDR5","Storage: 2TB SSD","Motherboard: MSI Z790","PSU: 850W Gold"] },
  { id: 5, brand: "Asus ROG", name: "Astral GeForce RTX 5090 32GB GDDR7 OC Edition", price: "Rs.1,100,000", img: ["img/Products/p5.jpg","img/Products/p5-2.jpg"], desc: "Extreme gaming GPU for 4K and AI tasks with 32GB GDDR7 memory.", specs:["GPU: RTX 5090","VRAM: 32GB GDDR7","OC Edition","PCIe 5.0","Cooling: Triple Fan"] },
  { id: 6, brand: "Corsair", name: "K100 RGB Mechanical Keyboard", price: "Rs.55,000", img: ["img/Products/p6.jpg"], desc: "Premium RGB mechanical keyboard with programmable macros and optical switches.", specs:["Switches: Optical-Mechanical","RGB: Full customization","Macros: Programmable","Connectivity: USB"] },
  { id: 7, brand: "Logitech", name: "G502 HERO High-Performance Mouse", price: "Rs.18,000", img: ["img/Products/p7.jpg"], desc: "High-precision gaming mouse with customizable DPI and RGB lighting.", specs:["DPI: 100-16,000","Buttons: 11 programmable","RGB: 16.8M colors","Sensor: HERO 25K"] },
  { id: 8, brand: "Razer", name: "Kraken X USB Gaming Headset", price: "Rs.25,000", img: ["img/Products/p8.jpg"], desc: "Lightweight headset with 7.1 surround sound for immersive gaming.", specs:["Audio: 7.1 Surround","Weight: 250g","Mic: Bendable","Connectivity: USB"] },
  { id: 9, brand: "Elgato", name: "Stream Deck MK.2", price: "Rs.60,000", img: ["img/Products/n1.jpg"], desc: "Customizable control deck for streamers with LCD keys.", specs:["Keys: 15 LCD keys","Software: Elgato Stream Deck","Connectivity: USB 2.0","Use: Streaming, Editing"] },
  { id: 10, brand: "FIFINE", name: "RGB USB Gaming Microphone", price: "Rs.8,500", img: ["img/Products/n2.jpg"], desc: "Affordable USB mic with RGB lighting for gaming and streaming.", specs:["Connection: USB","RGB: Yes","Polar Pattern: Cardioid","Sample Rate: 48kHz"] },
  { id: 11, brand: "Logitech", name: "G502 HERO Mouse", price: "Rs.18,000", img: ["img/Products/p7.jpg"], desc: "High-precision gaming mouse with customizable DPI and RGB lighting.", specs:["DPI: 100-16,000","Buttons: 11 programmable","RGB: 16.8M colors","Sensor: HERO 25K"] },
  { id: 12, brand: "HyperX", name: "Fury S Pro XL Mousepad", price: "Rs.8,500", img: ["img/Products/n3.jpg"], desc: "Large gaming mousepad with smooth surface and anti-fray edges.", specs:["Size: XL","Surface: Textile","Anti-Fray: Yes","Thickness: 5mm"] },
  { id: 13, brand: "SteelSeries", name: "Apex Pro Mechanical Keyboard", price: "Rs.70,000", img: ["img/Products/n5.jpg"], desc: "Advanced mechanical keyboard with adjustable actuation switches and RGB.", specs:["Switch: OmniPoint","RGB: Full","Actuation: Adjustable","Connectivity: USB"] },
  { id: 14, brand: "Logitech", name: "G Pro X Superlight Mouse", price: "Rs.35,000", img: ["img/Products/n6.jpg"], desc: "Ultra-lightweight wireless gaming mouse for competitive esports.", specs:["Weight: 63g","Sensor: HERO 25K","Wireless: LIGHTSPEED","Battery: 70h"] },
  { id: 15, brand: "Corsair", name: "Virtuoso RGB Wireless XT Headset", price: "Rs.38,000", img: ["img/Products/n7.jpg"], desc: "High-end wireless headset with immersive sound and RGB lighting.", specs:["Audio: 7.1 Surround","Wireless: 2.4GHz & BT","RGB: Yes","Battery: 20h"] },
  { id: 16, brand: "Xbox", name: "Series X Wireless Controller", price: "Rs.22,000", img: ["img/Products/n8.jpg"], desc: "Official Xbox controller with ergonomic design and wireless connectivity.", specs:["Connectivity: Wireless","Battery: AA or rechargeable","Buttons: Standard Xbox layout","Compatibility: Xbox & PC"] }
];

// === SHOP PAGE DYNAMIC RENDER ===
function displayProducts() {
  const shop = document.getElementById("shop-products");
  if (!shop) return;
  shop.innerHTML = "";
  products.forEach(product => {
    let div = document.createElement("div");
    div.classList.add("pro");
    div.innerHTML = `
      <img src="${product.img[0]}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button onclick="viewProduct(${product.id})" class="normal">View Details</button>
    `;
    shop.appendChild(div);
  });
}

// === SINGLE PRODUCT PAGE ===
function viewProduct(id) {
  localStorage.setItem("productId", id);
  window.location.href = "sproduct.html";
}

function loadProductPage() {
  const prodId = localStorage.getItem("productId");
  if (!prodId) return;

  const product = products.find(p => p.id == prodId);
  if (!product) return;

  // Main image
  document.getElementById("MainImg").src = product.img[0];

  // Product details
  document.getElementById("prodName").innerText = product.name;
  document.getElementById("prodBrand").innerText = product.brand;
  document.getElementById("prodPrice").innerText = product.price;
  document.getElementById("prodDesc").innerText = product.desc;
  document.getElementById("prodDescTab").innerText = product.desc;
  document.getElementById("prodBreadcrumb").innerText = product.name;

  // Specs
  const specsList = document.getElementById("prodSpecs");
  specsList.innerHTML = "";
  product.specs.forEach(spec => {
    const li = document.createElement("li");
    li.innerText = spec;
    specsList.appendChild(li);
  });

  // Thumbnails
  const thumbDiv = document.getElementById("thumbnails");
  thumbDiv.innerHTML = "";
  product.img.forEach(imgSrc => {
    let thumb = document.createElement("img");
    thumb.src = imgSrc;
    thumb.onclick = () => { document.getElementById("MainImg").src = imgSrc; };
    thumb.classList.add("thumb");
    thumbDiv.appendChild(thumb);
  });

  // Related products (same brand)
  const relatedDiv = document.getElementById("relatedProducts");
  relatedDiv.innerHTML = "";
  const related = products.filter(p => p.brand === product.brand && p.id != product.id);
  related.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("pro");
    div.innerHTML = `
      <img src="${p.img[0]}" alt="${p.name}">
      <div class="des">
        <span>${p.brand}</span>
        <h5>${p.name}</h5>
        <h4>${p.price}</h4>
      </div>
    `;
    div.onclick = () => viewProduct(p.id);
    relatedDiv.appendChild(div);
  });
}

// === ADD TO CART ===
function addToCart(productId, quantity = 1) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id == productId);
  if (existing) {
    existing.qty += quantity;
  } else {
    cart.push({ id: productId, qty: quantity });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// === UPDATE CART COUNT (Navbar) ===
function updateCartCount() {
  const cartCount = document.querySelector(".cart-count");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartCount) cartCount.textContent = totalQty;
}

// === CART PAGE ===
function loadCartPage() {
  const cartContainer = document.getElementById("cartItems");
  if (!cartContainer) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const product = products.find(p => p.id == item.id);
    if (!product) return;

    const priceNum = parseInt(product.price.replace(/[^0-9]/g, '')) || 0;
    const itemTotal = priceNum * item.qty;
    total += itemTotal;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${product.img[0]}" alt="${product.name}" width="100">
      <div class="item-details">
        <h4>${product.name}</h4>
        <p>Rs.${priceNum.toLocaleString()}</p>
        <input type="number" min="1" value="${item.qty}" class="item-qty">
        <button class="remove-btn"><i class="fas fa-trash-alt"></i> Remove Item</button>
      </div>
      <p class="item-total">Rs.${itemTotal.toLocaleString()}</p>
    `;

    // Quantity change
    div.querySelector(".item-qty").addEventListener("change", e => {
      const newQty = parseInt(e.target.value) || 1;
      item.qty = newQty;
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCartPage();
    });

    // Remove button
    div.querySelector(".remove-btn").addEventListener("click", () => {
      const index = cart.findIndex(c => c.id == item.id);
      if (index > -1) cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCartPage();
    });

    cartContainer.appendChild(div);
  });

  const cartTotal = document.getElementById("cartTotal");
  if (cartTotal) cartTotal.textContent = total.toLocaleString();

  updateCartCount();
}

// === SLIDING TABS (Description / Specs / Reviews) ===
function openTab(tabId, evt = null) {
  const tabs = ["desc", "specs", "reviews"];
  const track = document.getElementById("tabTrack");
  const buttons = document.querySelectorAll(".tab-btn");

  // Reset all
  buttons.forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

  // Activate selected
  if (evt) evt.currentTarget.classList.add("active");
  else document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add("active");

  document.getElementById(tabId).classList.add("active");

  // Slide effect
  const index = tabs.indexOf(tabId);
  track.style.transform = `translateX(-${index * 100}%)`;
}

// === PAGE INITIALIZATION ===
window.onload = () => {
  if (document.getElementById("shop-products")) displayProducts();
  if (document.getElementById("sproduct")) loadProductPage();
  if (document.getElementById("cartItems")) loadCartPage();

  // Attach single product Add to Cart button
  const cartBtn = document.querySelector(".cart-btn");
  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      const prodId = localStorage.getItem("productId");
      const qty = parseInt(document.getElementById("quantity").value) || 1;
      addToCart(prodId, qty);
    });
  }

  // Tabs setup
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", e => openTab(btn.dataset.tab, e));
  });
  if (document.getElementById("tabTrack")) {
    openTab("desc"); // open first tab by default
  }

  updateCartCount();
};
const tabs = document.querySelectorAll('.tab-btn');
const underline = document.createElement('div');
underline.classList.add('tab-underline');
document.querySelector('.tab-buttons').appendChild(underline);

function moveUnderline(el) {
  underline.style.width = el.offsetWidth + 'px';
  underline.style.left = el.offsetLeft + 'px';
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    moveUnderline(tab);
    
    // Handle content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(c => c.classList.remove('active'));
    document.querySelector(tab.dataset.target).classList.add('active');
  });
});

// Initialize
moveUnderline(document.querySelector('.tab-btn.active'));



