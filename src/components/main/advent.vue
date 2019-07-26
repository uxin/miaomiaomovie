<template>
  <div>
    <!-- 轮播 -->
    <swiperList v-if="flag">
      <div class="swiper-slide carousel" v-for="(item,index) in carouselList" :key="index">
        <img class="imgList" :src="item.img.replace(item.img.substr(22, 3),'128.180')" />
        <h5>{{item.nm}}</h5>
        <p class="date">{{item.comingTitle}}</p>
        <span>{{item.wish}}人想看</span>
        <em>
          <img
            class="like_btn"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAABGdBTUEAALGPC/xhBQAAAytJREFUWAnVmLtrFFEUh3cWFAtRE5FEEUREsFAkooUIgl3+CUEU7LVR1LBIMERCLFLZRG1CrFJYpLBQENRGC4n4wBeKRUQ2PlAQX+v3m70z7MzemZ3HZp05cPbce86553w7O7Mzc51KjDQaDYfwDvSAseux69Cv6Ef0LXoHXXAc5y82UqhVJbgLPYhuQTega9DPaB19ht6VpVYDaxUBWYUGewkcQzdbE4LOJabXaHQ76G7OqHWI0RG0v+mJ/XxPdJpaD2xZbcAUX0XiSXS/bUEH3yPil2imL1Chln6RE+huzVPKffJV60frugAwDfoI1tBtrUkpx4vknzVrLmAHU65vTX/F5DzQnzynDwzsCpwX0e1eMIfV+S3ReZpXXlDgFNC/VEgXgifHGXQDVvUE2g1Y1RKT2FxxgTm6cg4bXxHNsGH0j/DhIlKGmFzGKuSbCAyFgkWcDsG6UaeE/m/LIvsEvKcstGIV8ECJgAcErJtFWaRPwCvLQitWAbv3/ZJALwlYj3ZlkbqA9YBRFnkp4HtloRWrgJ+g/uNbgeHF+LTKY5tebWYLDOqhzYpVR1hyE33njor5ITYxNp/WIP/DeBINvI4ooQAipknD6D9eVnC8JjCOxr799vgLiGXcsLmtvVPCnRB4yGDanRTjQ2/PYvIlACwvCTcwM37G/xvMGJYAQRuwoiRex8wFMns7mTMMbV2twMpiwVXMfNuK5XfMm97WTpHAJvsy9pZ15fI41Us9IyUWmG+qPa4ptBe3b/WYMj2zAWsVBfQfPYEGrlbFuiiqPWF6xZaNPcLeSgr9ZjyGLni+LlrVHDM9OpZNBKwqFPyJGUWfa94lUa1RUztRSX9vLVE2SewNrMboaG9NuiYi7w3+M8B+i4hb3amBVQXotRjdxpPsHWtJWLQHfBrYL+FAp3kmYBUFWnu/2u1Mu03wgTXajaxjU0tmYHUCehAj6H7NE4ggBSvoTJL4orNVp/Eifm1eJ/lplXMuD6wYcgGrAAA6H0fQ75pHiGIjJjciJZk7N7DaAKIrvobarnj5aiaHYT7JdQ6HW5sL8Sj+nSb2GHsF2EwXWLi+5v8ArR6xIZ+h44wAAAAASUVORK5CYII="
            alt
          />
        </em>
      </div>
    </swiperList>

    <div class="movie_body">
      <ul>
        <h5>8月1日 周四</h5>
        <li v-for="(item,index) in nowList" :key="index">
          <div class="pic_show">
            <img :src="item.img.replace(item.img.substr(22, 3),'128.180')" />
          </div>
          <div class="info_list">
            <h2>{{item.nm}}</h2>
            <p>
              <span class="person">{{item.wish}}</span> 人想看
            </p>
            <p>{{item.star}}</p>
            <p>{{item.showInfo||'敬请期待'}}</p>
          </div>
          <div class="btn_mall" :class="item.showst!=4?'btn_yellow':'btn_pre'">{{item.showst!=4?'想看':'预售'}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carouselList: [],
      nowList:[],
      flag: false
    };
  },
  mounted() {
    this.CarouselInit();
    this.NowListInit();
  },
  methods: {
    CarouselInit() {
      this._getCarouselData(res => {
        // console.log(res.data.coming);
        this.carouselList = res.data.coming;
        this.flag = true;
      });
    },
    NowListInit() {
      this._getNowListData(res => {
        console.log(res.data.coming);
        this.nowList=res.data.coming
      });
    },
    _getCarouselData(callback) {
      this.$apis.getCarouselData().then(res => {
        callback(res);
      });
    },
    _getNowListData(callback) {
      this.$apis.getNowListData().then(res => {
        callback(res);
      });
    }
  }
};
</script>
<style scoped lang="scss">
.movie_body {
  border-top: r(1) solid #e6e6e6;
  flex: 1;
  overflow: auto;
  ul {
    margin: 0 3.2vw;
    overflow: hidden;
    margin-bottom: r(50);
    h5 {
      margin-top: 12px;
      font-size: 14px;
      color: #333;
      text-align: left;
      font-weight: 400;
    }
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

  .bgc_res {
    background-color: #f03d37;
  }
  .bgc_buule {
    background-color: #3c9fe6;
  }

  .btn_yellow {
    background-color: #faaf00;
  }

  .btn_pre {
    background-color: #3c9fe6;
  }
}
</style>