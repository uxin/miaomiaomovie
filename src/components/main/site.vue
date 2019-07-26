<template>
  <div>
    <div class="city_body">
      <div class="city_list">
        <div class="city_hot">
          <h2>热门城市</h2>
          <ul class="clearfix">
            <li>上海</li>
            <li>北京</li>
            <li>上海</li>
            <li>北京</li>
            <li>上海</li>
            <li>北京</li>
            <li>上海</li>
            <li>北京</li>
          </ul>
        </div>
        <div class="city_sort">
          <div>
            <h2>A</h2>
            <ul>
              <li>阿拉善盟</li>
              <li>鞍山</li>
              <li>安庆</li>
              <li>安阳</li>
            </ul>
          </div>
          <div>
            <h2>B</h2>
            <ul>
              <li>北京</li>
              <li>保定</li>
              <li>蚌埠</li>
              <li>包头</li>
            </ul>
          </div>
          <div>
            <h2>A</h2>
            <ul>
              <li>阿拉善盟</li>
              <li>鞍山</li>
              <li>安庆</li>
              <li>安阳</li>
            </ul>
          </div>
          <div>
            <h2>B</h2>
            <ul>
              <li>北京</li>
              <li>保定</li>
              <li>蚌埠</li>
              <li>包头</li>
            </ul>
          </div>
          <div>
            <h2>A</h2>
            <ul>
              <li>阿拉善盟</li>
              <li>鞍山</li>
              <li>安庆</li>
              <li>安阳</li>
            </ul>
          </div>
          <div>
            <h2>B</h2>
            <ul>
              <li>北京</li>
              <li>保定</li>
              <li>蚌埠</li>
              <li>包头</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="city_index">
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.city_body {
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  .city_list {
    flex: 1;
    overflow: auto;
    background: #ebebeb;
    &::-webkit-scrollbar {
      background-color: transparent;
      width: 0;
    }
    .city_hot {
      .clearfix {
        overflow: hidden;
      }
      margin-top: 5.3333vw;
      h2 {
        padding-left: 4vw;
        line-height: 8vw;
        font-size: 3.7333vw;
        background: #f0f0f0;
        font-weight: normal;
        text-align: left;
      }
      ul li {
        float: left;
        background: #fff;
        width: 29%;
        height: 8.8vw;
        margin-top: 4vw;
        margin-left: 3%;
        padding: 0 1.0667vw;
        border: 0.2667vw solid #e6e6e6;
        border-radius: 0.8vw;
        line-height: 8.8vw;
        text-align: center;
        box-sizing: border-box;
        font-size: 4.2667vw;
      }
    }
  }

  .city_sort {
    div {
      margin-top: 5.3333vw;
      h2 {
        padding-left: 4vw;
        line-height: 8vw;
        font-size: 3.7333vw;
        background: #f0f0f0;
        font-weight: normal;
        text-align: left;
      }
      ul {
        padding-left: 2.6667vw;
        margin-top: 2.6667vw;
        li {
          line-height: 8vw;
          line-height: 8vw;
          text-align: left;
          font-size: 3.7333vw;
        }
      }
    }
  }

  .city_index {
    width: 5.3333vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-left: 0.2667vw #e6e6e6 solid;
  }
}
</style>