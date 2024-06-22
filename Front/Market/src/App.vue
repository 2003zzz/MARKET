<script>
import Drawer from './components/Drawer.vue'
import Header from './components/Header.vue'
import HomePage from './pages/HomePage.vue'
import { mapState } from 'vuex'
export default {
  components: { HomePage, Header, Drawer},
  methods: {},
  computed: {
    ...mapState(['DrawerList'])
  }
}
</script>

<template>
  <div class="wraper">
    <Header class="Header"></Header>
     <router-view class="home"></router-view>
    <Drawer :DrawerList="DrawerList"></Drawer>
  </div>
</template>
<style scoped>
.wraper {
  background: #edf3f4;
  min-height: 45vh;
}
.home{
  background: #ffffff;
}
</style>
