<template>
    <div class="container">
        <div class="row justify-content-center">
            <h3 class="display-2">Products</h3>
            <select class="btn catBtn" v-model="selectedCategory">
                <option value="">All Categories</option>
                <option value="Cooking Appliances">Cooking Appliances</option>
                <option value="Food Preparation Appliances">Food Preparation Appliances</option>
                <option value="Food storage">Food Storage</option>
                <option value="Beverage Appliances">Beverage Appliances</option>
            </select>
             <div class="options row mb-4 my-3 justify-content-center">
                <div class="row">
                    <div class="col-10">
                        <input type="text" v-model="search" class="form-control" placeholder="Search" />
                    </div>
                    <!-- <div class="col-2">
                        <button class="btn" @click="searching">search</button>
                    </div> -->
          </div>
          {{ console.log(this.search) }}
          <div class="my-3">
          <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown"
            aria-expanded="false">
            Sort by price
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" @click="sortByPriceAsc">Ascending</a></li>
            <li><a class="dropdown-item" @click="sortByPriceDesc">Descending</a></li>
          </ul>
          <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown"
            aria-expanded="false">
            Sort by Name
          </button>
        </div>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" @click="sortByNameAsc">Ascending</a></li>
          <li><a class="dropdown-item" @click="sortByNameDesc">Descending</a></li>
        </ul>
        </div>
        </div>
        <div class="row gap-2 justify-content-center my-2" v-if="filterProducts">
            <Card v-for="product in filterProducts || searching" :key="product.prodID">
                <template #cardHeader>
                    <img :src="product.prodUrl" loading="lazy" class="img-fluid" style="height: 200px;" :alt="product.prodName">
                </template>
                <template #cardBody>
                    <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
                    <p class="lead"><span class="amount fw-bold">Amount:</span> R{{ product.amount }}</p>
                    <div class="button-wrapper d-md-flex d-block justify-content-between">
                        <router-link :to="{ name: 'product', params: { id: product.prodID } }">
                            <button class="btn"> 
                                View</button>
                        </router-link>
                    </div>
                </template>
            </Card>
        </div>
        <div v-else>
            <Spinner />
        </div>

    </div>
</template>

<script>

import Spinner from '@/components/Spinner.vue'
import Card from '@/components/Card.vue'

export default{
    data(){
        return{
            selectedCategory:'',
            search:'',


        }
    },
    components:{
        Card,
        Spinner
    },
    computed:{
        filterProducts(){
            let products = this.$store.state.products

            if(this.selectedCategory){
                products = products.filter(product=> product.category === this.selectedCategory)
            }
            
            return products
        },
        sortByPriceAsc(){
            this.$store.state.products.sort(function(a,b){
                return a.amount-b.amount
            })
        },
        sortByPriceDesc(){
            this.$store.state.products.sort(function(a,b){
                return b.amount-a.amount
            })
        },
        sortByNameDesc(){
            return this.$store.state.products.sort(function(a,b){
                return b.prodName.localeCompare(a.prodName)
            })
        },
        searching(){
             let prod = this.$store.state.products.filter( product =>{
                return product.prodName.toLowerCase().includes(this.search)
            })
            return prod
            console.log(prod)
        }
    },
    methods:{
        
    },
    mounted() {
        this.$store.dispatch('fetchProducts'),
        this.products = this.$store.state.products,
        this.filterProducts
        
}
}

</script>

<style scoped>
h3{
    font-weight: bold;
    font-size: 30px;
    color: orange; /* Dark teal blue */
    text-shadow: black; /* Matching shadow for consistency */
}


.btn-group{
    max-width: 300px;
}

.catBtn{
    width: 30%;
}

.btn{
    background-color: #162052;
    color: orange;
}
.amount{
    color: orange;
}
</style>