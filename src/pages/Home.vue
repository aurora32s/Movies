<template>
    <div id="home">
        <div class="header">
            <div class="top">
                <span class="page-name">NAMU CINEMA🔥</span>
                <img class="img right" :src="plant"/>
                <img class="img left" :src="plants"/>
            </div>
            <div class="bottom">
                <input
                    class="input"
                    type="text"
                    v-model="title"
                    @keyup.enter="searchByTitle"/>
                <img
                    class="right"
                    :src="search"
                    @click="searchByTitle"/>
            </div>
        </div>
        <div class="grid-container">
            <PostComponent
                v-for="movie in movies"
                :key="movie.imdbID"
                :movie="movie"
                @click="onItemClicked"/>
        </div>
    </div>
</template>

<script>
import plant from '../assets/images/plant.png'
import plants from '../assets/images/plants.png'
import search from '../assets/images/search.png'
import test from '../assets/images/tv.png'

// component
import PostComponent from '~/components/PostComponent'

import { getMoviesByTitle } from '~/repository/Movie'

export default {
    components: {
        PostComponent
    },
    data() {
        return {
            plant, plants, test, search,
            title: '', // 검색 keyword(영화 이름)
            pageNo: 1, // 요청할 페이지 번호
            movies: [] // 영화 리스트
        }
    },
    methods: {
        searchByTitle() { // 영화 이름으로 검색
            this.pageNo = 1
            this.movies = []
            this.requestMovies()
        },
        requestMovies() {
            getMoviesByTitle({
                s: this.title,
                page: this.pageNo
            }).then(res => {
                if (res.success && res.Search) {
                    this.movies.push(...res.Search)

                    if (res.Search.length >= 10) {
                        // this.pageNo += 1
                        // this.requestMovies()
                    }
                }
            })
        },
        onItemClicked(movieId) {
            this.$router.push({
                path: '/detail',
                query: { id: movieId }
            })
        }
    }
}
</script>

<style lang="scss">
@font-face {
    font-family: 'DOHYEON';
    src: url('../assets/fonts/BMDOHYEON_ttf.ttf');
}
#home {
    padding: 14% 10% 0 10%;
    text-align: center;

    .header {
        padding: 0 20%;

        .top {
            position: relative;
            .page-name {
                position: absolute;
                left: 0;
                bottom: 0;
                color: white;
                font-family: 'DOHYEON';
            }
            .img.right {
                position: absolute;
                right: 0;
                bottom: 0;
            }
            .img.left {
                position: absolute;
                right: 36px;
                bottom: 0;
            }
        }
        .bottom {
            display: flex;
            height: 54px;
            border-radius: 8px;
            background-color: white;

            input {
                width: 100%;
                padding: 9px;
                border: none;
                outline: none;
                font-size: 25px;
                background: none;
            }
            .right {
                padding: 10px;
            }
        }
    }
    .img {
        width: 85px;
    }
    .grid-container {
        display: inline-grid;
        grid-gap: 6px;
        grid-template-columns: repeat(6, 1fr);
        padding-top: 45px;
    }
}
</style>