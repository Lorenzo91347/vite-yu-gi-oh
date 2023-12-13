import{ reactive } from 'vue';

export const store = reactive({
    searchText : '',
    loading : true,
    cards:[],
    cardsAPI:{
        apiURL:'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
        img:'card_images.image_url',
        names:'name',
        arch:'archetype'
    }
   
})