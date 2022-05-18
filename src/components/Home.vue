<template>
    <div>
        <button @click="move">move</button>
    </div>
</template>

<script>
export default {
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

<style>

</style>