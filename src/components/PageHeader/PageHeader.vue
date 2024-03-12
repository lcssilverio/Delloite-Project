<template>
  <header class="page-header">
    <h2>{{ pageTitle }}</h2>
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">Sobre o jogo</router-link>
      <router-link to="/creator" class="nav-link">Sobre o criador</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Catálogo de Skins CS-GO'
    };
  }
};
</script>

<style scoped>
.page-header {
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  margin-left: 10px;
}

.nav-link:hover {
  text-decoration: underline;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none
}

nav a.router-link-exact-active {
  color: #000;
  box-shadow: 0 0 5px #eee;
  background-image: linear-gradient(to right, #F09819 0%, #EDDE5D 50%, #F09819 100%);
  border: 1px solid #a9a9a9;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
