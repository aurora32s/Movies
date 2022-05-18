<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
@import "~/assets/scss/_color.scss";

html, body {
    padding: 0;
    margin: 0;
}

body {
    background-color: $background;
}
</style>