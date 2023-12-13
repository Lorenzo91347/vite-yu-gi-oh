<script>
import {store} from '../store'
export default{
    data(){
        return{
            store
        }
    }
}
</script>
<template>
<div>Found {{ store.cards.length }} cards</div>
</template>
<style scoped lang="scss">
div{
    width: 1020px;
    margin: auto;
    height: 55px;
    background-color: #212529;
    color: white;
    line-height: 50px;
    padding-left: 20px;
}
</style>