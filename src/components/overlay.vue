<script setup>
  import {defineProps} from 'vue';
  import { addToCart } from '../data/cart';

  const {productClicked} = defineProps(['productClicked']);
</script>

<template>
  <div class="wrapper">
    <div class="outer">
      <div class="content animated fadeInLeft">
        <span class="bg animated fadeInDown">EXCLUSIVE</span>
        <h3> {{ productClicked.name }}</h3>
        <p>Shadow your real allegiance to New York's Pirate radio with this cool cap featuring the Graphic Know Wave logo.</p>
        
        <div class="button">
          <a href="#">${{ (productClicked.priceCents/100).toFixed(2) }}</a><a @click="addToCart(productClicked.id)" class="cart-btn" href="#"><i class="cart-icon ion-bag"></i>ADD TO CART</a>
        </div>
        
      </div>
      <!-- <div class="img">
        <img class="img-productClicked" :src="productClicked.image" width="100px" height="100px">
      </div> -->
      <img class="img-productClicked" :src="productClicked.image" width="100px" height="100px">
    </div>
  </div>
</template>

<style scoped>
* {
	box-sizing: border-box;
}

.wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	font-family:  Roboto, Arial;
	width: 100%;
	height: 100%;
}

.outer {
	position: relative;
	background: #fff;
	height: 450px;
	width: 650px;
	overflow: hidden;
	display: flex;
	flex-direction: row;
	align-items: center;
  border-radius: 5px;
  /* justify-content: space-between; */
}


.img-productClicked{
  position: absolute;
  right: 80px;

  width: 220px;
  height: 220px;
  object-fit: scale-down;

}


.content {
	animation-delay: 0.3s;
	position: absolute;
	left: 20px;
	z-index: 3;
	margin-top: 20px;
	
}

h3 {
	color: #111;
  width: 300px;
}

p {
	width: 280px;
	font-size: 13px;
	line-height: 1.4;
	color: #aaa;
	margin: 20px 0;
	
}

.bg {
	display: inline-block;
	color: #fff;
	background: cornflowerblue;
	padding: 5px 10px;
	border-radius: 50px;
	font-size: .7em;
}
.button {
	width: fit-content;
	height: fit-content;
	margin-top: 10px;
	
	
	
}

.button a {
	display: inline-block;
	overflow: hidden;
	position: relative;
	font-size: 13px;
	color: #111;
	text-decoration: none;
	padding: 15px 20px;
	border: 1px solid #aaa;
	font-weight: bold;
	
	
}

.button a:after{
	content: "";
	position: absolute;
	top: 0;
	right: -10px;
	width: 0%;
	background: rgb(255, 216, 20);
	height: 100%;
	z-index: -1;
	transition: width 0.3s ease-in-out;
	transform: skew(-25deg);
	transform-origin: right;
}

.button a:hover:after {
	width: 150%;
	left: -10px;
	transform-origin: left;
	
}

.button a:hover {
	color: #fff;
	transition: all 0.5s ease;
}


.button a:nth-of-type(1) {
	border-radius: 50px 0 0 50px;
	border-right: none;
}

.button a:nth-of-type(2) {
	border-radius: 0px 50px 50px 0;
}

.cart-icon {
	padding-right: 8px;
	
}

.footer {
	position: absolute;
	bottom: 0;
	right: 0;
}

@media (max-width: 720px){
	.outer {
		height: 420px;
		width: 600px;
	}
	.img-productClicked{
		right: 55px;
	}
}
@media (max-width: 630px){
	.outer {
		height: 350px;
		width: 550px;
	}
	.img-productClicked{
		right: 40px;

		width: 190px;
		height: 190px;

	}
	h3{
		font-size: 27px;
	}
	.button a{
		padding: 10px 15px;
		font-size: 12px;
	}
}
@media (max-width: 565px){
	.outer {
		height: 320px;
		width: 520px;
	}
	.img-productClicked{
		right: 40px;

		width: 170px;
		height: 170px;

	}
	h3{
		font-size: 24px;
	}
	.button a{
		padding: 8px 13px;
		font-size: 11px;
	}
}
@media (max-width: 525px){
	.outer {
		height: 290px;
		width: 490px;
	}
	.img-productClicked{
		right: 40px;

		width: 150px;
		height: 150px;

	}
	h3{
		font-size: 21px;
	}
	.button a{
		padding: 8px 13px;
		font-size: 11px;
	}
}
@media (max-width: 495px){
	.outer {
		height: 270px;
		width: 470px;
	}
	.img-productClicked{
		right: 40px;

		width: 150px;
		height: 150px;

	}
	h3{
		font-size: 21px;
	}
	.button a{
		padding: 8px 13px;
		font-size: 11px;
	}
}
@media(max-width: 470px){
	.outer{
		height: 480px;
		width: 380px;
		flex-direction: column;
		
	}
	.img-productClicked{
		bottom: 5px;
		right: auto;
	}
}
@media(max-width: 460px){
	.outer{
		height: 420px;
		width: 340px;
		flex-direction: column;
	}
	.img-productClicked{
		right: 25px;
		right: auto;

		width: 120px;
		height: 120px;

	}

}





</style>