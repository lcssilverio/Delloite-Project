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
    //const postCards = ref([]);
    const pageSize = ref(20);
    const currentPage = ref(1);

    const skins = ref([])
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
.title {
  color: white;
}

.card-list {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 350px));
  grid-gap: 30px;
}

.load-more-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
