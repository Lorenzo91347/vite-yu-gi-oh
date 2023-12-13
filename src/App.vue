<script >
import "@fontsource/open-sans"; 
import axios from 'axios'
import {store} from './store'
import AppTitle from "./components/AppTitle.vue";
import AppList from "./components/AppList.vue";
import AppSearch from "./components/AppSearch.vue";
export default{
    data(){
        return{
            store,
        }
    },

    created() {
    axios
      .get(this.store.cardsAPI.apiURL)
      .then((response) => {
        console.log(response);
        this.store.cards = response.data.data;
      });
    },
    components:{
        AppTitle,
        AppList,
        AppSearch
    }
};
</script>

<template>
    <AppTitle/>
    <AppSearch/>
   


</template>

<style scoped lang="scss">
@use '../src/assets/styles/reset.scss'as *;
@use '../src/assets/styles/main.scss' as *;
</style>
