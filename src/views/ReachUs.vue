<template><div class="container" id="contact">
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
        <form action="https://formspree.io/f/xleqzzyb" method="POST" class="form"
                    style="padding-bottom: 7%;">
                    <div class="row justify-content-center">
                        <div class="col-5">
                            <input type="text" class="form-control" name="name" placeholder="First name"
                                aria-label="First name" required>
                        </div>
                        <div class="col-5">
                            <input type="text" class="form-control" name="lastname" placeholder="Last name"
                                aria-label="Last name" required>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-10 mb-3">
                            <label for="exampleInputEmail1" class="form-label"></label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" name="email" placeholder="Your Email" required>
                            <div id="emailHelp" class="form-text"></div>
                        </div>

                        <div class="col-10 mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label"></label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name="message"
                                placeholder="Enter Message Here" required></textarea>
                        </div>
                    </div>

                    <button type="submit" class="btn subButton" name="submit">Submit</button>
                </form>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
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
    color: blueviolet;
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
</style>