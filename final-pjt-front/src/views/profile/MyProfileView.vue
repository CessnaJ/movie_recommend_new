<template>
  <div>
    <h1>나의 프로필 페이지</h1>
    <button @click="logout">로그아웃</button>
  </div>
</template>

<script>
export default {
    name: "MyProfileView",
    data() {
      return {
      }
    },
    methods: {
      logout() {
        this.$store.commit('LOGOUT_USER')
      },
    },
}
</script>

<style>

</style>