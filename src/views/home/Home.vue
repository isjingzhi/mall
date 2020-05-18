<template>
  <div class="home-view">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <div>
      <home-swiper :banners="banners" ref="hSwiper"></home-swiper>
      <feature-view :features="recommends"></feature-view>
      <recommend-view></recommend-view>
      <tab-control :titles="['流行', '新款', '精选']"></tab-control>
    </div>
    <!-- footer -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
// 公共组件
import MainTabBar from "content/mainTabBar/MainTabBar";
import NavBar from "common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import FeatureView from "./childComps/FeatureView";
import RecommendView from "./childComps/RecommendView";
import TabControl from "content/tabControl/TabControl";
// request API
import { getHomeMultidata, getHomeData } from "network/api/home";

export default {
  components: {
    NavBar,
    MainTabBar,
    HomeSwiper,
    FeatureView,
    RecommendView,
    TabControl
  },
  created() {
    // 1. 轮播图&Feature数据
    this.getMultidata();
    // 2. 商品数据
    this.getHomeProducts("pop");
    this.getHomeProducts("new");
    this.getHomeProducts("sell");
  },
  activated: function() {
    this.$refs.hSwiper.startTimer();
  },
  deactivated: function() {
    this.$refs.hSwiper.stopTimer();
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: {
        pop: {
          page: 1,
          list: []
        },
        new: {
          page: 1,
          list: []
        },
        sell: {
          page: 1,
          list: []
        }
      }
    };
  },

  methods: {
    async getMultidata() {
      const { data } = await getHomeMultidata();
      this.banners = data.data.banner.list;
      this.recommends = data.data.recommend.list;
    },
    async getHomeProducts(type) {
      let currentPage = this.goodsList[type].page;
      const {data} = await getHomeData(type, currentPage);
      console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped>
.home-view {
  padding-top: 40px;
}
.nav-bar {
  box-shadow: 0px 1px 6px rgba(100, 100, 100, 0.08);
  background-color: $primary-color;
  color: $white;
  position: fixed;
  top: 0;
  left: 0;
}
</style>

