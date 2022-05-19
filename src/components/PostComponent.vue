<template>
    <div class="movie">
        <img
            v-if="movie.Poster && movie.Poster != 'N/A'"
            class="post"
            :src="movie.Poster"
            @click="$emit('click', movie.imdbID)"/>
        <span v-else>이미지 없음</span>
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
    display: flex;
    width: 190px;
    height: 260px;
    justify-content: center;
    align-items: center;
    color: white;

    .post {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
}
</style>