/**
 * 路由器模块
 */
import Vue from "vue";
import VueRouter from 'vue-router';
import About from "../views/About";
import Home from "../views/Home";
import News from "../views/News";
import Message from "../views/Message";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "about"
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/home",
            name: "home",
            component: Home,
            children: [
                {
                    path: "",
                    redirect: '/home/news'
                },
                {
                    path: 'news',
                    name: 'news',
                    component: News
                },
                {
                    path: 'message',
                    name: 'message',
                    component: Message
                }
            ]
        }
    ],
    linkActiveClass: 'active'
})
