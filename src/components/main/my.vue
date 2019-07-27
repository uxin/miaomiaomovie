<template>
  <div>
    <div id="content">
      <div class="login_body">
        <div>
          <input class="login_text" type="text" placeholder="账户名/手机号/Email" />
        </div>
        <div>
          <input class="login_text" type="password" placeholder="请输入您的密码" />
        </div>
        <div class="login_btn">
          <input type="submit" value="登录" />
        </div>
        <div class="login_link">
          <a href="#">立即注册</a>
          <a href="#">找回密码</a>
        </div>
      </div>
      <em>喵喵电影 客服电话：400-479-3490</em>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
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

  em{
    font-size: 4.2667vw;
    font-weight: 400;
    margin-top: 2.6667vw;
    color: #333;
  }
}
</style>