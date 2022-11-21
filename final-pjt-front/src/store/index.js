import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const API_URL = 'http://127.0.0.1:8000'

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    token: null,
    article_id: 0,
    articles: [],
  },
  getters: {
    // 로그인이 된 상태라면 true를 반환하고 아니면 false를 반환
    isLogin(state) {
      return state.token ? true : false
    }
  },
  mutations: {
    // 게시글 생성한다
    CREATE_ARTICLE(state, article) {
      state.articles.push(article)
      state.article_id = state.article_id + 1
    },
    // 세이브 토큰을 발급받으면, 메인페이지로 라우팅
    SAVE_TOKEN(state, token) {
      state.token = token
      router.push({ name: 'home' })
    },
    LOGOUT_USER(state) {
      state.token = null
      router.push({ name: 'home' })
    }
  },
  actions: {
    // 회원가입
    signUp(context, payload) {
      axios({
        method: 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
          username: payload.username,
          password1: payload.password1,
          password2: payload.password2
        }
      })
        .then((res) => {
          context.commit('SAVE_TOKEN', res.data.key)
        })
    },
    // 로그인
    logIn(context, payload) {
      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username: payload.username,
          password: payload.password,
        }
      })
        .then((res) => {
          context.commit('SAVE_TOKEN', res.data.key)
          // 이거 굳이 필요 없어서 주석처리함.
          // localStorage.setItem('SAVE_TOKEN', res.data.token)
        })
        .catch((err) => {
          alert('비번이나 아이디 잘못쳤다 멍총따리 다시쳐라')
          console.log(err)
        })
    },
    // 커뮤니티 게시글 create 하는 법
    createArticle(context, payload) {
      const article = {
        id: context.state.article_id,
        title: payload.title,
        content: payload.content,
        createAt: new Date().getTime()
      }
      context.commit('CREATE_ARTICLE', article)
    },
    // 리뷰 포스트 목록을 장고에서 불러옴
    getPosts(context) {
      axios({
        method: 'get',
        url: `${API_URL}`,
        headers: {
          Authorization: `Token ${context.state.token}`
        }
      })
        .then((res) => {
          context.commit('GET_POSTS', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 포스트 전체글을 받아온다
    GET_POSTS(state, posts) {
      state.posts = posts
    },
  },
  modules: {
  }
})

