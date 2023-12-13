<script >
import "@fontsource/open-sans"; 
import AppTitle from "./components/AppTitle.vue";
import AppList from "./components/AppList.vue";
import AppSearch from "./components/AppSearch.vue";
export default{
    data(){
        return{}
    },
    
    components:{
    AppTitle,
    AppList,
    AppSearch
}
}
</script>

<template>
    <AppTitle/>

    <AppList/>

    <AppSearch/>
</template>

<style scoped lang="scss">
@use '../src/assets/styles/reset.scss'as *;
@use '../src/assets/styles/main.scss' as *;
</style>
