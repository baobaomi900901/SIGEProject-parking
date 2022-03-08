// 引入VueRouter;
import VueRouter from "vue-router";

// 引入组件
import Park01 from "../components/Park01";
import Park02 from "../components/Park02";
import Park03 from "../components/Park03";
import Park04 from "../components/Park04";
import Park05 from "../components/Park05";
import Park06 from "../components/Park06";
import Park07 from "../components/Park07";
// import Parkdemo from "../components/Parkdemo";
// import Demo from "../components/Demo";

// 创建并暴露路由器;
export default new VueRouter({
    routes: [
        {
            path: "/park01", // 路径
            component: Park01, // 对应组件
        },
        {
            path: "/park02", // 路径
            component: Park02, // 对应组件
        },
        {
            path: "/park03", // 路径
            component: Park03, // 对应组件
        },
        {
            path: "/park04", // 路径
            component: Park04, // 对应组件
        },
        {
            path: "/park05", // 路径
            component: Park05, // 对应组件
        },
        {
            path: "/park06", // 路径
            component: Park06, // 对应组件
        },
        {
            path: "/park07", // 路径
            component: Park07, // 对应组件
        },
        // {
        //     path: "/parkdemo", // 路径
        //     component: Parkdemo, // 对应组件
        // },
        // {
        //     path: "/demo", // 路径
        //     component: Demo, // 对应组件
        // },
    ],
});
