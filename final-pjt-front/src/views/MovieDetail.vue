<template>
  <div v-if="movie">
    <h1>{{ movie.title }}</h1>
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="">
    <p>{{ movie.overview }}</p>
    
  </div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'MovieDetail',
    components: {
    },
    data() {
        return{
            movie: '',
            movieId: '',
            posterUrl: '',
            avg: 0,
            getMovieDetail:null,
        }
    },

    created() {
            axios({
                method: 'get',
                url: `http://127.0.0.1:8000/movies/${this.$route.params.movie_id}/`,
            })
              .then((res) => {
                this.movieId = this.$route.params.movieId
                this.movie = res.data
                console.log(res.data.poster_path)
                // this.posterurl = `https://image.tmdb.org/t/p/w500` + res.data.poster_path
              })
              .catch((err) => {
                console.log(err)
              })

        
    }

}
</script>

<style>

</style>