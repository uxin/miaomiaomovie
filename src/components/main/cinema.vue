<template>
  <div>
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch font_z">
          全城
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="brand_swtich font_z">
          品牌
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="feature_switch font_z">
          特色
          <i class="iconfont icon-lower-triangle"></i>
        </div>
      </div>
      <div class="cinema_body">
        <ul>
          <li v-for="(item,index) in [1,2,3,4,5,6,7]" :key="index">
            <div>
              <span>大地影院(澳东世纪店)</span>
              <span class="q">
                <span class="price">22.9</span> 元起
              </span>
            </div>
            <div class="address">
              <span>金州区大连经济技术开发区澳东世纪3层</span>
              <span>1763.5km</span>
            </div>
            <div class="card">
              <div>小吃</div>
              <div>折扣卡</div>
            </div>
            <div class="discounts">
              <img
                class="discounts_img"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg=="
                alt
              />
              <span class="discounts_txt">开卡特惠，首单2张最高立减4元</span>
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
#content {
  flex: 1;
  overflow: auto;
  margin-bottom: 2.6667vw;
  position: relative;
  display: flex;
  flex-direction: column;
  .cinema_menu {
    width: 100%;
    height: 12vw;
    border-bottom: r(1) solid #e6e6e6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
    position: fixed;
    top: 13.3333vw;
    left: 0;
    .font_z {
      font-size: r(13);
      color: #777;
    }
    i {
      color: #777;
    }
  }
  .cinema_body {
    flex: 1;
    overflow: auto;
    // margin-top: r(92);
     margin-top: 24.5333vw;
    ul {
      padding: r(20);
      // margin-top: r(92);
      li {
        border-bottom: r(1) solid #e6e6e6;
        margin-bottom: 5.3333vw;
        div {
          margin-bottom: r(10);
          text-align: left;
          span {
            &:nth-child(1) {
              font-size: r(16);
            }
          }
          .q {
            font-size: r(11);
            color: #f03d37;
            .price {
              font-size: r(18);
            }
          }
        }
        .address {
          font-size: r(13);
          color: #666;
          span {
            &:nth-child(1) {
              font-size: r(13);
            }
          }
          span:nth-of-type(2) {
            float: right;
          }
        }
        .card {
          display: flex;
          margin-bottom: 0;
          div {
            padding: 0 r(3);
            height: r(15);
            line-height: r(15);
            border-radius: r(2);
            color: #f90;
            border: r(1) solid #f90;
            font-size: r(13);
            margin-right: r(5);

            &.or {
              color: #f90;
              border: r(1) solid #f90;
            }
            &.bl {
              color: #589daf;
              border: r(1) solid #589daf;
            }
          }
        }

        .discounts {
          margin-bottom: r(18);
          .discounts_img {
            width: r(15);
            height: r(14);
          }
          .discounts_txt {
            margin-top: r(2);
            vertical-align: top;
            display: inline-block;
            font-size: r(11);
            color: #999;
          }
        }
      }
    }
  }
}
</style>