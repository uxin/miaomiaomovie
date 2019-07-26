<template>
  <div>
    <div class="search_body">
      <div class="search_input">
        <div class="search_input_wrapper">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" />
        </div>
      </div>
      <div class="search_result">
        <h3>电影/电视剧/综艺</h3>
        <ul>
          <li>
            <div class="img">
              <img src="@/assets/movie_1.jpg" />
            </div>
            <div class="info">
              <p>
                <span>无名之辈</span>
                <span>8.5</span>
              </p>
              <p>A Cool Fish</p>
              <p>剧情,喜剧,犯罪</p>
              <p>2018-11-16</p>
            </div>
          </li>
          <li>
            <div class="img">
              <img src="@/assets/movie_2.jpg" />
            </div>
            <div class="info">
              <p>
                <span>无名之辈</span>
                <span>8.5</span>
              </p>
              <p>A Cool Fish</p>
              <p>剧情,喜剧,犯罪</p>
              <p>2018-11-16</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style scoped lang="scss">
.search_body {
  flex: 1;
  overflow: auto;
  margin-top: r(51);

  .search_input {
    padding: r(8) r(10);
    background-color: #f5f5f5;
    border-bottom: r(1) solid #e5e5e5;
  }
  .search_input_wrapper {
    padding: 0 r(10);
    border: r(1) solid #e6e6e6;
    border-radius: r(5);
    background-color: #fff;
    display: flex;
    line-height: r(20);
    input {
      border: none;
      font-size: r(13);
      color: #333;
      padding: r(4) 0;
      outline: none;
      margin-left: r(5) ;
      width: 100%;
    }
  }
  i {
    font-size: r(16) ;
    padding: r(4)  0;
  }
  .search_result {
    h3 {
      font-size: r(15) ;
      color: #999;
      padding: r(9)  r(15) ;
      border-bottom: r(1)  solid #e6e6e6;
    }
    li {
      border-bottom: r(1)  #c9c9c9 dashed;
      padding: r(10)  r(15) ;
      box-sizing: border-box;
      display: flex;
    }
    .img {
      width: r(60) ;
      float: left;
      img {
        width: 100%;
      }
    }
    .info {
      float: left;
      margin-left: r(15) ;
      flex: 1;
      p {
        height: r(22) ;
        display: flex;
        line-height: r(22) ;
        font-size: r(12) ;
        &:nth-of-type(1) {
          span:nth-of-type(1) {
            font-size: r(18) ;
            flex: 1;
            text-align: left;
          }
          span:nth-of-type(2) {
            font-size: r(16) ;
            color: #fc7103;
          }
        }
      }
    }
  }
}
</style>