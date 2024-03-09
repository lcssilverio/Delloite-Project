<template>
  <div class="homepage">
    <CardList />
  </div>
</template>

<script>
import CardList from './components/CardsList/CardList.vue'
export default {
  name: 'App',
  components: {
    CardList,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}

.homepage {
  max-width: 100%;
  margin: 0;
  padding: 40px;
  background-color: white;
}
</style>
