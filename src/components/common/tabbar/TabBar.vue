<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style lang="scss" scoped>
#tab-bar {
  background-color: #f6f6f6;
  height: 49px;
  box-shadow: 0px -1px 6px rgba(150, 150, 150, 0.3);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  z-index: 999;
}
</style>
