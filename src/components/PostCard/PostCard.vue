<template>
  <div class="card">
    <img :src="image" alt="Card Image" class="card-image" />
    <div class="card-content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    description: String
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

.card-image {
  width: 200px;
  height: 200px;
  padding-top: 20px;
  object-fit: cover;
}

.card-content {
  padding: 10px;
}
</style>
