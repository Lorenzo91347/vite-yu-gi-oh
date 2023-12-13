<script>
import {store} from '../store'
import AppCard from './AppCard.vue';
import AppCounter from './AppCounter.vue';
export default{
    data(){
        return{
            store,
        }
    },
    components:{
        AppCard,
        AppCounter
    },
    
}
</script>
<template>
     <div>
        <AppCounter/>
        <div class="list-cnt">
        <AppCard 
        v-for="card in store.cards"
        :name="card.name"
        :archetype="card.archetype"
        :img="card.card_images[0].image_url" />
        </div>

    </div>

</template>
<style scoped lang="scss">
 div{
    background-color: white;
    
    .list-cnt{ 
     width: 1040px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    }
 }
</style>