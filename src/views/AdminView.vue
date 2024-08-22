<template>
  <div>
    <h3>Admin</h3>
    <!-- USERS TABLE -->
    <br><h2>Users Table</h2><br>
    <addUser/>
    <div class="container table-responsive">
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Age</th>
            <th>Gender</th>
            <th>User Role</th>
            <th>Email Address</th>
            <th>User Password</th>
            <th>User Profile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="users">
          <tr v-for="user in users" :key="user.userID">
            <td :data-label="'User ID'">{{ user.userID }}</td>
            <td :data-label="'First Name'">{{ user.firstName }}</td>
            <td :data-label="'Last Name'">{{ user.lastName }}</td>
            <td :data-label="'User Age'">{{ user.userAge }}</td>
            <td :data-label="'Gender'">{{ user.Gender }}</td>
            <td :data-label="'User Role'">{{ user.userRole }}</td>
            <td :data-label="'Email Address'">{{ user.emailAdd }}</td>
            <td :data-label="'User Password'">{{ user.Pass }}</td>
            <td :data-label="'User Profile'"><img :src="user.userProfile" alt="" style="width: 35px;" loading="lazy"></td>
            <td class="d-flex justify-content-between" :data-label="'Action'">
              <updateUser :user="user" />
              <button class="btn btn-success deleteButton" @click.prevent="deleteUser(user.userID)">Del</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- PRODUCTS TABLE -->
    <br><h2>Products Table</h2><br>
    <addProduct/>
    <div class="container table-responsive">
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Product URL</th>
            <th>Product Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="products">
          <tr v-for="product in products" :key="product.prodID">
            <td :data-label="'Product ID'">{{ product.prodID }}</td>
            <td :data-label="'Product Name'">{{ product.prodName }}</td>
            <td :data-label="'Quantity'">{{ product.quantity }}</td>
            <td :data-label="'Amount'">R {{ product.amount }}</td>
            <td :data-label="'Category'">{{ product.category }}</td>
            <td :data-label="'Product URL'"><img :src="product.prodUrl" loading="lazy" class="img-fluid" style="width: 35px;" :alt="product.prodName"></td>
            <td :data-label="'Product Description'">{{ product.prodDesc }}</td>
            <td class="d-flex justify-content-between" :data-label="'Action'">
              <updateProduct :product="product" />
              <button class="btn btn-success deleteButton" @click="event => deleteProduct(product.prodID)">Del</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>



<script>
import updateUser from '@/components/UpdateUserModal.vue';
import updateProduct from '@/components/UpdateProduct.vue';
import addProduct from '@/components/AddProduct.vue';
import addUser from '@/components/AddUser.vue';

  export default {
    components: {
      updateUser,
      updateProduct,
      addProduct,
      addUser,
    },
    computed: {
      products(){
        return this.$store.state.products
        
    },
      users(){
        return this.$store.state.users
      }
    },
    mounted() {
    this.$store.dispatch('fetchProducts'),
    this.$store.dispatch('fetchUsers')
}, 
methods: {
  deleteUser(userID) {
    this.$store.dispatch('deleteUser', userID);
  },
  deleteProduct(prodID) {
    this.$store.dispatch('deleteProduct', prodID);
  },
  updateUser(user) {
    let editUser = {userID: user.userID, firstName: user.firstName, lastName: user.lastName, userAge: user.userAge, Gender: user.Gender, userRole: user.userRole, emailAdd: user.emailAdd, userPass: user.userPass, userProfile: user.userProfile}
  this.$store.dispatch('updateUser', editUser)
  },
  updateProduct(payload) {
    //let editProduct = {productID: product.prodID, productName: product.prodName, quantity: product.quantity, amount: product.amount, Category: product.Category, prodURL: product.prodURL, prodDesc: product.prodDesc}
  this.$store.dispatch('updateProduct', payload)
}}
}
</script>

<style scoped>
h3{
    font-weight: bold;
    font-size: 30px;
    color: orange; /* Dark teal blue */
    text-shadow: black; /* Matching shadow for consistency */
}

/* td {
padding: 10px;
}
@media(max-width:351px){
td {
  padding: 20px;
}
} */
/* .btn {
border-radius: 30px;
color: #fff;
background-color: #4E96D3;
font-size: 12px;
border: none;
cursor: pointer;
transition: .4s;
}
.btn:hover{
background-color: #1d3557;
color: #fff;
transition: 1s;
} */
h2 {
    color: #003366; /* Dark Blue for headings */
    font-weight: bold;
    border-bottom: 2px solid #003366; /* Underline with matching color */
    padding-bottom: 10px;
    margin-bottom: 20px;
}

/* Table Styles */
.table {
    background-color: #ffffff; /* White background for the table */
    border-radius: 8px; /* Rounded corners for the table */
    overflow: hidden;
}

.table-dark {
    background-color: #003366; /* Dark Blue for table headers */
    color: #ffffff; /* White text for contrast */
}

/* Button Styles */
.btn {
    border-radius: 5px;
    font-weight: bold;
    text-transform: uppercase;
}

.btn-success {
    background-color: #28a745; /* Green for success buttons */
    border: none;
    color: #ffffff;
}

.deleteButton {
    background-color: #dc3545; /* Red for delete buttons */
    border: none;
    color: #ffffff;
}

.btn-success:hover, .deleteButton:hover {
    opacity: 0.9; /* Slightly reduce opacity on hover */
}

/* Image Styles */
.table img {
    border-radius: 5px; /* Rounded corners for images */
}

/* Responsive Container */
/* .container {
    padding: 20px;
    background-color: #f8f9fa; 
    border-radius: 10px;
} */
/* Base styles for table */
.table {
  width: 100%;
  border-collapse: collapse;
}

/* Make table responsive with horizontal scroll */
.table-responsive {
  overflow-x: auto;
}

/* Adjust font sizes based on viewport width */
h2 {
  font-size: 2vw; /* Font size for headings */
}

/* General font size adjustments for table content */
.table th, .table td {
  font-size: 1.2vw; /* Adjust as needed */
}

/* Responsive design adjustments */
@media (max-width: 1200px) {
  .table th, .table td {
    font-size: 1.1vw; /* Slightly smaller font size */
  }
}

@media (max-width: 992px) {
  .table th, .table td {
    font-size: 1.3vw; /* Increase font size for medium screens */
  }
}

@media (max-width: 768px) {
  .table th, .table td {
    font-size: 1.6vw; /* Larger font size for tablets */
  }
}

@media (max-width: 576px) {
  .table th, .table td {
    font-size: 1.8vw; /* Larger font size for small screens */
  }
}

/* Stack table rows for very small screens */
@media (max-width: 400px) {
  .table thead {
    display: none;
  }

  .table, .table tbody, .table tr, .table td {
    display: block;
    width: 100%;
  }

  .table tr {
    margin-bottom: 1em;
    border: 1px solid #ddd;
  }

  .table td {
    text-align: right;
    position: relative;
    padding-left: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 45%;
    padding-left: 10px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

/* Adjust button sizes for smaller screens */
.table .btn {
  font-size: 0.9rem; /* Base font size for buttons */
  padding: 0.5rem 1rem; /* Padding for buttons */
  margin: 0.2rem; /* Margin to separate buttons */
}

/* Responsive design adjustments for buttons */
@media (max-width: 1200px) {
  .table .btn {
    font-size: 0.8rem; /* Slightly smaller font size */
    padding: 0.4rem 0.8rem; /* Adjust padding */
  }
}

@media (max-width: 992px) {
  .table .btn {
    font-size: 0.7rem; /* Smaller font size for medium screens */
    padding: 0.3rem 0.6rem; /* Adjust padding */
  }
}

@media (max-width: 768px) {
  .table .btn {
    font-size: 0.6rem; /* Smaller font size for tablets */
    padding: 0.3rem 0.5rem; /* Adjust padding */
  }
}

@media (max-width: 576px) {
  .table .btn {
    font-size: 0.5rem; /* Even smaller font size for small screens */
    padding: 0.2rem 0.4rem; /* Adjust padding */
  }
}



</style>