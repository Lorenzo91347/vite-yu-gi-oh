<script>
import AppList from './AppList.vue';

export default{
    data(){

    },
    components:{
        AppList,
        
    }
}
</script>
<template>
<div class="background">
    <div class="dropdown">
        <div>Alien </div>
        <div>&#11206</div>
    </div>
    <div class="card-cnt">

        <AppList/>
    </div>
    
</div>
</template>
<style scoped lang="scss">
@use '../assets/styles/main.scss' as *;
.background{
    background-color: $main-color;
    height: 500px;
    padding-top: 25px;
    .dropdown{
        margin-left: 75px;
        text-align: center;
        background-color: white;
        width:160px;
        padding: 5px;
        color: rgb(94, 89, 89);
        display: flex;
        justify-content: space-between;
        border-radius: 5%;
    }
    .card-cnt{
        background-color: white;
        height: 100%;
        width: 1140px;
        margin: 20px auto 0;
    }


}






</style>