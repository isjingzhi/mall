<template>
  <div>
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <h1>首页</h1>

    <h2>{{count}}</h2>
    <h2>{{powerCount}}</h2>
    <h3>{{$store.state.count}}</h3>
    <button @click="add" style="color:#fff;font-size:20px;">+++</button>
    <br />
    <button @click="sub" style="color:#fff;font-size:20px;">---</button>

    <h3>
      <button @click="addNum(5)" style="color:#fff; font-size:20px;">每次增加5</button>
    </h3>

    <h2>{{$store.state.student}}</h2>
    <h4>--------------------------分割线----------------------------</h4>

    <h3>{{$store.state.info}}</h3>
    <button @click="updateState" style="color:#fff;font-size:30px;">修改信息按钮</button>
    <h4>--------------------------异步分割线----------------------------</h4>

    <button @click="updataSync" style="color:#fff;font-size:30px;">异步修改</button>
    <h5>models分割线--------------------------</h5>
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <h2></h2>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'content/mainTabBar/MainTabBar'
import NavBar from 'common/navbar/NavBar'
// 引入常量
import {
  INCREMENT,
  DECREMENT,
  INCOUNT,
  UPDATE
} from "@/store/mutation-types";

export default {
  components: { MainTabBar , NavBar},
  created() {},
  data() {
    return {
      // selected: "home",
      // tabs: [
      //   require("@/assets/image/vote_first_icon_check.png"),
      //   require("@/assets/image/vote_second_icon.png"),
      //   require("@/assets/image/vote_last_icon.png")
      // ]
    };
  },

  methods: {
    add() {
      this.$store.commit(INCREMENT);
    },
    sub() {
      this.$store.commit(DECREMENT);
    },
    addNum(num) {
      // 1. muitation的普通提交方式
      // num参数是mutation中的payload(载荷),也就是在提交更新数据的时候携带的参数
      // this.$store.commit(INCOUNT, num);

      // 2.mutation的特殊提交方式
      this.$store.commit({
        type: INCOUNT,
        num: num
      });
    },
    updateState() {
      this.$store.commit(UPDATE);
    },
    // 异步修改mutation中的信息:修改 store 中的信息必须通过 mutation,而 mutation 中的所有方法必须是同步的,所以需要通过 action 中的方法再去修改 mutation 中的值
    updataSync() {
      // 方法 一:
      // this.$store.dispatch("oupdate", {
      //   msg: "携带的参数",
      //   success: (message) => {
      //     console.log(message);
      //   }
      // })

      // 方法 二:
      this.$store.dispatch("oupdate", "携带的参数").then(msg => {
        console.log("点击之后开始传递");
        console.log(msg);
      })
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    powerCount() {
      return this.$store.getters.powerCount;
    }
  }
};
</script>

<style lang="scss">
</style>

