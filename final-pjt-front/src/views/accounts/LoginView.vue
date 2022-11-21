<template>
  <div>
    <h1>로그인 페이지</h1>
    <label for="username">username : </label>
    <input type="text" id="username" v-model="username"><br>

    <label for="password">password : </label>
    <input type="password" id="password" @keyup.enter="logIn" v-model="password"><br>

    <input type="submit" @click="logIn" value="로그인">
    <hr>
    <router-link :to="{ name:'signup' }">회원가입</router-link>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    logIn() {
      const username = this.username
      const password = this.password

      const payload = {
        username: username,
        password: password,
      }
      this.$store.dispatch('logIn', payload)
    }
  }
}
</script>

<style>

</style>