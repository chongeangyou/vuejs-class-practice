import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import Service from "@/pages/Service.vue"
import ChooseUs from "@/pages/ChooseUs.vue"
import OurTeam from '@/pages/Team.vue'
import TeamMember from '@/pages/TeamMember.vue'
import Team from '@/components/OurTeam.vue'

import CourseApi from '@/pages/CourseApi.vue'
import CourseDetail from '@/pages/CourseDetail.vue'
import CourseElement from '@/components/CourseElement.vue'

import Login from '@/pages/Login.vue'
import User from '@/pages/User.vue'

import Repository from '@/pages/Repository.vue'
import Register from '@/pages/Register.vue'
import NotFound from '@/pages/NotFound.vue'


const routes =[
    //{ path: '/course', component: CourseApi},
    //{path: '/course/:id', component: CourseDetail},
    {path: '/course', component:CourseApi, children:[
      {path: ':id', component: CourseDetail},
      {path: '', component:CourseElement}
    ]},
    { path: '/', component: Home},
    { path: '/about', component: About},
    { path: '/service', component: Service},
    { path: '/choose_us', component: ChooseUs},
    { path: '/team', component: OurTeam, children:[
      { path: ':id', component: TeamMember},
      { path: '', component: Team},
    ]},
    //{ path: '/team/:id', component: TeamMember}

    {path: '/login', component: Login},
    {path: '/user', component: User},

    {path: '/repos', component: Repository},
    {path: '/register', component: Register},
    {path: '/:pathMatch(.*)*', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router