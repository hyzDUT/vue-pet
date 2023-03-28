import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import Home from '../views/Home.vue'
// import info from '../views/info/info.vue'

//异步
const Cat=()=>import('../views/Cat/Cat.vue')
const Dog=()=>import('../views/Dog/Dog.vue')
const Climb=()=>import('../views/Climb/Climb.vue')
const Littlepet=()=>import('../views/Littlepet/Littlepet.vue')
const Fish=()=>import('../views/Fish/Fish.vue')
const info=()=>import('../views/info/info.vue')
const Home=()=>import('../views/Home.vue')
const Login=()=>import('../views/Login.vue')
const Food=()=>import('../views/Food/Food.vue')
const Climbk=()=>import('../views/Climbk.vue')
const Lpetk=()=>import('../views/Lpetk.vue')
const Note=()=>import('../views/Note.vue')
const Photo=()=>import('../views/Photo.vue')

Vue.use(VueRouter)
Vue.use(ElementUI);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },{
    path:'/info',
    name:'info',
    component:info
  },
  {
    path:'/cat',
    name:'cat',
    component:Cat
  },{
    path:'/dog',
    name:'dog',
    component:Dog
  },{
    path:'/climb',
    name:'climb',
    component:Climb
  },{
    path:'/littlepet',
    name:'littlepet',
    component:Littlepet
  },{
    path:'/fish',
    name:'fish',
    component:Fish
  },{
    path:'/food',
    name:'food',
    component:Food
  },{
    path:'/climbk',
    name:'climbk',
    component:Climbk
  },{
    path:'/lpetk',
    name:'lpetk',
    component:Lpetk
  },{
    path:'/note',
    name:'note',
    component:Note
  },{
    path:'/photo',
    name:'photo',
    component:Photo
  }
]

const router = new VueRouter({
  routes
})

export default router
