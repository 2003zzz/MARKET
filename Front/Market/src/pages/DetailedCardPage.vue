<script>
import { defineComponent } from "vue";


export default defineComponent({
  data() {
    return {
      card: {}
    }
  },
    created() {
      try{
        const cardId = this.$route.params.id;
        console.log(cardId)
        this.card = this.getCardById(Number(cardId));
        console.log(this.card)
      }
      catch(e){
        console.log(e)
      }
    },
    methods: {
      getCardById(id) {
        return this.$store.getters.getCardById(id);
      }
    }
})
</script>

<template>
  <div class="main">
    <h2> Детальная информация:</h2>
    <h3>{{ card.title }}</h3>
      <img :src="card.img" alt="" />
      <p>{{ card.content }}</p>
      <p><b>Цена:</b> {{ card.price }} $</p>
      <button type="button" class="btn btn-outline-success mt-auto" id="liveToastBtn">В корзину</button>
  </div>
   <!-- индикатор загрузки -->
   <div v-if="!card" class="text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Загрузка...</span>
    </div>
  </div>
</template>

<style scoped>
.main{
  max-width: 1000px;
  margin: 0px auto;
  border-radius: 20px;
  padding: 20px 20px;
  margin-top: 30px;
  background: #ffffff;
}
</style>