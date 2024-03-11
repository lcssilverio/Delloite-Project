<template>
  <div class="home">
    <div class="homepage">
      <CardList />
    </div>
  </div>
</template>

<script>
import CardList from '../components/CardsList/CardList.vue'

export default {
  name: 'HomeView',
  components: {
    CardList,
  },
}
</script>

<style>
.homepage {
  max-width: 100%;
  margin: 0;
  padding: 40px;
  background-color: white;
}
</style>
