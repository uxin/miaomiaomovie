// 定义全局组件

import { Button } from 'mint-ui'
import swiper from "@/components/commonTemp/swiper";
export default (Vue) => {
    Vue.component("mint_but",Button);
    Vue.component("swiperList", swiper)
}