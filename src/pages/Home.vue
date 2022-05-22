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
        <div
            class="grid-container"
            ref="infinite_list"
            @scroll="onListScroll">
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
            isNextPage: false, // 다음 페이지 존재 여부
            movies: [] // 영화 리스트
        }
    },
    methods: {
        searchByTitle() { // 영화 이름으로 검색
            this.pageNo = 1
            this.movies = []
            this.requestMovies()
        },
        async requestMovies() {
            const response = await getMoviesByTitle({
                s: this.title,
                page: this.pageNo
            })
            console.log(response)
            if (response.success && response.Search) {
                this.movies.push(...response.Search)

                // 결과 최대 길이가 10개이므로 그 이상일 때는
                // 다음 페이지 존재
                this.isNextPage = response.Search.length >= 10
            }
        },
        onItemClicked(movieId) {
            this.$router.push({
                path: '/detail',
                query: { id: movieId }
            })
        },
        onListScroll() {
            const listEl = this.$refs.infinite_list

            if (listEl.scrollTop + listEl.clientHeight >=
                listEl.scrollHeight - 15) {
                    if (this.isNextPage) {
                        this.pageNo += 1
                        this.requestMovies()
                    }
                }
        }
    }
}
</script>