<template>
    <div class="container">
        <div class="row">
            <h3 class="display-2">Product Details</h3>
        </div>
        <div class="row justify-content-center" v-if="product">
            <Card>
                <template #cardHeader>
                    <img :src="product.prodUrl" loading="lazy" class="img-fluid" style="width: 200px;" :alt="product.prodName">
                </template>
                <template #cardBody>
                    <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
                    <p class="lead">
                        {{ product.prodDesc }}
                    </p>
                    <p class="lead"><span class="lead1 fw-bold">Amount</span>: R{{ product.amount }}</p>
                </template>
            </Card>
        </div>
        <div v-if="!product"> 
            <Spinner/>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const product = computed(
    () => store.state.product
)
onMounted(() => {
    store.dispatch('fetchProduct', route.params.id)
}) 
</script>

<style scoped>
h3{
    font-weight: bold;
    font-size: 30px;
    color: orange; /* Dark teal blue */
    text-shadow: black; /* Matching shadow for consistency */
}
.lead1{
    color: #162052;
}

</style>