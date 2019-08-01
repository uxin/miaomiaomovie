<template>
  <div>
    <!-- tab栏切换 -->
    <div
      class="movie_menu"
      v-if="!(this.$route.path=='/movie/site'||this.$route.path=='/movie/seek')"
    >
      <div class="city_name" @click="clickSite">
        <span>{{decodeURIComponent(this.$route.fullPath.substr(20)).substr(0,2)||"北京"}}</span>
        <i class="iconfont icon-lower-triangle"></i>
      </div>
      <div class="hot_swtich">
        <div
          class="hot_item"
          :class="{active:index==className}"
          v-for="(item,index) in clickList"
          :key="index"
          @click="clickRouter(index),clickClassName(index)"
        >{{item.name}}</div>
        <!-- <div class="hot_item" @click="clickAdvent">即将上映</div> -->
      </div>
      <div class="search_entry" @click="clickSeek">
        <i class="iconfont icon-sousuo"></i>
      </div>
    </div>
    <!-- <keep-alives> -->
    <router-view />
    <!-- </keep-alives> -->
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      site: { path: "/movie/site", name: "长沙市" },
      seek: { path: "/movie/seek" },
      clickList: [
        { path: "/movie/nowPlay", name: "正在热映" },
        { path: "/movie/advent", name: "即将上映" }
      ],
      cityList: [],
      className: 0,
    };
  },
  methods: {
    clickSite() {
      this.$router.push(this.site.path);
    },
    clickRouter(index) {
      this.$router.push(this.clickList[index].path);
    },
    // clickNowPlay(){
    //   this.$router.push(this.nowPlay.path)
    // },
    // clickAdvent(){
    //   this.$router.push(this.advent.path)
    // },
    clickSeek() {
      this.$router.push(this.seek.path);
    },

    clickClassName(index) {
      this.className = index;
    },
  }
};
</script>
<style scoped lang="scss">
// tab栏切换
.movie_menu {
  width: 100%;
  height: 12vw;
  border-bottom: 0.2667vw solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
  position: fixed;
  top: 13.3333vw;
  left: 0;
  .city_name {
    margin-left: 5.3333vw;
    height: 100%;
    line-height: 12vw;
    &.active {
      color: #ef4238;
      border-bottom: 0.5333vw #ef4238 solid;
    }
    span {
      font-size: 4.2667vw;
    }
  }
  .hot_swtich {
    display: flex;
    height: 100%;
    line-height: 12vw;
  }
  .hot_item {
    font-size: 4vw;
    color: #666;
    width: 21.3333vw;
    text-align: center;
    margin: 0 3.2vw;
    font-weight: 700;
    &.active {
      color: #ef4238;
      border-bottom: 2px #ef4238 solid;
    }
  }
  .search_entry {
    margin-right: 5.3333vw;
    height: 100%;
    line-height: 12vw;
    &.active {
      color: #ef4238;
      border-bottom: 0.5333vw #ef4238 solid;
    }
    i {
      font-size: 6.4vw;
      color: red;
    }
  }
}
</style>