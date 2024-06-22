<script>
import { mapState } from 'vuex'
export default {
  props: {
    DrawerList: Array
  },
  methods: {
      removeCard(id){
        this.$store.dispatch('removeCard', Number(id))
      }
    },  
  computed: {
    ...mapState(['DrawerSum'])
  }
}
</script>
<template>
  <div class="wraper">
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
      style="width: 35rem"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Корзина</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <p v-if="DrawerSum == 0">Ваша корзина пуста</p>
        <div class="card-list">
          <div v-for="card in DrawerList" :key="card.id" class="card" style="width: 10rem">
            <img :src="card.img" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>Цена:</b> {{ card.price }} $</li>
              </ul>
              <a @click="removeCard(card.id)" class="btn btn-outline-danger">Удалить</a>
            </div>
          </div>
        </div>
      </div>
      <div class="form-success">
          <div class="dotted-underline">
            <span>Итого:</span>
            <span class="line"></span>
            <span>{{ DrawerSum }} $</span>
      </div>
      <button type="button" class="btn btn-success" :disabled="DrawerSum == 0">Оформить</button>
    </div>
  </div>
  </div>
</template>

<style scoped>
.offcanvas {
  background: #edf3f4;
}
.offcanvas-body {
  justify-content: center;
  align-items: center;
  margin-bottom: 90px;
}
.card-list {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: 10px;
}
.card {
  border-radius: 10px;
}
.card:hover {
  transition: 0.3s;
  transform: scale(1.03);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
}
.card-body, .card-title {
  font-size: 0.8rem;
}
.card-img-top{
  max-height: 130px;
  border-radius: 20px;
}
.list-group button {
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
}

.list-group-item {
  padding-left: 0%;
}
.btn {
  border-radius: 5px;

}
.form-success{
  bottom: 0;
  position: absolute;
  background: #ffff;
  width: 100%;
  z-index: 999;
}
.form-success button{
  margin-top: 10px;
  width: 100%;
}

.dotted-underline {
    font-size: 1.0rem;
    margin: 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}
.dotted-underline .line {
      flex-grow: 1;
      border-bottom: 1px dotted;
      margin: 0 10px;
    }
</style>
