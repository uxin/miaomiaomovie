import request from "./http";
import mock from "@/mock/index"
// imop

class Apis {
    // 正在热映接口数据
    getCatEyeMovie(){
        return request({
            method:"get",
            url:"/ajax/movieOnInfoList",
            params: {
                "token":"",
            }
        })
    }

    // 即将上映中轮播接口数据
    getCarouselData(){
        return request({
            method:"get",
            url:"/ajax/mostExpected",
            params:{
                "ci":"1",
                "limit":10,
                "offset":"0",
                "token":"",
            }
        })
    }

    // 即将上映中电影接口数据
    getNowListData() {
        return request({
            method: "get",
            url: "/ajax/comingList",
            params: {
                "ci": "1",
                "token": "",
                "limit": 10,

            }
        })
    }

    getMoreComingData(ids){
        return request({
            method:"get",
            url:"/ajax/moreComingList",
            params:{
                "token":"",
                "movieIds": ids.join()
            }
        })
    }



    // 注册接口
    register(data) {
        return mock.post("/register", { data })
    }

    // 登录接口
    login(data) {
        return mock.get("/login", { params: data })
    }
}
export default new Apis();