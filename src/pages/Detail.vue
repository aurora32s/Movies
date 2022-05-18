/** 영화 상세 페이지 */
<template>
    <div id="detail">
        <span class="page-name">NAMU CINEMA🔥</span>
        <img class="poster" :src="test"/>
        <div class="info-container">
            <div class="title">
                <p>1917</p>
                <img class="img left" :src="plant"/>
                <img class="img right" :src="plants"/>
            </div>
            <div class="rate-container">
                <div class="rate">
                    <span class="rate-name">Internet Movie Database</span>
                    <img class="rate-img" :src="test">
                    <span class="rate-cost">6.8/10</span>
                </div>
                <div class="rate">
                    <span class="rate-name">Internet Movie Database</span>
                    <img class="rate-img" :src="test">
                    <span class="rate-cost">6.8/10</span>
                </div>
                <div class="rate">
                    <span class="rate-name">Internet Movie Database</span>
                    <img class="rate-img" :src="test">
                    <span class="rate-cost">6.8/10</span>
                </div>
                <div class="rate">
                    <span class="rate-name">Internet Movie Database</span>
                    <img class="rate-img" :src="test">
                    <span class="rate-cost">6.8/10</span>
                </div>
            </div>
            <table class="info-table">
                <tr class="info-item">
                    <td class="info-title">상영일</td>
                    <td class="info-content">10 Jan 2020</td>
                </tr>
                <tr class="info-item">
                    <td class="info-title">런타임</td>
                    <td class="info-content">119 min</td>
                </tr>
                <tr class="info-item">
                    <td class="info-title">장르</td>
                    <td class="info-content">Action, Drama, War</td>
                </tr>
                <tr class="info-item">
                    <td class="info-title">감독</td>
                    <td class="info-content">Sam Mendes</td>
                </tr>
                <tr class="info-item">
                    <td class="info-title">배우</td>
                    <td class="info-content">Dean-Chales Chapman, George Mackay, Daniel Mays...</td>
                </tr>
                <tr class="info-item">
                    <td class="info-title">줄거리</td>
                    <td class="info-content">줄거리 길게...</td>
                </tr>
            </table>
        </div>
        <div id="dim"></div>
    </div>
</template>

<script>
import plant from '../assets/images/plant.png'
import plants from '../assets/images/plants.png'
import test from '../assets/images/tv.png'

export default {
    props: ['id'],
    data() {
        return {
            plant, plants,
            test
        }
    },
    mounted() {
        console.log(this.id)
    }
}
</script>

<style lang="scss">
$pre_depth: 3;
$mid_depth: 2;
$post_depth: 1;

#detail {
    display: flex;
    height: 100%;

    .page-name {
        position: fixed;
        top: 0;
        left: 0;
        padding: 25px;
        color: white;
        z-index: $pre_depth;
    }
    .poster {
        object-fit: contain;
        width: 40%;
    }
    .info-container {
        width: 70%;
        padding: 30px;
        z-index: $pre_depth;

        .title {
            width: 100%;
            position: relative;
            padding-top:25px;
            border-bottom: 2px solid white;
            p {
                margin: 0;
                font-size: 65px;
                color: white;
            }
            .img {
                position: absolute;
                width: 85px;
                bottom: 0;

                &.left {
                    right: 10%;
                }
                &.right {
                    right: 0;
                }
            }
        }
        .rate-container {
            display: flex;
            height: 248px;
            justify-content: center;
            .rate {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 155px;
                margin: 15px 2px;
                border: 1px dashed white;
                border-radius: 15px;
                color: white;
                text-align: center;
                img {
                    width: 100px;
                    object-fit: contain;
                }
            }
        }
        .info-table {
            width: 100%;
            padding-top: 25px;
            color: white;
            .info-item {
                line-height: 30px;
            }
            .info-title {
                width: 20%;
            }
        }
    }
}

#dim {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000a1;
    z-index: $mid_depth;
}
</style>