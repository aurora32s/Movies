<template>
    <tr class="info-item">
        <td class="info-title">{{ name }}</td>
        <td class="info-content">{{ content }}</td>
    </tr>
</template>

<script>
export default {
    props: {
        'name': String,
        'content': String
    }
}
</script>

<style lang="scss">
@font-face {
    font-family: 'DOHYEON';
    src: url('../assets/fonts/BMDOHYEON_ttf.ttf');
}
@font-face {
    font-family: 'HANNA';
    src: url('../assets/fonts/BMHANNAAir_ttf.ttf');
}
.info-item {
    line-height: 30px;
}
.info-title {
    width: 20%;
    font-family: 'DOHYEON';
}
.info-content {
    word-break: break-all;
    font-family: 'HANNA';
}
</style>