<template>
  <!--<div class="homepage">-->
  <h1>Scroll Infinito com Cards</h1>
  <div class="card-list">
    <PostCard v-for="card in postCards" :key="card.id" :image="card.image" :title="card.title"
      :description="card.description" />
  </div>
  <button v-if="showLoadMoreButton" @click="loadMore" class="load-more-button">Carregar mais</button>
  <!--</div>-->
</template>

<script>
import { ref, computed } from 'vue';
import PostCard from "../PostCard/PostCard.vue";

export default {

  components: {
    PostCard
  },
  data() {
    return {
      cards: [],
      pageSize: 20,
      currentPage: 1
    };
  },
  setup() {
    const postCards = ref([]);
    const pageSize = ref(20);
    const currentPage = ref(1);


    const mockData = [
      {
        id: 1,
        image: 'https://cli.vuejs.org/favicon.png',
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
      },
      {
        id: 2,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 3,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 4,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 5,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 6,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 7,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 8,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 9,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 10,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 11,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 12,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 13,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 14,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 15,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 16,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 17,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 18,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 19,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 20,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
      {
        id: 21,
        title: "Um bom titulo",
        description: "Descrição incrivel sobre como eu amo fazer códigos para ganhar a vida",
        image: 'https://cli.vuejs.org/favicon.png'
      },
    ];

    const loadInitialData = () => {
      postCards.value = mockData.slice(0, pageSize.value);
    };
    loadInitialData();


    const loadMore = () => {
      const startIndex = currentPage.value * pageSize.value;
      const endIndex = startIndex + pageSize.value;
      postCards.value = [...postCards.value, ...mockData.slice(startIndex, endIndex)];
      currentPage.value++;
    };


    const showLoadMoreButton = computed(() => {
      return postCards.value.length < mockData.length;
    });

    return {
      postCards,
      showLoadMoreButton,
      loadMore
    };
  }
};
</script>

<style scoped>
.card-list {
  display: grid;
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
