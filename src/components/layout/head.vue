<template>
  <div>
    <header id="header">
      <i class="fa fa-angle-left fa-lg" v-if="this.$route.path=='/movie/seek'" @click="clickRouter"></i>
      <h1>{{title}}</h1>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "喵喵电影"
    }
  },
  methods:{
    clickRouter(){
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped lang="scss">
#header {
  width: 100%;
  height: 13.3333vw;
  color: #fff;
  background: #e54847;
  border-bottom: 0.2667vw solid #e54847;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  h1 {
    font-size: 4.8vw;
    text-align: center;
    line-height: 13.3333vw;
    font-weight: normal;
  }
  i {
    position: absolute;
    left: r(6);
    top: r(2);
    font-size: r(60);
  }
}
</style>