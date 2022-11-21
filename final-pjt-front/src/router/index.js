import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import LoginView from '@/views/accounts/LoginView'
import MyProfileView from '@/views/profile/MyProfileView'
import MovieListView from '@/views/MovieListView'
import SignUpView from '@/views/accounts/SignUpView'
import MovieDetail from '@/views/MovieDetail'
import CommunityView from '@/views/community/CommunityView'
import CommunityCreate from '@/views/community/CommunityCreate'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/profile',
    name: 'profile',
    component: MyProfileView
  },
  {
    path: '/movie',
    name: 'movie',
    component: MovieListView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/moviedetail/:movie_id',
    name: 'moviedetail',
    component: MovieDetail,
    props: true,
  },
  {
    path: '/community',
    name: 'community',
    component: CommunityView
  },
  {
    path: '/communitycreate',
    name: 'communitycreate',
    component: CommunityCreate
  },
  // 커뮤 path 잘 적기
  // {
  //   path: '/communitydatail/:article_id',
  //   name: 'communitydetail',
  //   component: CommunityDetail
  // }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
