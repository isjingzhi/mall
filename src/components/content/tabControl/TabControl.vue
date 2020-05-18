<template>
  <div class="tab-control flex">
    <div
      class="tab-control-item flex-1"
      v-for="(item,index) in titles"
      :key="index"
      :class="{active:currentIndex===index}"
      @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      // 1. 获取后台数据的索引,然后赋值给tab来改变索引
      this.currentIndex = index
      // 2.发出事件
      this.$emit('itemClick',index)
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-control {
  display: flex;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
  z-index: 9;
  position: sticky;
  top: 40px;
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: $primary-color;
    span {
      border-bottom: 2px solid $primary-color;
    }
  }
}
</style>
