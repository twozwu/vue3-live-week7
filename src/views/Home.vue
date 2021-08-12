<template>
  <NavComponent></NavComponent>
  <div style="height:72px;"></div>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import NavComponent from '../components/Nav.vue';
import Footer from '../components/Footer.vue';

export default {
  components: { NavComponent, Footer },
};
</script>
