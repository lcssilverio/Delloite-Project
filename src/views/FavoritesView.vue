<template>
  <div class="favorite-page">
    <div v-if="hasCards" class="card-list">
      <PostCard v-for="skin in $store.state.favorites" :key="skin.id" :item="skin" />
    </div>
    <div v-else>
      <h2>Não há favoritos...</h2>
    </div>
  </div>
</template>

<script>
import PostCard from "../components/PostCard/PostCard.vue"

export default {
  data() {
    return {
      hasCards: Boolean
    }
  },
  components: { PostCard },
  mounted() {
    if (this.$store.state.favorites.length !== 0) {
      this.hasCards = true
    } else {
      this.hasCards = false
    }
  },
}

</script>

<style>
.favorite-page {
  padding: 40px;
}
</style>
