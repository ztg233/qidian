import VueRouter from "vue-router";
import login from '../../components/login.vue'
import register from '../../components/register.vue'
import index from "../../components/index.vue";
import test from "../../components/test.vue";
import classify from "../../components/classify.vue";
import my from "../../components/my.vue";
import bookself from "../../components/bookself.vue";
import details from "../../components/details.vue";
var router=new VueRouter({
    routes:[
        {
            path:'/',
            component:index
        },
        {
            path:'/register',
            component:register
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/classify',
            component:classify
        },
        {
            path:'/my',
            component:my
        },
        {
            path:'/bookself',
            component:bookself
        },
        {
            path:'/details',
            component:details
        },
        {
            path:'/test',
            component:test
        }
    ]
})
export default router;
