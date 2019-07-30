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
    hotCityInit() {   //结合mint-ui实现A-Z排序的方法
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

    cityInit() {  //获取城市的拼音的第一个字母
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
        margin-bottom: r(20);
        .clearfix {
          overflow: hidden;
        }
        margin-top: r(20);
        h2 {
          padding-left: r(15);
          line-height: r(30);
          font-size: r(14);
          background: #f0f0f0;
          font-weight: normal;
          text-align: left;
        }
        ul li {
          float: left;
          background: #fff;
          width: 29%;
          height: r(33);
          margin-top: r(15);
          margin-left: 3%;
          padding: 0 r(4);
          border: r(1) solid #e6e6e6;
          border-radius: r(3);
          line-height: r(33);
          text-align: center;
          box-sizing: border-box;
          font-size: r(16);
        }
      }

      .mint-indexlist {
        ul {
          li {
            &.mint-indexsection {
              background-color: #fff;

              p {
                &.mint-indexsection-index {
                  font-size: r(16);
                  background-color: #e6e6e6;
                  & + ul {
                    padding: r(6) 0;
                    background-color: #f5f5f5;
                    div {
                      height: r(44);
                      line-height: r(44);
                      margin-left: r(15);
                      text-align: left;
                      font-size:r(16);
                      border-bottom: r(1) solid #c8c7cc;
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