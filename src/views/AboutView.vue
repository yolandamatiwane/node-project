<template>
  <div class="container" id="about">
    <h3>About</h3>
    <hr>
    <p>At KyYola, we are passionate about bringing you the latest in electronic appliance technology, combined with unmatched reliability and style. Our journey began with a simple vision: to provide high-quality, innovative solutions that make everyday living more efficient and enjoyable. With a dedicated team of experts and a commitment to exceptional customer service, we carefully curate a selection of products that meet our rigorous standards. Whether you're upgrading your home or seeking the perfect gadget, we're here to ensure you find exactly what you need to enhance your lifestyle. Join us in experiencing the future of home appliances today.</p>
    <hr>
    <div class="row" style="margin-top: 50px;">
        <div class="col-md-5 d-flex align-items-center">
            <div class="card">
                <img src="https://kingbrink.github.io/all-images/images/appliances2.png" class="img-fluid" alt="pica" loading="lazy">
            </div>
        </div>
        <div class="col-md-7 d-flex align-items-center">
            <div>
                <hr>
                <p>At KyYola, we pride ourselves on delivering state-of-the-art electronic appliances that seamlessly integrate into your daily life. Founded on a passion for innovation and quality, we strive to enhance your home experience with products that offer both cutting-edge technology and exceptional reliability. Our dedicated team works tirelessly to bring you the best in modern appliances, ensuring that each item we offer meets our high standards of performance and design. At KyYola, we’re not just selling appliances; we’re shaping the future of home living.</p>
                <hr>
                <router-link class="nav-link" to="/products"><button class="btn btn-primary">View Products</button></router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
#about {
    margin-top: 30px;
    background: linear-gradient(to right, #e0f7fa, #b2ebf2); /* Light blue gradient background */
    padding: 20px;
    border-radius: 10px;
}

#about h3 {
    font-weight: bold;
    color: #004d40; /* Dark teal blue */
    text-shadow: 0px 1px 1px #004d40; /* Matching shadow for consistency */
}

#about hr {
    border: 0;
    height: 1px;
    background: linear-gradient(to right, #fbc02d, #ffeb3b); /* Gradient yellow for hr */
    margin: 20px 0;
}

#about p {
    color: #01579b; /* Darker blue for better readability */
}

#about button {
    width: 150px;
    height: 36px;
    color: white;
    background-color: #fbc02d; /* Yellow background for button */
    border-radius: 5px;
    cursor: pointer;
    border: none;
}

#about .card img {
    border: 3px solid #0277bd; /* Blue border around image */
    border-radius: 5px;
}

.row {
    margin-top: 50px;
}

.col-md-5,
.col-md-7 {
    display: flex;
    align-items: center;
}
</style>
