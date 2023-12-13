<script>
import AppList from './AppList.vue';
import {store} from '../store'
export default{
    data(){
        return{
            store,
        }
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
        width: 1140px;
        margin: 20px auto 0;
        padding-top: 35px;
    }


}


</style>