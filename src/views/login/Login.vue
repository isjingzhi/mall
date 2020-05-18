<template>
  <div class="login">
    <div class="login_content">
      <!-- <img src="@/assets/image/download-logo.png" alt /> -->
    </div>
    <ul class="user_form" :model="userForm">
      <li class="flex">
        <i>
          <!-- <img src="@/assets/image/phone-img.png" alt /> -->
        </i>
        <input type="number" placeholder="手机号" v-model.trim="userForm.phone" />
      </li>
      <li class="flex">
        <div class="flex">
          <i>
            <!-- <img src="@/assets/image/verify-code-img.png" alt /> -->
          </i>
          <input placeholder="验证码" type="number" v-model.trim="userForm.code" />
        </div>
        <mt-button size="small" type="primary" @click="getCode">发送验证码</mt-button>
      </li>
    </ul>
    <div class="login_btn">
      <ul>
        <li class="agreement">
          <em>点击注册即同意</em>
          <!-- <router-link to="/">《注册协议》</router-link> -->
          <a href="http://mint-ui.github.io/#!/zh-cn">《注册协议》</a>
          <em>和</em>
          <router-link to="about">《隐私协议》</router-link>
        </li>
        <li>
          <mt-button size="large" @click="login" type="primary">登录</mt-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      userForm: {
        phone: '13126760615',
        countryCode:'86'
      }
    };
  },
  methods: {
    async getCode() {
      // 获取验证码
      if (!this.userForm.phone) {
        this.$toast({
          message: '请输入手机号码',
          position: 'bottom',
        });
        return;
      } else {
        const res = await this.$http.post('/api/user/sendLoginVerifCode',this.userForm);
        console.log(res);
      }
    },
    async login() {
      const code = this.code;
      const username = this.username;
      if (!username || !code) {
        this.$toast({
          message: '手机号或邀请码不能为空',
          position: 'bottom',
        });
        return;
      }
      const res = await this.$http.post('/api/user/canvassingInfo');
      console.log(res);
    }
  }
};
</script>

<style lang="scss" scoped>

.login {
  color: $white;
  padding: 20px;
  padding-top: 160px;
  .user_form {
    li {
      .mint-cell {
        background: transparent;
      }
    }
  }
  .login_content {
    width: 170px;
    margin: 0 auto 80px;

    img {
      width: 100%;
    }
  }
  .login_btn {
    position: fixed;
    width: 80%;
    color: #fff;
    bottom: 80px;
    left: 10%;
    .agreement {
      margin-bottom: 4px;
      a {
        display: inline-block;
        color: #ffffff;
        text-decoration: underline;
      }
    }
  }
}
</style>
