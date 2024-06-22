<script>
import Drawer from '../components/Drawer.vue'
import Card from '../components/Card.vue'
import { mapState } from 'vuex'
export default {
  components: { Drawer, Card },

  data() {
    return {
      selected: 'Подешевле',
      search: '',
    }
  },
  computed: {
    ...mapState(['CardList']),
    filteredCardList() {
      let filteredList = this.CardList.filter((item) => item.title.includes(this.search));
      if (this.selected === 'Подешевле') 
      {
        return filteredList.sort((a, b) => a.price - b.price);
      } else {
        return filteredList.sort((a, b) => b.price - a.price);
      }
    }
  }
}
</script>

<template>
  <div class="wraper">
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/image/img1.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/image/img2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/image/img3.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- поиск -->
    <form class="d-flex" role="search">
      <input v-model="search"
        class="form-control me-2"
        type="search"
        placeholder="Найти товар по названию"
        aria-label="Search"
      />
    </form>
    <!-- фильтры -->
    <div class="form-floating">
      <select v-model="selected" class="form-select" id="floatingSelect" aria-label="Floating label select example">
        <option value="Подешевле">Подешевле</option>
        <option value="Подороже">Подороже</option>
      </select>
      <label for="floatingSelect">Настройте фильтры</label>
    </div>
    <!-- карточки товаров -->
    <div class="cards-container">
      <Card v-if="filteredCardList.length" :CardList="filteredCardList"></Card>
      <div v-else class="no-results">Ничего не найдено</div>
    </div>
  </div>
  
</template>

<style scoped>

.wraper {
  max-width: 1000px;
  margin: 0px auto;
  border-radius: 20px;
  padding: 0px 20px 0px 20px;
  margin-top: 50px;
  background: #ffffff;
}
.Header {
  position: fixed;
  width: 100%;
  z-index: 1000;
}
.carousel-item img {
  border-radius: 20px;
  margin-top: 30px;
}
.d-flex {
  margin-top: 30px;
  margin-bottom: 30px;
  height: 40px;
}
.form-floating {
  width: 300px;
}
.btn {
  border-radius: 5px;
}
.cards-container {
  min-height: 400px; 
  display: flex;
  justify-content: center;
  align-items: center;
}
.no-results {
  font-size: 20px;
  color: #888;
}
</style>