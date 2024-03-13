<template>
  <div class="card">
    <div class="card-header">
      <img :src="item.image" alt="Card Image" class="card-image" />
      <button v-if="isFavorite()" @click="addFavorite()" class="favorite-button">
        Favoritar
      </button>
      <button v-else @click="removeFavorite()" class="unfavorite-button">Favorito</button>
    </div>
    <div class="card-content">
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    item: Object,
  },

  methods: {
    isFavorite() {
      const array = this.$store.state.favorites
      const index = array.findIndex((obj) => obj.id === this.item.id)
      if (index) {
        return true
      } else {
        return false
      }
    },
    addFavorite() {
      const index = this.$store.state.favorites.findIndex((obj) => obj.id === this.item.id)
      if (index) {
        this.$store.commit('addFavorites', this.item)
      }
    },
    removeFavorite() {
      this.$store.commit('removeFavorites', this.item.id)
    }
  }
};
</script>

<style scoped>
.card {
  border: 2px solid darkgray;
  border-radius: 10px;
  overflow: hidden;
  background-color: lightgrey;
}

.card:hover {
  transform: scale(1.04) perspective(0px);
  box-shadow: 6px 6px 6px rgba(60, 60, 93, 0.33);
  border: 2px solid white;
}

.card-header {
  display: flex;
  justify-content: end;
  padding: 5px;
}

.card-image {
  width: 200px;
  height: 200px;
  padding-top: 20px;
  object-fit: cover;
}

.card-content {
  padding: 10px;
}

button {
  height: 30px;
  width: 65px;
  border: 1px solid #a9a9a9;
  border-radius: 8px;
  cursor: pointer;
}

.favorite-button {
  border: 1px solid #000;

}

.unfavorite-button {
  background-image: linear-gradient(to right, #F09819 0%, #EDDE5D 50%, #F09819 100%);
  font-weight: bold
}
</style>
