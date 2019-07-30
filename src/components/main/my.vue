<template>
  <div>
    <div id="content">
      <!-- 退出登录 -->
      <div class="out_login">
        <span @click="loginOut">退出登录</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast, MessageBox } from "mint-ui"; //提示框
import Store from "storejs"; //这个模块需要下载  cnpm install storejs
export default {
  data() {
    return {};
  },
  created() {
    if (Store.get("userInfo")) {
      this.userInfo = Store.get("userInfo");
    } else if (Store.get("userInfo") == undefined) {
        this.$router.push("/login");
    //   MessageBox.confirm("是否去登录")
    //     .then(action => {
    //       this.$router.push("/login");
    //     })
    //     .catch(() => {
    //       Toast("取消成功");
    //     });
    }
  },
  methods: {
    loginOut() {
      // console.log(Store);
      MessageBox.confirm("是否退出登录")
        .then(action => {
          Store.remove("userInfo");
          this.$router.push("/login");
        //   MessageBox.confirm("是否去登录")
        //     .then(action => {
        //       this.$router.push("/login");
        //     })
        //     .catch(() => {
        //       Toast("取消成功");
        //     });
        })
        .catch(() => {
          Toast("取消成功");
        });
    }
  }
};
</script>
<style scoped lang="scss">
#content {
  flex: 1;
  overflow: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 14.4vw;
  .login_body {
    width: 100%;
    .login_text {
      width: 100%;
      height: 10.6667vw;
      border: none;
      border-bottom: 0.2667vw #ccc solid;
      margin-bottom: 1.3333vw;
      outline: none;
      text-indent: 2.6667vw;
      font-size: 3.7333vw;
    }
    .login_btn {
      height: 13.3333vw;
      margin: 2.6667vw;
      input {
        width: 100%;
        height: 100%;
        background: #e54847;
        border-radius: 0.8vw;
        border: none;
        display: block;
        color: white;
        font-size: 5.3333vw;
      }
    }
    .login_link {
      display: flex;
      justify-content: space-between;
      a {
        text-decoration: none;
        margin: 0 1.3333vw;
        font-size: 3.2vw;
        color: #e54847;
      }
    }
  }

  em {
    font-size: 4.2667vw;
    font-weight: 400;
    margin-top: 2.6667vw;
    color: #333;
  }
}



// 退出登录
  .out_login {
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    margin-top: 4vw;
    span {
      display: inline-block;
      font-size: 4.2667vw;
      color: red;
    }
  }
</style>