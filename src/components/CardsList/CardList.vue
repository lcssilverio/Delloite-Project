<template>
  <div class="card-list">
    <PostCard v-for="skin in skins" :key="skin.id" :item="skin" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import PostCard from "../PostCard/PostCard.vue";
import CsGoAPI from "../../services/api.js";

export default {

  components: {
    PostCard
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

    window.onscroll = () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        loadMore();
      }
    };

    return {
      skins,
      loadMore
    };
  },
};
</script>

<style>
.card-list {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 350px));
  grid-gap: 30px;
}
</style>
