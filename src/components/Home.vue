<template>
    <div id="home">
        <div class="header">
            <span class="page-name">NAMU CINEMA🔥</span>
            <img class="img-1" :src="plant">
            <img class="img-2" :src="plants"/>
            <input class="input" type="text"/>
        </div>
    </div>
</template>

<script>
import plant from '../assets/images/plant.png'
import plants from '../assets/images/plants.png'

export default {
    data() {
        return {
            plant, plants
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

<style>

</style>