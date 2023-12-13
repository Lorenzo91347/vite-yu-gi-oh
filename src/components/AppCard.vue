<script>
export default{
    props:['img','name','archetype']
}
</script>
<template>
    <div>
        <img :src="img" alt="">
        <h4>{{ name }}</h4>
        <div>{{ archetype }}</div>
    </div>

</template>
<style lang="scss">
</style>