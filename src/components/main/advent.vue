<template>
  <div>
    <div class="movie_body">
      <ul>
        <li>
          <div class="pic_show">
            <img src="@/assets/movie_1.jpg" />
          </div>
          <div class="info_list">
            <h2>无名之辈</h2>
            <p>
              <span class="person">17746</span> 人想看
            </p>
            <p>主演: 陈建斌,任素汐,潘斌龙</p>
            <p>2018-11-30上映</p>
          </div>
          <div class="btn_pre">预售</div>
        </li>
        <li>
          <div class="pic_show">
            <img src="@/assets/movie_2.jpg" />
          </div>
          <div class="info_list">
            <h2>毒液：致命守护者</h2>
            <p>
              <span class="person">2346</span> 人想看
            </p>
            <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
            <p>2018-11-30上映</p>
          </div>
          <div class="btn_pre">预售</div>
        </li>
        <li>
          <div class="pic_show">
            <img src="@/assets/movie_1.jpg" />
          </div>
          <div class="info_list">
            <h2>无名之辈</h2>
            <p>
              <span class="person">17746</span> 人想看
            </p>
            <p>主演: 陈建斌,任素汐,潘斌龙</p>
            <p>2018-11-30上映</p>
          </div>
          <div class="btn_pre">预售</div>
        </li>
        <li>
          <div class="pic_show">
            <img src="@/assets/movie_2.jpg" />
          </div>
          <div class="info_list">
            <h2>毒液：致命守护者</h2>
            <p>
              <span class="person">2346</span> 人想看
            </p>
            <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
            <p>2018-11-30上映</p>
          </div>
          <div class="btn_pre">预售</div>
        </li>
        <li>
          <div class="pic_show">
            <img src="@/assets/movie_1.jpg" />
          </div>
          <div class="info_list">
            <h2>无名之辈</h2>
            <p>
              <span class="person">17746</span> 人想看
            </p>
            <p>主演: 陈建斌,任素汐,潘斌龙</p>
            <p>2018-11-30上映</p>
          </div>
          <div class="btn_pre">预售</div>
        </li>
        <li>
          <div class="pic_show">
            <img src="@/assets/movie_2.jpg" />
          </div>
          <div class="info_list">
            <h2>毒液：致命守护者</h2>
            <p>
              <span class="person">2346</span> 人想看
            </p>
            <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
            <p>2018-11-30上映</p>
          </div>
          <div class="btn_pre">预售</div>
        </li>
        <li>
          <div class="pic_show">
            <img src="@/assets/movie_1.jpg" />
          </div>
          <div class="info_list">
            <h2>无名之辈</h2>
            <p>
              <span class="person">17746</span> 人想看
            </p>
            <p>主演: 陈建斌,任素汐,潘斌龙</p>
            <p>2018-11-30上映</p>
          </div>
          <div class="btn_pre">预售</div>
        </li>
        <li>
          <div class="pic_show">
            <img src="@/assets/movie_2.jpg" />
          </div>
          <div class="info_list">
            <h2>毒液：致命守护者</h2>
            <p>
              <span class="person">2346</span> 人想看
            </p>
            <p>主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德</p>
            <p>2018-11-30上映</p>
          </div>
          <div class="btn_pre">预售</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
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