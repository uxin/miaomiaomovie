<template>
  <div>

      <!-- 正在热映 -->
    <div class="movie_body">
      <ul>
        <li v-for="(item,index) in movieList" :key="index">
          <div class="pic_show">
            <img :src="item.img.replace(item.img.substr(22, 3),'128.180')" />
          </div>
          <div class="info_list">
            <h2>{{item.nm}}</h2>
            <p>
              观众评
              <span class="grade">{{item.sc}}</span>
            </p>
            <p>主演: {{item.star}}</p>
            <p>{{item.showInfo}}</p>
          </div>
          <div class="btn_mall" :class="item.showst==4?'bgc_buule':'bgc_res'">{{item.showst==4?"预售":"购票"}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      movieList: []
    };
  },
  mounted() {
    this.catEyeMovieInit();
  },
  methods: {
    catEyeMovieInit() {
      this._getCatEyeMovie(res => {
        this.movieList = res.data.movieList;
        // console.log(this.movieList);
      });
    },
    _getCatEyeMovie(callback) {
      this.$apis.getCatEyeMovie().then(res => {
        callback(res);
      });
    }
  }
};
</script>
<style scoped lang="scss">
// 正在热映
.movie_body {
  margin-top: 25.0667vw;
  flex: 1;
  overflow: auto;
  ul {
    margin: 0 3.2vw;
    overflow: hidden;
    li {
      margin-top: 3.2vw;
      display: flex;
      align-items: center;
      border-bottom: 0.2667vw #e6e6e6 solid;
      padding-bottom: 2.6667vw;
    }
  }
  .pic_show {
    width: 17.0667vw;
    height: 24vw;
    img {
      width: 100%;
    }
  }
  .info_list {
    margin-left: 2.6667vw;
    flex: 1;
    position: relative;
    h2 {
      font-size: 4.5333vw;
      line-height: 6.4vw;
      width: 40vw;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: left;
    }
    p {
      font-size: 3.4667vw;
      color: #666;
      line-height: 5.8667vw;
      width: 53.3333vw;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: left;
    }
    .grade {
      font-weight: 700;
      color: #faaf00;
      font-size: 4vw;
      text-align: left;
    }
    img {
      width: 13.3333vw;
      position: absolute;
      right: 2.6667vw;
      top: 1.3333vw;
    }
  }

  .btn_mall,
  .movie_body .btn_pre {
    width: 12.5333vw;
    height: 7.2vw;
    line-height: 7.4667vw;
    text-align: center;
    background-color: #f03d37;
    color: #fff;
    border-radius: 1.0667vw;
    font-size: 3.2vw;
    cursor: pointer;
  }

  .bgc_res{
    background-color: #f03d37;
  }
  .bgc_buule{
    background-color: #3c9fe6;
  }

  .btn_pre {
    background-color: #3c9fe6;
  }
}
</style>