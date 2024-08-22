<template>
  <section class="home">
    <div class="content">
      <h1> <span>Electronic Products</span>
      <br>
      The Heart <span id="span2">OF YOUR</span> Home
    </h1>
    <p>Discover the perfect blend of innovation and reliability with our cutting-edge electronic appliances.
      <br> Elevate your home with our top-quality products designed to simplify your life and enhance your everyday experiences.
    </p>
    <div class="btn"><router-link class="nav-link" to="/about"><button>About Us</button></router-link></div>
    </div>
    <div class="img">
      <img src="https://kingbrink.github.io/all-images/images/appliances.png" class="" alt="pica" loading="lazy">
    </div>
    <!-- <div class="box">
      <div class="infoma">
        <img src="https://kingbrink.github.io/all-images/images/appliances.png" class="" alt="pica" loading="lazy">
        <h2>Simply the best</h2>
      </div>
    </div> -->
   </section>
   <!-- <section>
    <div class="container">
    <div class="row">
      <h2 class="display-2">Welcome to our store</h2>
    </div>
    <div class="row">
      <h4 class="display-4">Recent products</h4>
    </div>
    <div class="row gap-2 justify-content-center" v-if="recentProducts">

      <Card v-for="product in recentProducts" :key="product.prodID">
        <template #cardHeader>
          {{ product.prodUrl }}
          <img :src="product.prodUrl" loading="lazy" class="img-fluid" :alt="product.prodName">
        </template>
        <template #cardBody>
          <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
          <p class="lead">{{ product.prodDesc }}</p>
          <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>
        </template>
      </Card>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
   </section> -->
</template>

<script>
// import Card from '@/components/Card.vue'
// import Spinner from '@/components/Spinner.vue'
// export default {
//   name: 'HomeView',
//   components: {
//     Card,
//     Spinner
//   },
//   computed: {
//     recentProducts() {
//       return this.$store.state.recentProducts
//     }
//   },
//   mounted() {
//     this.$store.dispatch('recentProducts')
//   }
// }
</script>

<style>
.home{
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    background-color: #a9a9a92b;
    z-index: 0;
}
.home .img{
    flex: 1 1 300px;
}
.home .img img{
    margin-top: 30px;
    width: 100%;
}

.home .content{
    flex: 1 1 400px;
    margin-top: 20px;
}
.content h1{
    color: #162052;
    font-weight: bold;
    margin-left: 23px;
    margin-right: 23px;
    font-size: 55px;
    text-shadow: -1px 1px 1px black;
}
.content h1 span{
    color: #162052;
    text-shadow: 1px 1px 1px black;
}
#span2{
    color: orange;
}
.content p{
    margin-left: 23px;
    margin-right: 23px;
}
.btn{
    margin-left: 13px;
}
.btn button{
    width: 150px;
    height: 32px;
    letter-spacing: 3px;
    background-color: orange;
    color: white;
    border-radius: 5px;
    border: none;
    transition: 0.5s ease;
    cursor: pointer;
}
.btn button:hover{
    background-color: #162052;
    color: orange;
    border: none;
}
@media screen and (max-width:1200px){
    .home{
        height: 90vh;
    }
}
@media screen and (max-width:799px){
    .home{
        height: 140vh;
    }
}
@media screen and (max-width:550px){
    .home{
        height: 110vh;
    }
}
@media screen and (max-width:420px){
 .content h1{
    font-size: 45px;
 }
}
@media screen and (max-width:320px){
 .content h1{
    font-size: 36px;
 }
}
</style>