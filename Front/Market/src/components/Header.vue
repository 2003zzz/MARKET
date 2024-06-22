<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['DrawerSum'])
  }
}
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand">SNEAKERS</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Каталог</router-link>
          </li>
        </ul>
        <img
          src="../assets/image/shop.svg"
          class="img"
          alt="КОРЗИНА"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          @click="getSum"
        />
        <b style="color: aliceblue"> {{ DrawerSum }} $</b>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.img {
  width: 40px;
  height: 40px;
  margin-right: 5px;
}
.img:hover {
  transform: scale(1.1);
  transition: 0.3s;
  cursor: pointer;
}
</style>
