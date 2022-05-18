<template>
    <router-view></router-view>
</template>

<script>
import { getMoviesByTitle } from '~/repository/Movie'

export default {
    mounted() {
        getMoviesByTitle({
            s: 'frozen',
            page: 1
        }).then(res => console.log(res))
    }
}
</script>