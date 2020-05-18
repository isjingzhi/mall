<template>
  <div class="feature flex">
    <div class="feature-item flex-1" v-for="(item,index) in features" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  props: {
    features: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.feature {
  margin-top: 10px;
  font-size: 14px;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;
  .feature-item {
    text-align: center;
    img {
      width: 80px;
      height: 80px;
      margin:0 auto 10px;
    }
  }
}
</style>
