<template>
    <div id="home">
        <div class="header">
            <div class="top">
                <span class="page-name">NAMU CINEMA🔥</span>
                <img class="img right" :src="plant"/>
                <img class="img left" :src="plants"/>
            </div>
            <div class="bottom">
                <input class="input" type="text"/>
                <img class="right" :src="search"/>
            </div>
        </div>
        <div class="grid-container">
            <div class="movie">
                <img class="post" :src="test"/>
            </div>
            <div class="movie">
                <img class="post" :src="test"/>
            </div>
            <div class="movie">
                <img class="post" :src="test"/>
            </div>
            <div class="movie">
                <img class="post" :src="test"/>
            </div>
            <div class="movie">
                <img class="post" :src="test"/>
            </div>
            <div class="movie">
                <img class="post" :src="test"/>
            </div>
            <div class="movie">
                <img class="post" :src="test"/>
            </div>
            <div class="movie">
                <img class="post" :src="test"/>
            </div>
            <div class="movie">
                <img class="post" :src="test"/>
            </div>
            <div class="movie">
                <img class="post" :src="test"/>
            </div>
            <div class="movie">
                <img class="post" :src="test"/>
            </div>
            <div class="movie">
                <img class="post" :src="test"/>
            </div>
            <div class="movie">
                <img class="post" :src="test"/>
            </div>
            <div class="movie">
                <img class="post" :src="test"/>
            </div>
            <div class="movie">
                <img class="post" :src="test"/>
            </div>
            <div class="movie">
                <img class="post" :src="test"/>
            </div>
            <div class="movie">
                <img class="post" :src="test"/>
            </div>
        </div>
    </div>
</template>

<script>
import plant from '../assets/images/plant.png'
import plants from '../assets/images/plants.png'
import search from '../assets/images/search.png'
import test from '../assets/images/tv.png'

export default {
    data() {
        return {
            plant, plants, test, search
        }
    },
    methods: {
        move() {
            this.$router.replace({
                path: '/detail',
                query: { id: '123' }
            })
        }
    }
}
</script>

<style lang="scss">
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
        grid-template-columns: repeat(4, 1fr);
        padding-top: 45px;
    }
    .movie {
        width: 190px;
        height: 260px;
        border: 1px solid white;

        .post {
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
    }
}
</style>