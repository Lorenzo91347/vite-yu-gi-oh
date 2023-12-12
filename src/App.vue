<script >
import "@fontsource/open-sans"; 
import AppTitle from "./components/AppTitle.vue";
import AppSearch from "./components/AppSearch.vue";
export default{
    data(){
        return{}
    },
    components:{
    AppTitle,
    AppSearch
}
}
</script>

<template>
    <AppTitle/>
    <AppSearch/>
</template>

<style scoped lang="scss">
@use '../src/assets/styles/main.scss' as *;
</style>
