<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn modalButton" data-bs-toggle="modal" data-bs-target="#updateProductModal">
      Update Products
    </button>
  
    <!-- Modal -->
    <div class="modal fade" id="updateProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Update Products</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form >
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product ID" v-model ="payload.prodID">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product Name" v-model="payload.prodName">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product Quantity" v-model="payload.quantity">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product Amount" v-model="payload.amount">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product Category" v-model="payload.category">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product URL" v-model="payload.prodUrl">
              </div>
              <div class="mb-3">
                <input type="text" class="form-control w-50 mx-auto" placeholder="Product Desc" v-model="payload.prodDesc">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-success" data-bs-dismiss="modal" @click.prevent="updateProduct()">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UpdateProduct',
    props: ['product'],
    data() {
      return {
        payload: {
            prodID: null,
            prodName: undefined,
            quantity: undefined,
            amount: undefined,
            category: undefined,
            prodUrl: undefined,
            prodDesc: undefined,
            prodID: undefined
        }
      }
    },
    methods: {
       updateProduct() {

        
        console.log(this.payload);
        
        this.$store.dispatch('updateProduct', this.payload);

      }
    }
  }
  </script>
  
  <style scoped>
/* Button Styles */
.modalButton {
    background-color: #003366; /* Dark Blue for the modal trigger button */
    color: #ffffff; /* White text for contrast */
    border: none;
    border-radius: 5px;
    font-weight: bold;
    text-transform: uppercase;
}

.modalButton:hover {
    opacity: 0.8; /* Slight opacity change on hover */
}

/* Modal Styles */
.modal-content {
    border-radius: 10px; /* Rounded corners for the modal */
    background-color: #ffffff; /* White background for the modal */
    border: 1px solid #003366; /* Dark Blue border for consistency */
}

.modal-header {
    background-color: #003366; /* Dark Blue header background */
    color: #ffffff; /* White text in the header */
    border-bottom: 1px solid #003366; /* Dark Blue bottom border */
}

.modal-header .btn-close {
    filter: invert(100%); /* Lighten the close button */
}

.modal-body {
    background-color: #f8f9fa; /* Light grey background for the modal body */
}

.form-control {
    border: 1px solid #003366; /* Dark Blue border for form controls */
    border-radius: 5px; /* Rounded corners for form controls */
    box-shadow: none; /* Remove default shadow */
}

.form-control::placeholder {
    color: #003366; /* Dark Blue placeholder text */
}

/* Button Styles in Modal */
.modal-footer {
    background-color: #f8f9fa; /* Light grey background for footer */
    border-top: 1px solid #003366; /* Dark Blue border at the top */
}

.btn-secondary {
    background-color: #b2ebf2; /* Light Blue for secondary button */
    border: none;
    color: #003366; /* Dark Blue text for contrast */
    font-weight: bold;
}

.btn-secondary:hover {
    background-color: #80deea; /* Slightly darker light blue on hover */
}

.btn-success {
    background-color: #fbc02d; /* Yellow for the success button */
    border: none;
    color: #ffffff; /* White text for contrast */
    font-weight: bold;
}

.btn-success:hover {
    background-color: #f9a825; /* Slightly darker yellow on hover */
}

  </style>