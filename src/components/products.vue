<script setup>
  import {ref, watch} from 'vue';
  import p from '../data/products.json';
  import {cart} from '../data/cart.js'
  import { totalQuantity } from '../data/cart.js';
  import { saveToLocal } from '../data/cart.js';
  import overlay from './overlay.vue';
  import {addToCart} from '../data/cart.js';

  const products = ref(p);

  const searchProduct = ref('');

  const productClicked = ref('');


  // console.log(product)

  watch(searchProduct, () => {
    products.value = p.filter((product) => product.name.toLowerCase().includes(searchProduct.value.toLowerCase()));
  });



  function displayText(id){
    document.querySelector(`.js-added-to-cart-button-${id}`).classList.add('opacity-1');
    setTimeout(() => {
      document.querySelector(`.js-added-to-cart-button-${id}`).classList.remove('opacity-1');
    }, 2000);
  }

  // console.log(cart);





  function on(id) {
    console.log(id)
    productClicked.value = id;
    document.getElementById("overlay").style.display = "block";

    products.value.forEach((product) => {
      if(product.id === id){
        productClicked.value = product;
      }
    });

  }

  function off() {
    document.getElementById("overlay").style.display = "none";
  }

</script>

<template>
  <div id="overlay" @click="off()">
    <div id="text">
      <overlay :productClicked="productClicked" />
    </div>
  </div>


  <section class="section-main">
    <div class="amazon-header">
      <div class="amazon-header-left-section">
        <a href="/" class="header-link">
          <img title="img" class="amazon-logo"
            src="../assets/images/amazon-logo-white.png">
          <img title="img" class="amazon-mobile-logo"
            src="../assets/images/amazon-mobile-logo-white.png">
        </a>
      </div>

      <div class="amazon-header-middle-section">
        <input v-model="searchProduct" class="search-bar" type="text" placeholder="Search">

        <button class="search-button">
          <img title="img" class="search-icon" src="../assets/images/icons/search-icon.png">
        </button>
      </div>

      <div class="amazon-header-right-section">
        <a class="orders-link header-link" href="orders.html">
          <span class="returns-text">Returns</span>
          <span class="orders-text">& Orders</span>
        </a>


        <a class="cart-link header-link" href="/checkout">
          <img title="img" class="cart-icon" src="../assets/images/icons/cart-icon.png">
          <div class="cart-quantity js-cart-quantity">{{ totalQuantity() }}</div>
          <div class="cart-text">Cart</div>
        </a>

        
      </div>
    </div>
    
   <div class="main">
      <div class="products-grid js-products-grid">

        <div v-for="product in products" :key="product.id" class="product-container">

          <div @click="on(product.id)" class="product-image-container" :product="product">
            <img title="img" class="product-image"
              :src="product.image">
          </div>

          <div class="product-name limit-text-to-2-lines">
            {{ product.name }}
          </div>

          <div class="product-rating-container">
            <img title="img" class="product-rating-stars"
            :src="'../src/assets/images/ratings/rating-' + product.rating.start * 10 + '.png'">
            <div class="product-rating-count link-primary">
              {{ product.rating.count }}
            </div>
          </div>

          <div class="product-price">
            ${{ (product.priceCents / 100).toFixed(2) }}
          </div>

          <div class="product-quantity-container">
            <select title="select-tag" :class="'js-select-tag-' + product.id">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart" :class="'js-added-to-cart-button-' + product.id">
            <img title="img" src="../assets/images/icons/checkmark.png">
            Added
          </div>

          <button @click="displayText(product.id); addToCart(product.id)" class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>


      </div>
  </div>
  </section>
</template>

<style scoped>


#overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}

#text{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 30px;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  /* width: 50%;
  height: 50%;
  background-color: black;
  overflow: hidden; */
}




  /* General */
  .section-main {
    font-family: Roboto, Arial;
    color: rgb(33, 33, 33);
    /* The <body> element has a default margin of 8px
      on all sides. This removes the default margins. */
    margin: 0;
  }

  /* <p> elements have a default margin on the top
    and bottom. This removes the default margins. */
  p {
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  select {
    cursor: pointer;
  }

  input, select, button {
    font-family: Roboto, Arial;
  }

  .button-primary {
    color: rgb(33, 33, 33);
    background-color: rgb(255, 216, 20);
    border: 1px solid rgb(252, 210, 0);
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(213, 217, 217, 0.5);
  }

  .button-primary:hover {
    background-color: rgb(247, 202, 0);
    border: 1px solid rgb(242, 194, 0);
  }

  .button-primary:active {
    background: rgb(255, 216, 20);
    border-color: rgb(252, 210, 0);
    box-shadow: none;
  }

  .button-secondary {
    color: rgb(33, 33, 33);
    background: white;
    border: 1px solid rgb(213, 217, 217);
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(213, 217, 217, 0.5);
  }

  .button-secondary:hover {
    background-color: rgb(247, 250, 250);
  }

  .button-secondary:active {
    background-color: rgb(237, 253, 255);
    box-shadow: none;
  }

  /* These styles will limit text to 2 lines. Anything
    beyond 2 lines will be replaced with "..."
    You can find this code by using an A.I. tool or by
    searching in Google.
    https://css-tricks.com/almanac/properties/l/line-clamp/ */
  .limit-text-to-2-lines {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .link-primary {
    color: rgb(1, 124, 182);
    cursor: pointer;
  }

  .link-primary:hover {
    color: rgb(196, 80, 0);
  }

  /* Styles for dropdown selectors. */
  select {
    color: rgb(33, 33, 33);
    background-color: rgb(240, 240, 240);
    border: 1px solid rgb(213, 217, 217);
    border-radius: 8px;
    padding: 3px 5px;
    font-size: 15px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(213, 217, 217, 0.5);
  }

  select:focus,
  input:focus {
    outline: 2px solid rgb(255, 153, 0);
  }

  /* Header */
  .amazon-header {
  background-color: rgb(19, 25, 33);
  color: white;
  padding-left: 15px;
  padding-right: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
}

  .amazon-header-left-section {
    width: 180px;
  }

  @media (max-width: 800px) {
    .amazon-header-left-section {
      width: unset;
    }
  }

  .header-link {
    display: inline-block;
    padding: 6px;
    border-radius: 2px;
    cursor: pointer;
    text-decoration: none;
    border: 1px solid rgba(0, 0, 0, 0);
  }

  .header-link:hover {
    border: 1px solid white;
  }

  .amazon-logo {
    width: 100px;
    margin-top: 5px;
  }

  .amazon-mobile-logo {
    display: none;
  }

  @media (max-width: 575px) {
    .amazon-logo {
      display: none;
    }

    .amazon-mobile-logo {
      display: block;
      height: 35px;
      margin-top: 5px;
    }
  }

  .amazon-header-middle-section {
    flex: 1;
    max-width: 850px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
  }

  .search-bar {
    flex: 1;
    width: 0;
    font-size: 16px;
    height: 40px;
    padding-left: 15px;
    border: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .search-button {
    background-color: rgb(254, 189, 105);
    border: none;
    width: 45px;
    height: 40px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    flex-shrink: 0;
  }

  .search-icon {
    height: 22px;
    margin-left: 2px;
    margin-top: 3px;
  }

  .amazon-header-right-section {
    width: 180px;
    flex-shrink: 0;
    display: flex;
    justify-content: end;
  }

  .orders-link {
    color: white;
  }

  .returns-text {
    display: block;
    font-size: 13px;
  }

  .orders-text {
    display: block;
    font-size: 15px;
    font-weight: 700;
  }

  .cart-link {
    color: white;
    display: flex;
    align-items: center;
    position: relative;
  }

  .cart-icon {
    width: 50px;
  }

  .cart-text {
    margin-top: 12px;
    font-size: 15px;
    font-weight: 700;
  }

  .cart-quantity {
    color: rgb(240, 136, 4);
    font-size: 16px;
    font-weight: 700;

    position: absolute;
    top: 4px;
    left: 22px;
    
    width: 26px;
    text-align: center;
  }

  /* Amazon */
  .main {
    margin-top: 60px;
  }

  .products-grid {
    display: grid;

    /* - In CSS Grid, 1fr means a column will take up the
        remaining space in the grid.
      - If we write 1fr 1fr ... 1fr; 8 times, this will
        divide the grid into 8 columns, each taking up an
        equal amount of the space.
      - repeat(8, 1fr); is a shortcut for repeating "1fr"
        8 times (instead of typing out "1fr" 8 times).
        repeat(...) is a special property that works with
        display: grid; */
    grid-template-columns: repeat(8, 1fr);
  }

  /* @media is used to create responsive design (making the
    website look good on any screen size). This @media
    means when the screen width is 2000px or less, we
    will divide the grid into 7 columns instead of 8. */
  @media (max-width: 2000px) {
    .products-grid {
      grid-template-columns: repeat(7, 1fr);
    }
  }

  /* This @media means when the screen width is 1600px or
    less, we will divide the grid into 6 columns. */
  @media (max-width: 1600px) {
    .products-grid {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  @media (max-width: 1300px) {
    .products-grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media (max-width: 1000px) {
    .products-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 800px) {
    .products-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 575px) {
    .products-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 450px) {
    .products-grid {
      grid-template-columns: 1fr;
    }
  }

  .product-container {
    padding-top: 40px;
    padding-bottom: 25px;
    padding-left: 25px;
    padding-right: 25px;

    border-right: 1px solid rgb(231, 231, 231);
    border-bottom: 1px solid rgb(231, 231, 231);

    display: flex;
    flex-direction: column;
  }

  .product-image-container {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 180px;
    margin-bottom: 20px;
  }

  .product-image {
    /* Images will overflow their container by default. To
      prevent this, we set max-width and max-height to 100%
      so they stay inside their container. */
    max-width: 100%;
    max-height: 100%;
  }

  .product-name {
    height: 50px;
    margin-bottom: 5px;
  }

  .product-rating-container {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .product-rating-stars {
    width: 100px;
    margin-right: 6px;
  }

  .product-rating-count {
    color: rgb(1, 124, 182);
    cursor: pointer;
    margin-top: 3px;
  }

  .product-price {
    font-weight: 700;
    margin-bottom: 10px;
  }

  .product-quantity-container {
    margin-bottom: 17px;
  }

  .product-spacer {
    flex: 1;
  }

  .added-to-cart {
    color: rgb(6, 125, 98);
    font-size: 16px;

    display: flex;
    align-items: center;
    margin-bottom: 8px;

    /* At first, the "Added to cart" message will
      be invisible. Use JavaScript to change the
      opacity and make it visible. */
    opacity: 0;
  }

  .added-to-cart img {
    height: 20px;
    margin-right: 5px;
  }

  .add-to-cart-button {
    width: 100%;
    padding: 8px;
    border-radius: 50px;
  }

  .opacity-1{
    opacity: 1;
  }










</style>