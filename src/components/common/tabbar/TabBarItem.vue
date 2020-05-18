<template>
  <div id="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-show="!isActive">
      <slot name="icon"></slot>
    </div>
    <div class="item-active-icon" v-show="isActive">
      <slot name="active-icon"></slot>
    </div>
    <div class="item-text" :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: '#ff5777' } : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped>
#tab-bar-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.item-icon img,
.item-active-icon img {
  width: 24px;
  height: 24px;
  margin: 5px auto 0;
}

.item-text {
  font-size: 12px;
  margin-top: 3px;
  color: #666;
}
</style>