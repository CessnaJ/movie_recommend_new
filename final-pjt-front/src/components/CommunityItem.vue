<template>
  <div>
    <h1>커뮤니티 게시글 디테일</h1>
    <hr>
    <div @click="goDetail(article.id)">
      <p>글 제목 : {{ article.id }}</p>
      <p>글 제목 : {{ article.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityItem',
  props: {
    article: Object,
  },
  methods: {
    goDetail(id) {
      this.$router.push({ name: '게시글 디테일', params: {id}})
    }
  }
}
</script>

<style>

</style>