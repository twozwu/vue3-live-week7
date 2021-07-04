<template>
  <navComponent></navComponent>
  <div style="height:72px;"></div>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import navComponent from '../components/Nav.vue';
import Footer from './Footer.vue';

export default {
  components: { navComponent, Footer },
  mounted() {},
};
</script>
