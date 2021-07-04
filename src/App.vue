<template>
  <loading :active="isLoading"></loading>
  <router-view />
  <ToastMessage></ToastMessage>
</template>

<style lang="scss">
@import './assets/all';
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;500;900&display=swap');

html,
body {
  font-family: 'Noto Sans TC', sans-serif;
  height: 100vh;
}
a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
</style>

<script>
import ToastMessage from '@/components/ToastMessage.vue';
import Loading from '@/components/Loading.vue';

export default {
  components: { ToastMessage, Loading },
  data() {
    return {
      isLoading: false,
    };
  },
  created() {
    this.emitter.on('isLoading', (bool) => {
      this.isLoading = bool;
    });
  },
};
</script>
