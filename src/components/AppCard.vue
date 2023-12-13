<script>
export default{
    props:['img','name','archetype']
}
</script>
<template>
    <div class="card-info">
        <img :src="img" alt="">
        <h5>{{ name }}</h5>
        <div>{{ archetype }}</div>
    </div>

</template>
<style scoped lang="scss">
@use '../assets/styles/main.scss' as *;
.card-info{
    background-color: $main_color;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid;
    height: 400px;
    text-align: center;
    margin-bottom: 10px;
    h5{
        color: white;
    }
    img{
        width: 185px;
    }
}

</style>