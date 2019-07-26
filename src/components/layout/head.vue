<template>
  <div>
    <header id="header">
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
      default: "猫眼电影"
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
    left: 1.3333vw;
    top: 50%;
    margin-top: --3.4667vw;
    font-size: 6.9333vw;
  }
}
</style>