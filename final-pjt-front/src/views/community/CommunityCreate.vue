<template>
  <div>
    <h1>영화 리뷰 작성하는 공간</h1>
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'CommunityCreate',
  data() {
    return{
      title: null,
      content: null,
    }
  },
  methods: {
    createPost() {
      const title = this.title
      const content = this.content
      if (!title) {
        alert('제목을 입력해주세요')
        return
      } else if (!content) {
        alert('내용을 입력해주세요')
        return
      }
      axios({
        method: 'post',
        url: `${API_URL}/장고에서 보내주는 CREATE 경로/`,
        data: {
          title: title,
          content: content,
        },
        headers: {
          Authorization: `Token ${this.$store.state.token}`
        }
      })
        .then((res) => {
          console.log(res)
          // 포스팅이 성공하면 나의프로필페이지로 넘어가자
          this.$router.push({name: 'community'})
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>