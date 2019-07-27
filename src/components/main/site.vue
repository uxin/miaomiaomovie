<template>
  <div>
    <div class="city_body">
      <div class="city_list">
        <div class="city_sort">
          <mt-index-list :show-indicator="true">
            <!-- 热门城市 -->
            <div class="city_hot">
              <h2 index="热门城市">热门城市</h2>
              <ul class="clearfix">
                <li v-for="(item,index) in hotCity" :key="index" @click="clickRouter(item)">{{item.city}}</li>
              </ul>
            </div>
            <!-- 其他城市列表 -->
            <mt-index-section
              v-for="(newCityList,index) in newCityList"
              :key="index"
              :index="newCityList.letters"
            >
              <div
                v-for="(item,indexList) in newCityList.data"
                :key="indexList"
                :title="item.city" @click="clickRouter(item)"
              >{{item.city}}</div>
            </mt-index-section>
          </mt-index-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { IndexList, IndexSection } from "mint-ui";
import { cityData } from "@/mock/data/cityInfo";
import vPinyin from "@/components/commonTemp/vue-py.js";
export default {
  data() {
    return {
      hotCity: [
        { city: "上海" },
        { city: "北京" },
        { city: "广州" },
        { city: "深圳" },
        { city: "上海" },
        { city: "武汉" },
        { city: "天津" },
        { city: "西安" },
        { city: "南京" },
        { city: "杭州" },
        { city: "成都" },
        { city: "重庆" },
      ],
      Citylist: [],
      newCityList: []
    };
  },
  mounted() {
    this.Citylist = cityData.cityList;
    setTimeout(() => {
      this.hotCityInit();
    });

    this.cityInit();
  },
  methods: {
    hotCityInit() {
      let newObj = {};
      let newArr = [];
      for (let i = 0; i < this.Citylist.length; i++) {
        let objList = this.Citylist[i];
        if (!newObj[objList.letters]) {
          newArr.push({
            letters: objList.letters,
            data: [objList]
          });
          newObj[objList.letters] = objList;
        } else {
          for (let j = 0; j < newArr.length; j++) {
            let newObjList = newArr[j];
            if (newObjList.letters === objList.letters) {
              newObjList.data.push(objList);
              break;
            }
          }
        }
      }
      this.newCityList = newArr;
    },

    cityInit() {
      this.Citylist.map(item => {
        item.letters = vPinyin.chineseToPinYin(item.city).charAt(0);
      });
    },
    clickRouter(item){
      this.$router.push({
        path:"/movie/nowPlay",
        query:{
          city:item.city,
          cid:item.cid,
        }
      })
    }
  },
  components: {
    "mt-index-list": IndexList,
    "mt-index-section": IndexSection
  }
};
</script>
<style lang="scss">
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
    .city_sort {
      .city_hot {
        margin-bottom: 20px;
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

      .mint-indexlist {
        ul {
          li {
            &.mint-indexsection {
              background-color: #fff;

              p {
                &.mint-indexsection-index {
                  font-size: 16px;
                  // text-align: left;
                  // padding: 4px 14px;
                  background-color: #e6e6e6;
                  & + ul {
                    padding: 6px 0;
                    background-color: #f5f5f5;
                    div {
                      height: 44px;
                      line-height: 44px;
                      margin-left: 15px;
                      text-align: left;
                      font-size: 16px;
                      border-bottom: 1px solid #c8c7cc;
                      &:last-child {
                        border: 0;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>