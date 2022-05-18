<template>
    <div class="rate">
        <span class="rate-name">{{ name }}</span>
        <img class="rate-img" :src="img">
        <span class="rate-cost">{{ value }}</span>
    </div>
</template>

<script>
export default {
    props: {
        'name': String,
        'value': String,
        'img': String
    }
}
</script>

<style lang="scss">
.rate {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 155px;
    margin: 15px 2px;
    border: 1px dashed white;
    border-radius: 15px;
    color: white;
    text-align: center;
    .rate-name {
        padding: 7px;
    }
    img {
        width: 65px;
        object-fit: contain;
    }
}
</style>