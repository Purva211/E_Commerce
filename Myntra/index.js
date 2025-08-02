const items = [
  {
    id: "001",
    item_image: "lipstickp1.jpg",
    rating: {
      stars: 4.4,
      reviews: 1.3,
    },
    company: "M.A.C",
    item_name: "Powder Kiss Lipstick 3g-Velvet",
    current_price: 2250,
    orginal: 2550,
    discount: 20,
  },
  {
    id: "002",
    item_image: "dress.png",
    rating: {
      stars: 4.1,
      reviews: 1,
    },
    company: "DressBerry",
    item_name: "Floral Printed Maxi A-Line Dress",
    current_price: 1149,
    orginal: 3830,
    discount: 70,
  },
  {
    id: "003",
    item_image: "sweatshirt.png",
    rating: {
      stars: 4.1,
      reviews: 14.5,
    },
    company: "Roadster",
    item_name: "Men Solid Hooded Sweatshirt",
    current_price: 1158,
    orginal: 1999,
    discount: 20,
  },
  {
    id: "004",
    item_image: "kids.jpg",
    rating: {
      stars: 4.8,
      reviews: 1.1,
    },
    company: "Marks & Spencer",
    item_name: "Girls Checked Square Neck Top",
    current_price: 999,
    orginal: 1999,
    discount: 50,
  },
  {
    id: "005",
    item_image: "saree.png",
    rating: {
      stars: 4.1,
      reviews: 1.5,
    },
    company: "Mitera",
    item_name: "Pink & Grey Silk Bhagalpuri Saree",
    current_price: 899,
    orginal: 2999,
    discount: 70,
  },
  {
    id: "006",
    item_image: "denim.png",
    rating: {
      stars: 4.4,
      reviews: 1.1,
    },
    company: "SHOWOFF",
    item_name: "Slim-Fit Cotton Denim Dungarees",
    current_price: 1583,
    orginal: 4200,
    discount: 63,
  },
  {
    id: "007",
    item_image: "ethnic.png",
    rating: {
      stars: 4,
      reviews: 1,
    },
    company: "Inddus",
    item_name: "Dusty Pink Semi-Stitched Lehenga ",
    current_price: 2750,
    orginal: 6549,
    discount: 58,
  },
  {
    id: "008",
    item_image: "heels.png",
    rating: {
      stars: 3.8,
      reviews: 1.9,
    },
    company: "Shoetopia",
    item_name: "Block Heels With Ankle Loop",
    current_price: 799,
    orginal: 1999,
    discount: 60,
  },
];

let bagitem;

window.onload = function () {
  let bagitemstr = localStorage.getItem("bagitem");
  bagitem = bagitemstr ? JSON.parse(bagitemstr) : [];
  displaytohomepag();
  displaycount();
};

// add to bag
function addtobag(itemid) {
  bagitem.push(itemid);
  localStorage.setItem("bagitem", JSON.stringify(bagitem));
  displaycount();
}

// display count on bag
function displaycount() {
  let count = document.querySelector(".count");
  if (bagitem.length > 0) {
    count.style.visibility = "visible";
    count.innerText = bagitem.length;
  } else {
    count.style.visibility = "hidden";
  }
}

function displaytohomepag() {
  let itemsinfo = document.querySelector(".list-items");

  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += `<div class="item">
    <img class="item-image" src="${item.item_image}">
    <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.reviews}k
    </div>
    <div class="company">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
      <span class="current-price">Rs. ${item.current_price}</span>
      <span class="orginal">Rs. ${item.orginal}</span>
      <span class="discount">(${item.discount}% OFF)</span></div>
    
    <button class="add-items" onclick="addtobag('${item.id}')">

        <i class="fa-solid fa-bag-shopping"></i>
        Add To Bag</button>
        </div>
    </div>`;
  });

  itemsinfo.innerHTML = innerHTML;
}

function opencart() {
  window.location.href = "cart.html";
}

function renderCartItems() {
  let containerElement = document.querySelector(".bag-items-container");
  containerElement.innerHTML = "";

  bagitem.forEach((itemId) => {
    let item = items.find((product) => product.id === itemId);
    if (!item) return;

    containerElement.innerHTML += `
      <div class="cart-card">
        <div class="left-section">
          <img src="${item.item_image}" alt="${
      item.item_name
    }" class="product-image">
        </div>

        <div class="middle-section">
          <h4 class="brand">${item.company}</h4>
          <p class="item-name">${item.item_name}</p>
          <p class="seller">Sold by: SAMRIDHI DESIGN CREATION</p>

          <div class="selectors">
            <label>
              Size: 
              <select>
                <option>Onesize</option>
              </select>
            </label>

            <label>
              Qty:
              <select>
                <option>1</option>
              </select>
            </label>
          </div>

          <div class="price">
            <span class="current-price">₹${item.current_price}</span>
          
            <span class="original-price">₹${item.orginal}</span>
<span class="discount">₹${item.orginal - item.current_price} OFF</span>
          </div>

          <p class="return-policy">7 days return available</p>
          <p class="delivery">✔ Delivery by <strong>6 Aug 2025</strong></p>
        </div>

        <button class="remove-btn">×</button>
      </div>
    `;
  });
}

// onload(); // This line is unnecessary and has been removed.

// login page


    const checkbox = document.getElementById('agree');
    const button = document.getElementById('continueBtn');

    checkbox.addEventListener('change', function () {
      if (this.checked) {
        button.disabled = false;
        button.classList.add('active');
      } else {
        button.disabled = true;
        button.classList.remove('active');
      }
    });

    button.addEventListener('click', function () {
      const mobile = document.getElementById('mobile').value;
      if (mobile.length !== 10 || isNaN(mobile)) {
        alert('Please enter a valid 10-digit mobile number.');
      } else {
        alert(`OTP sent to +91-${mobile}`);
      }
    });

