<template>
  <div id="app">
    
    <div class="animate__animated animate__fadeIn">
      <div class="container py-3 text-center">
        <h5><i class="fas fa-star"></i></h5>
        <h5 class="mb-0">Lista de deseos</h5>
      </div>
    </div>

    <router-view/>

    <div class="animate__animated animate__fadeIn">
      <b-button variant="dark" class="btn-circle btn-md menu">
        <h5 class="mb-0 pt-1">
          <span class="my-0 py-0">
            <i class="fas fa-bars"></i>
          </span>
        </h5>
      </b-button>
    </div>

  </div>
</template>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

.btn-circle.btn-md {
  width: 50px;
  height: 50px;
  padding: 7px 10px;
  border-radius: 25px;
  font-size: 10px;
  text-align: center;
}

.menu {
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
}
</style>