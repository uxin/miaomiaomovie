<template>
  <div>
    <!-- 正在热映 -->
    <div class="movie_body">
      <ul>
        <li v-for="(item,index) in movieList" :key="index">
          <div class="pic_show">
            <img :src="item.img.replace(item.img.substr(22, 3),'128.180')" @click="clickRouter" />
          </div>
          <div class="info_list">
            <h2>{{item.nm | fontlenght(8)}}</h2>
            <span class="imax_img">
            <img class="imax" :src="item.version | imax_filter(8)"  />
            <img class="preShow" :src="item.preShow!=false?'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAcCAMAAAAtIK2eAAAAjVBMVEX/tQD/tQD/tgD/tQAAAAD/tAD///7/2Hz/y07/7MD/6rj/7sX/vBv/z17/35X/zVb/twn/8tX/xDf/uRD//fv/9uP/0mj/wS//viL/+u//78r/5qv/4Zn/tQT//PX/9d3/5KP/yEb/8dD/24T/z1z/xj//wSz/3pD/1nP/1G3/0WT/x0L/vyX/+Of/6LMvfBa2AAAABXRSTlPmphztAPMTpaIAAAEcSURBVDjLtdTdboIwAIbhgn5tKQgFBAXGv+Dvdv+XN7owjBADZNl70KMn5EsaSra6RrAgoulbom+wsI1ONCxOI2Q5XmOBP2A5BfItdvkE749vccFUDWCbprmbweJDxQGjLr8YhBDUEMKfmWE4sBnojdOQU2uM/V1XcFbn44ktNWOKD1T0ReE8zoYFPzhwo+WYeQnzqNPQU0OdCd7zvmqYkcRxToM4juUIP8whPmwGiqQCMPnyQZ2pBZTyib1AGqcJTt0rkhA8B4StMKWUwa+uuAfWGF/cFCyBjDwcs3uHd74v27xIATtoX7GVlUD5CRRn4JJLeBbgRQyqOmpfMDgAv+6QWnjrL/X38p20x//3p5AVdtVTsOqRWfV8fQPHkSVDHb7HRAAAAABJRU5ErkJggg==':' '" alt="">
            </span>
            <p>
              {{item.sc!=0?'观众评':'暂无评分'}}
              <span class="grade">{{item.sc!=0?item.sc:' '}}</span>
            </p>
            <p>主演: {{item.star}}</p>
            <p>{{item.showInfo}}</p>
          </div>
          <div
            class="btn_mall"
            :class="item.showst==4?'bgc_buule':'bgc_res'"
          >{{item.showst==4?"预售":"购票"}}</div>
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
      movieList: [],
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
    },
    clickRouter(){
      this.$router.push("/show")
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
  margin-bottom: 13.3333vw;
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
      height: 24vw;
    }
  }
  .info_list {
    margin-left: 2.6667vw;
    flex: 1;
    position: relative;
    h2 {
      font-size: 4.5333vw;
      line-height: 6.4vw;
      text-align: left;
      float: left;
    }
    .imax_img{
      float: left;
      margin-top: 1.3333vw;
      margin-left: 1.0667vw;
      .imax {
      width: 11.4667vw;
    }
    .preShow{
      width: 5.8667vw;
    }
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
    // img {
    //   width: 13.3333vw;
    //   position: absolute;
    //   right: 2.6667vw;
    //   top: 1.3333vw;
    // }
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

  .bgc_res {
    background-color: #f03d37;
  }
  .bgc_buule {
    background-color: #3c9fe6;
  }

  .btn_pre {
    background-color: #3c9fe6;
  }
}
</style>