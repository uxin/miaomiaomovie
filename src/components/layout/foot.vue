<template>
  <div>
    <footer id="footer">
      <ul>
        <li
          v-for="(item,index) in routerList"
          :key="index"
          @click="clickRouter(index),clickClass(index)"
          :class="{'active':index==classList}"
        >
          <i :class="item.className"></i>
          <p>{{item.name}}</p>
        </li>
      </ul>
    </footer>

  </div>
</template>
<script>
export default {
  data() {
    return {
      routerList: [
        { path: "/movie", name: "电影", className: "iconfont icon-dianying" },
        { path: "/cinema", name: "影院", className: "iconfont icon-yingyuan" },
        { path: "/my", name: "我的", className: "iconfont icon-wode" }
      ],
      classList: 0
    };
  },
  methods: {
    clickRouter(index) {
      this.$router.push(this.routerList[index].path);
    },
    clickClass(index) {
      this.classList = index;
    }
  },
};
</script>
<style scoped lang="scss">
#footer {
  width: 100%;
  height: 13.3333vw;
  background: white;
  border-top: 0.5333vw #ebe8e3 solid;
  position: fixed;
  left: 0;
  bottom: 0;
  ul {
    display: flex;
    text-align: center;
    height: 13.3333vw;
    align-items: center;
    li {
      flex: 1;
      height: 10.6667vw;
      &.active {
        color: #f03d37;
      }
    }
    i {
      font-size: 5.3333vw;
    }
    p {
      font-size: 3.2vw;
      line-height: 4.8vw;
    }
  }
}
</style>