<script>
import axios from 'axios'
import {store} from '../store'
import AppCard from './AppCard.vue';
export default{
    data(){
        return{
            store
        }
    },
    components:{
        AppCard
    },
    created() {
    axios
      .get(
        this.store.cardsAPI.apiURL    
      )
      .then((response) => {
        this.store.cards = response.data.results;
      });
}}
</script>
<template>
    <div>
        <AppCard 
        v-for="card in store.cards"
        :name="card.name"
        :archetype="card.archetype"
        :img="card.card_images.img"
/>
    </div>

</template>
<style scoped lang="scss">
div{
    height: 100%;
   
}
</style>