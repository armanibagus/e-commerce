<template>
  <footer class="container-fluid py-5 bg-secondary">
    <div class="container-md">
      <div class="row">
        <div class="col-md-3 col-sm-3 col-12 mb-md-0 mb-4">
          <img src="@/assets/images/new-logo.png" alt="Logo" style="height: 32px;"/>
          <div class="footer-menu">
            <router-link to="/" class="btn">About Us</router-link>
            <router-link to="/" class="btn">Sustainability</router-link>
            <router-link to="/" class="btn">Blog</router-link>
            <router-link to="/" class="btn">Advertising</router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-3 col-12 mb-md-0 mb-4">
          <h3 class="text-white">Discover</h3>
          <div class="footer-menu">
            <router-link to="/" class="btn">How it works</router-link>
            <router-link to="/" class="btn">Help center</router-link>
            <router-link to="/" class="btn">Infoboard</router-link>
            <router-link to="/" class="btn">Mobile apps</router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-3 col-12 mb-md-0 mb-4">
          <h3 class="text-white">Help</h3>
          <div class="footer-menu">
            <router-link to="/" class="btn">Help center</router-link>
            <router-link to="/" class="btn">Buying</router-link>
            <router-link to="/" class="btn">Trust & Safety</router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-3 col-12 mb-md-0 mb-4">
          <h3 class="text-white">Community</h3>
          <div class="footer-menu">
            <router-link to="/" class="btn">Forum</router-link>
          </div>
        </div>
      </div>
      <hr class="text-white">
      <div class="d-flex justify-content-between">
        <div class="fs-3 pb-4 text-white">
          <i class="fa-brands fa-facebook pe-3"></i>
          <i class="fa-brands fa-twitter pe-3"></i>
          <i class="fa-brands fa-square-instagram pe-3"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
        <p class="text-white">ⓒ E-Commerce, 2022</p>
      </div>
    </div>
  </footer>
</template>
