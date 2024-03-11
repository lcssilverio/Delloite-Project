<template>
  <h1 class="title">Catálogo de skins CSGO</h1>
  <div class="card-list">
    <PostCard v-for="skin in skins" :key="skin.id" :image="skin.image" :title="skin.name"
      :description="skin.description" />
  </div>
  <button v-if="showLoadMoreButton" @click="loadMore" class="load-more-button">CARREGAR MAIS...</button>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import PostCard from "../PostCard/PostCard.vue";
import CsGoAPI from "../../services/api.js";

export default {

  components: {
    PostCard
  },
  data() {
    return {
      cards: [],
      pageSize: 20,
      currentPage: 1,
    };
  },
  setup() {
    const skins = ref([])
    const pageSize = ref(20);
    const currentPage = ref(1);

    let data = [];

    const fetchSkins = async () => {
      CsGoAPI.get()
        .then((response) => {
          data = response.data.slice(0, 200)
          skins.value = data.slice(0, pageSize.value);
        })
        .catch(error => console.log(error))
    }
    onMounted(fetchSkins);

    const loadMore = () => {
      const startIndex = currentPage.value * pageSize.value;
      const endIndex = startIndex + pageSize.value;
      skins.value = [...skins.value, ...data.slice(startIndex, endIndex)];
      currentPage.value++;
    };


    const showLoadMoreButton = computed(() => {
      return skins.value.length < data.length;
    });

    return {
      skins,
      showLoadMoreButton,
      loadMore
    };
  },
};
</script>

<style scoped>
.card-list {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 350px));
  grid-gap: 30px;
}

.load-more-button {
  background-image: linear-gradient(to right, #F09819 0%, #EDDE5D 51%, #F09819 100%);
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: black;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  border: 1px solid lightgrey;
}

.load-more-button:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>
