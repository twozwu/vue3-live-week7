<template>
  <navComponent class="fixed-top shadow-lg" ref="abc"></navComponent>
  <div style="height:72px;"></div>
  <router-view></router-view>
</template>

<script>
import navComponent from '../components/Nav.vue';

export default {
  components: { navComponent },
  mounted() {},
};
</script>
