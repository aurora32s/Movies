/** 영화 상세 페이지 */
<template>
    <h1>Detail</h1>
</template>

<script>
export default {
    props: ['id'],
    mounted() {
        console.log(this.id)
    }
}
</script>

<style>

</style>