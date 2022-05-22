/** 영화 상세 페이지 */
<template>
    <div id="detail">
        <span class="page-name">NAMU CINEMA🔥</span>
        <img class="poster" :src="movie.Poster"/>
        <div class="info-container">
            <div class="title">
                <p>{{ movie.Title }}</p>
                <img class="img left" :src="plant"/>
                <img class="img right" :src="plants"/>
            </div>
            <div class="rate-container">
                <RateComponent v-for="(rate, index) in movie.Ratings"
                    :key="index"
                    :name="rate.Source"
                    :value="rate.Value"
                    :img="rateImg[index]"/>
                <RateComponent
                    name="IMDB"
                    :value="movie.imdbRating"
                    :img="imdb"/>
            </div>
            <table class="info-table">
                <MovieInfoComponent name="상영일"
                    :content="movie.Released"/>
                <MovieInfoComponent name="런타임"
                    :content="movie.Runtime"/>
                <MovieInfoComponent name="장르"
                    :content="movie.Genre"/>
                <MovieInfoComponent name="감독"
                    :content="movie.Director"/>
                <MovieInfoComponent name="배우"
                    :content="movie.Actors"/>
                <MovieInfoComponent name="줄거리"
                    :content="movie.Plot"/>
            </table>
        </div>
        <div id="dim"></div>
    </div>
</template>

<script>
import plant from '../assets/images/plant.png'
import plants from '../assets/images/plants.png'
// 평점 이미지
import imdb from '../assets/images/imdb.png'
import metacritic from '../assets/images/metacritic.png'
import tomato from '../assets/images/tomato.png'
import internet from '../assets/images/tv.png'

// component
import RateComponent from '../components/RateComponent'
import MovieInfoComponent from '../components/MovieInfoComponent'

import { getMovieById } from '~/repository/Movie.js'

export default {
    components: { RateComponent, MovieInfoComponent },
    data() {
        return {
            rateImg: [
                internet, tomato, metacritic
            ],
            plant, plants, imdb,
            movie: {}
        }
    },
    mounted() { 
        const { id } = this.$route.query
        if (!id) return

        getMovieById({
            i: id,
            plot: 'full'
        }).then( res => {
            if (res.success) {
                this.movie = res
                console.log(res)
            }
        })
    }
}
</script>