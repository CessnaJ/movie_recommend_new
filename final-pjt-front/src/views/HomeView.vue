<template>
  <div>
    <h1>여기가 메인 페이지</h1>
    <hr>
    <div class="main_movie">
      <div v-for="movie in movies" :key="movie" >
      <p>{{ movie.title }}</p>
      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="" @click="movieDetail(movie)">
      </div>
    </div>
   
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "HomeView",
     data() {
      return{
        movies: '',
        movieId: '',
        posterurl: '',
        user: [],
      }
    },
    created() {
     this.getMovie()
    },
    methods: {
      getMovie() {
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/movies/popular/`,
      })
        .then((res) => {
          this.movieId = this.$route.params.movieId
          this.movies = res.data
          // this.posterurl = 'https://image.tmdb.org/t/p/w500/' + res.data[0].poster_path
        })
        .catch((err) => {
          console.log(err)
        } )
    },
    movieDetail(movie) {
      this.$router.push({name: 'moviedetail', params: { movie_id: `${movie.id}`}})

    }
  }, 
}
</script>

<style>
.main_movie {
  display: flex;
}

</style>