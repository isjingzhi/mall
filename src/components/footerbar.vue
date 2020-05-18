<template>
  <mt-tabbar v-model="message" fixed>
    <mt-tab-item id="home">
      <img slot="icon" :src="this.atabs[0]" />
      投票
    </mt-tab-item>
    <mt-tab-item id="votes">
      <img slot="icon" :src="this.atabs[1]" />
      选票
    </mt-tab-item>
    <mt-tab-item id="canvass">
      <img slot="icon" :src="this.atabs[2]" />
      拉票
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      //选中的tabbar值message为外面页面传入的值selected
      message: this.selected,
      atabs: this.tabs
    };
  },
  props: {
    selected: String,
    tabs: Array
  },
  watch: {
    message: function(val, oldVal) {
      // 这里就可以通过 val 的值变更来确定去向
      switch (val) {
        case "home":
          this.$router.push("/");
          break;
        case "votes":
          this.$router.push("/votes");
          break;
        case "canvass":
          this.$router.push("/canvass");
          break;
      }
    }
  },
  methods: {}
};
</script>

<style lang="scss">
.mint-tabbar {
  background-color: $color-background !important;
  padding: 10px 0;
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.08);

  .mint-tab-item-icon {
    width: 48px;
    height: 48px;
    margin-bottom: 10px;

    img {
      width: 100%;
    }
  }

  .mint-tab-item-label {
    font-size: 20px;
    color: $white;
  }
}

.mint-tabbar > .mint-tab-item.is-selected {
  background-color: $transparent !important;
  .mint-tab-item-label {
    color: $primary-color;
  }
}
</style>
