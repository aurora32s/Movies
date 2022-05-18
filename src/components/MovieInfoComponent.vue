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
.info-item {
    line-height: 30px;
}
.info-title {
    width: 20%;
}
.info-content {
    word-break: break-all;
}
</style>