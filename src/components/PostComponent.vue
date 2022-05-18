<template>
    <div class="movie">
        <img
            class="post"
            :src="movie.Poster"
            @click="$emit('click', movie.imdbID)"/>
    </div>
</template>

<script>
export default {
    props: ['movie'],
    emits: ['click']
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