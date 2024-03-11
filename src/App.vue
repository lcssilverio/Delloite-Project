<template>
  <nav>
    <router-link to="/">Homepage</router-link> |
    <router-link to="/about">Sobre o jogo</router-link> |
    <router-link to="/creator">Sobre o criador</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  color: black;
  background-color: #fbbc04;
  border: 1px solid darkgrey;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
