<template>
  <div class="container">
    <Progress></Progress>
    <router-view></router-view>
  </div>
</template>

<script>
import Progress from '../components/Progress.vue';

export default {
  components: { Progress },
};
</script>
