<template>
  <div id="app">
    <nav>
      <!-- <router-link :to="{ name:'movie'}">전체영화</router-link> | -->
      <router-link :to="{ name:'home' }">home</router-link> |
      <router-link :to="{ name:'community' }">커뮤니티</router-link> |
      
      <div v-if="this.$store.state.token">
        <router-link :to="{ name:'profile'}">프로필</router-link> |
      </div>
      <div v-if="!this.$store.state.token">
        <router-link :to="{ name:'login'}">시작하기</router-link> |
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
