<script>
export default {
  props: 
  {
    CardList: Array
  },
  methods: {
    addToCart(card) {
      this.$store.dispatch('addCard', card)
    },
  },
}
</script>

<template>
  <div class="main">
  <div class="card-list">
    <router-link :to="{ name: 'DetailedCardPage', params: { id: card.id } }" v-for="card in CardList" :key="card.id" class="card">
      <img :src="card.img" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ card.title }}</h5>
        <li class="list-group-item"><b>Цена:</b> {{ card.price }} $</li>
        <button type="button" @click.prevent="addToCart(card)" class="btn btn-outline-success mt-auto" id="liveToastBtn">В корзину</button>
      </div>
    </router-link>
  </div>
  <!-- индикатор загрузки -->
  <div v-if="!CardList" class="text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Загрузка...</span>
    </div>
  </div>
</div>
</template>

<style scoped>
.card-list {
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
}
.card-img-top{
  max-height: 150px;
}
.card {
  width: 11rem;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.card:hover {
  transform: scale(1.03);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}
.card-title{
  margin-bottom: 20px;
}
.card-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.btn {
  border-radius: 5px;
  margin-top: 10px; 
}
img {
  border-radius: 20px;
}
</style>
