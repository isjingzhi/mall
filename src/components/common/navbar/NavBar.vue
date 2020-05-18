<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 40px;
  line-height: 40px;
  width: 100%;
  z-index: 999;
}
.left,
.right {
  width: 40px;
}
.center {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  font-size: 18px;
}
</style>
