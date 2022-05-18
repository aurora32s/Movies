<template>
    <div class="movie">
        <img class="post" :src="test"/>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
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
</style>