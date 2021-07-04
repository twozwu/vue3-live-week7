<template>
  <div class="container">
    <Progress></Progress>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import Progress from '../components/Progress.vue';

export default {
  components: { Progress },
};
</script>
