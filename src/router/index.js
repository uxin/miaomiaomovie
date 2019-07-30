import Vue from 'vue'
import Router from 'vue-router'
import global from "@/core/global/index";  //直接获取函数,获取路由地址参数

Vue.use(Router)

const routers = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
      redirect: "movie",  //重定向
      children: [
        {
          path: "movie",
          name: 'movie',
          meta: {
            keepAlive: true
          },
          component: resolve => require(['@/components/main/movie'], resolve),
          redirect: "movie/nowPlay",  //重定向

          children:[
            {
              path: "site",
              name: 'site',
              component: resolve => require(['@/components/main/site'], resolve)
            },
            {
              path: "nowPlay",
              name: 'nowPlay',
              component: resolve => require(['@/components/main/nowPlay'], resolve)
            },
            {
              path: "advent",
              name: 'advent',
              component: resolve => require(['@/components/main/advent'], resolve)
            },
            {
              path: "seek",
              name: 'seek',
              component: resolve => require(['@/components/main/seek'], resolve)
            },
          ]
        },
        {
          path: "cinema",
          name: 'cinema',
          component: resolve => require(['@/components/main/cinema'], resolve),
        },
        {
          path: "my",
          name: 'my',
          component: resolve => require(['@/components/main/my'], resolve)
        },
        {
          path: "show",
          name: 'show',
          component: resolve => require(['@/components/main/show'], resolve)
        },
        {
          path: "register",
          name: 'register',
          component: resolve => require(['@/components/main/register'], resolve)
        },
        {
          path: "login",
          name: 'login',
          component: resolve => require(['@/components/main/login'], resolve)
        },
      ]
    }
  ]
})


// console.dir(routers)

// beforeEach(()=>{})  //全局路由钩子函数,其中有三个参数
// 参数1: 到哪个地址去
// 参数2: 从哪个地址来
// 参数3: 控制是否到下一个路由
// 注:此页面用了beforeEach()全局路由钩子函数时,就不要用到重定向了
// 作用:适用于混合开发,通过参数跳转项目的位置
// 全局路由钩子函数, 每当路由发生变化, 触发

// routers.beforeEach((to, from, next) => {
//   // console.log(to, from);
//   if (to.path == "/") {
//     if (location.search.indexOf("news") != -1) {
//       next({ path: "/news" });
//     } else if (location.search.indexOf("info") != -1) {
//       next({ path: "/info" });
//     } else if (location.search.indexOf("test") != -1) {
//       next({ path: "/test" });
//     } else {
//       next();  // 前往下一个路由
//     }
//   } else {
//     next();  // 前往下一个路由
//   }
// })

// // afterEach(()=>{})  跳转之后才执行
// routers.afterEach((to, from) => {
//   console.log("跳转之后执行");
// })

export default routers;
