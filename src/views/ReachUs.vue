<template><div class="container" id="contact">
    <h3>Contact us</h3>
    <div class="row" style="margin-top: 50px;">
        <div class="col-md-4 py-3 py-md-0">
            <div class="card">
                <i class="bi bi-telephone"> Phone</i>
                <h6>+ 068 345 1298</h6>
            </div>
        </div>
        <div class="col-md-4 py-3 py-md-0">
            <div class="card">
                <i class="bi bi-envelope"> Email</i>
                <h6>kyYola@gmail.com</h6>
            </div>
        </div>
        <div class="col-md-4 py-3 py-md-0">
            <div class="card">
                <i class="bi bi-geo-alt"> Address</i>
                <h6>Fong Kong Street</h6>
            </div>
        </div>
    </div>
    <div class="row" style="margin-top: 30px;">
        <form action="https://formspree.io/f/xleqzzyb" method="POST" class="form" id="myForm" style="padding-bottom: 7%;" >
             <div class="row justify-content-center">
               <div class="col-5">
                 <input type="text" class="form-control" name="name" placeholder="First name" aria-label="First name" required>
               </div>
               <div class="col-5">
                 <input type="text" class="form-control" name="lastname" placeholder="Last name" aria-label="Last name" required>
               </div>
             </div>
             <div class="row justify-content-center">
               <div class="col-10 mb-3">
                 <label for="exampleInputEmail1" class="form-label"></label>
                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Your Email" required>
                 <div id="emailHelp" class="form-text"></div>
               </div>

               <div class="col-10 mb-3">
                 <label for="exampleFormControlTextarea1" class="form-label"></label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name="message"
                   placeholder="Enter Message Here" required></textarea>
               </div>
             </div>
             <div class="mx-5">
               <button type="submit" class="btn1 subButton" name="submit">Submit</button>
               <button type="button" id="clearButton" class="btn1" @click.prevent="clearForm()">Clear</button>
             </div>

             <!-- <div class="deats row mx-2 cinfo">
               <div class="">
                 <a href="mailto:kyle.brink1602@gmail.com" class="my-3 mail " style="font-size:15px;" mail><i
                     class="fa fa-envelope"></i><i class="bi bi-envelope"></i> kyle.brink1602@gmail.com</a>
               </div>
               <div class="col-12">
                 <text class="" style="font-size:15px;"><i class="fa fa-phone"></i><i class="bi bi-telephone-fill"></i> +27 67 404 6393</text>
               </div>
             </div> -->
           </form>
    </div>
</div>
</template>

<script>
export default{
   data(){
       return {
           
       }
   },
   methods:{

       // Function to clear the form fields
       clearForm() {
         document.getElementById("myForm").reset();
       }
   }
}
</script>

<style>
h3{
    font-weight: bold;
    font-size: 30px;
    color: orange; /* Dark teal blue */
    text-shadow: black; /* Matching shadow for consistency */
}

#contact{
    margin-top: 50px;
}
#contact .card{
    height: 80px;
    margin-top: 20px;
    box-shadow: black;
}
#contact .card i{
    margin-top: 10px;
    margin-left: 10px;
    font-size: 15px;
    color: #162052;
    font-weight: bold;
    letter-spacing: 3px;
}
#contact .card h6{
    margin-left: 10px;
    margin-top: 10px;
    letter-spacing: 3px;
    font-weight: bold;
    color: black;
}
.deats {
   margin-top: 20px;
}

.deats a, .deats text {
   margin-bottom: 10px;
   color: blue;
   font: bold;
   font-size: 20px;
}

/* Font Awesome icon styles */
.fa {
   margin-right: 5px;
}

/* .icons a {
   padding: 0;
   font-size: 20px;
   color: #ff0157;
} */

.img-thumbnail{
   max-width: 25vw;
   max-height: 25vh;
}

.products{
   justify-content: center;
   align-items: center;
}

.prodCard{
   height: 550px;
}

.homeCard{
   text-align: center;
}

.btn-grp{
   justify-content: center;
   align-items: center;
}
.btn1{
    background-color: #162052;
    color: orange;
    border-radius: 10%;
}
.btn1:hover{
    background-color: orange;
    color: #162052;
}
.contact-details {
   display: flex;
   flex-direction: column;
}

.email-link,
.phone-number {
   margin: 5px; 
   display: flex;
   justify-content: center;
   align-items: center;
}


.footer-bar {
   display: flex;
   justify-content: center;
   align-items: center;
}

.social-icons {
   display: flex;
   justify-content: space-between;
   width: 120px; 
}

.social-icons a {
   text-decoration: none;
   color: inherit;
}

.social-icons i {
   font-size: 24px; /* Adjust icon size as needed */
}
@media (min-width:300px) and (max-width:500px) {
  .cinfo{
    font-size: 5px;
  }
}
</style>