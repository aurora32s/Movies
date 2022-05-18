<template>
    <div class="movie">
        <img class="post" :src="movie.Poster"/>
    </div>
</template>

<script>
export default {
    props: ['movie'],
    created() {
        console.log(this.movie)
    }
}
</script>

<style lang="scss">
.movie {
    width: 190px;
    height: 260px;

    .post {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
}
</style>