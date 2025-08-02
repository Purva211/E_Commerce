# 👗 Myntra Clone - Fashion E-Commerce
(./screenshot.png)
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="myntra.css" />
    <link rel="icon" type="image/jpg" href="logo.jpg" />
    <title>Myntra Online Shopping</title>

    <style>
      body {
        background-color: #f6f6f6;
        color: #282c3f;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
        padding: 0;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      main {
        flex: 1;
      }

      .profile-dropdown {
        position: relative;
        cursor: pointer;
      }

      .dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        right: 0;
        background-color: #ffffff;
        width: 240px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 15px;
        z-index: 100;
      }

      .dropdown-menu p {
        font-size: 14px;
        margin-bottom: 10px;
      }

      .dropdown-menu a {
        display: block;
        padding: 6px 0;
        text-decoration: none;
        color: #282c3f;
        font-size: 14px;
        transition: all 0.2s;
      }

      .dropdown-menu a:hover {
        color: #ff3f6c;
      }

      .dropdown-menu hr {
        border: none;
        border-top: 1px solid #eee;
        margin: 10px 0;
      }

      .login-btn {
        width: 100%;
        padding: 10px;
        background-color: white;
        color: #ff3f6c;
        border: 1px solid #ff3f6c;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 10px;
        border-radius: 4px;
      }

      .new-tag {
        background-color: #ff3f6c;
        color: white;
        font-size: 10px;
        padding: 2px 4px;
        border-radius: 4px;
        margin-left: 5px;
      }

      .profile {
        position: relative;
        cursor: pointer;
      }

      .profile .dropdown {
        display: none;
        position: absolute;
        top: 60px;
        right: -60px;
        width: 250px;
        background-color: white;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        padding: 15px;
        border-radius: 6px;
        z-index: 1000;
      }

      .profile:hover .dropdown {
        display: block;
      }

      .dropdown p {
        font-size: 13px;
        margin-bottom: 10px;
        color: #282c3f;
      }

      .dropdown hr {
        margin: 10px 0;
        border: 0;
        border-top: 1px solid #eee;
      }

      .dropdown a {
        display: block;
        font-size: 13px;
        color: #282c3f;
        text-decoration: none;
        margin-bottom: 8px;
        transition: 0.3s;
      }

      .dropdown a:hover {
        color: #ff3f6c;
      }

      .new {
        background-color: #ff3f6c;
        color: white;
        font-size: 9px;
        padding: 1px 4px;
        border-radius: 4px;
        margin-left: 5px;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <header>
        <div class="navbar">
          <div class="nav-logo">
            <div id="logo"></div>
          </div>

          <div class="icons">
            <a href="#">MEN</a>
            <a href="#">WOMEN</a>
            <a href="#">KIDS</a>
            <a href="#">HOME & LIVING</a>
            <a href="#">BEAUTY</a>
            <a href="#">STUDIO <sup>NEW</sup></a>
          </div>

          <div class="search">
            <div class="search-button">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input
                class="search-bar"
                placeholder="Search for products, brands and more"
              />
            </div>
          </div>

          <div class="action profile">
            <i class="fa-regular fa-user"></i>
            <a href="#">Profile</a>
            <div class="dropdown">
              <p><strong>Welcome</strong><br />
                To access account and manage orders</p>
              <button class="login-btn">LOGIN / SIGNUP</button>
              <hr />
              <a href="#">Orders</a>
              <a href="#">Wishlist</a>
              <a href="#">Gift Cards</a>
              <a href="#">Contact Us</a>
              <a href="#">Myntra Insider <span class="new">NEW</span></a>
              <hr />
              <a href="#">Myntra Credit</a>
              <a href="#">Coupons</a>
              <a href="#">Saved Cards</a>
              <a href="#">Saved VPA</a>
              <a href="#">Saved Addresses</a>
            </div>
          </div>

          <div class="action">
            <i class="fa-regular fa-heart"></i>
            <span class="text">Wishlist</span>
          </div>

          <div class="action">
            <i class="fa-solid fa-bag-shopping"></i>
            <span class="text">Bag</span>
            <span class="count">0</span>
          </div>
        </div>
      </header>

      <main>
        <div style="padding: 40px; text-align: center;">
          <h1>Welcome to Myntra</h1>
          <p>This is a sample content section. Replace with your own.</p>
        </div>
      </main>

      <footer>
        <div class="footer_container">
          <div class="footer_column">
            <h3>ONLINE SHOPPING</h3>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>

          <div class="footer_column">
            <h3>ONLINE SHOPPING</h3>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>

          <div class="footer_column">
            <h3>ONLINE SHOPPING</h3>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>
        </div>
        <hr />
        <div class="copyright">
          © 2024 www.myntra.com. All rights reserved.
        </div>
      </footer>
    </div>

    <script src="cart.js"></script>
  </body>
</html>



