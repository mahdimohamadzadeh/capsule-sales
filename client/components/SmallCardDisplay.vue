<template>
  <div class="countainer">
    <h3 class="ml-3">{{ allCard.title }}</h3>
    <div class="Image">
      <SmallCard v-for="card in allCard.cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallCardDisplay",
  props: ["allCard"],
};
</script>

<style scoped>
.countainer {
  width: 700px;
  margin: 10px auto;
  display: grid;
  justify-content: space-between;
}
.Image {
  width: 700px;
  display: flex;
  flex-wrap: wrap;
}
</style>
