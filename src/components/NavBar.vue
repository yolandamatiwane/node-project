
  <template>
    <nav class="navbar navbar-expand-lg" id="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html" id="logo"><span id="span1">K</span><span>yYola</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span><i class="bi bi-list"></i></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/products">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin">Admin</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/reachUs">Reach us</router-link>
                    </li>
                </ul>
        </div>
      </div>
    </nav>
  </template>


<script>
export default {

}
</script>

<style>
#navbar{
    background-color: #162052;
}
#logo{
    margin-left: 15px;
    color: rgb(246, 3, 3);
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 6px;
}
#logo span{
    color: orange;
}
#logo #span1{
    font-size: 30px;
}
.navbar-nav{
    margin-left: 20px;
}
.nav-item{
    margin-left: 10px;
}
.nav-item .nav-link{
    color: orange;
    margin-left: 2px;
    text-shadow: 0px 0px 1px black;
    transition: 0.5s ease;
}
.nav-item .nav-link:hover{
    color: blue;
}
</style>