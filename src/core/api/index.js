import request from "./http";
import mock from "@/mock/index"

class Apis {
    // 正在热映接口数据
    getCatEyeMovie(){
        return request({
            method:"get",
            url:"/ajax/movieOnInfoList",
            params: {
                "token": "",
            }
        })
    }

    // /ajax/mostExpected ? ci = 70 & limit=10 & offset=0 & token=
    // 即将上映中轮播接口数据
    getCarouselData(){
        return request({
            method:"get",
            url:"/ajax/mostExpected",
            params:{
                "ci":"70",
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
                "ci": "70",
                "token": "",
                "limit": 10,

            }
        })
    }



    // 模板
    // getPhp() {
    //     return request({
    //         method: 'post',
    //         url: '/test/php/json.php',
    //         data: {
    //             uname: "小明",
    //             upwd: "123"
    //         },
    //         // `headers` 是即将被发送的自定义请求头
    //         // headers: {'Content-type': 'x-www-form-urlencoded'},
    //     });
    // }

    // // 利用mock模拟get请求
    // login(data) {
    //     return mock.get("/login", {
    //         params: data
    //     })
    // }
}
export default new Apis();