<template>
  <div>
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- footer -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'content/mainTabBar/MainTabBar'
import NavBar from 'common/navbar/NavBar'
export default {
  components: { MainTabBar, NavBar },
  created() {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
