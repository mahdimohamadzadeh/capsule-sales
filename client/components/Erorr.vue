<template>
  <div>
    <div class="center-erorr">
      <img src="../assets/image/fe25.jpg" alt="" />
      <h1 v-if="statusCode === 404">Page Not Found</h1>
      <h1 v-else>An error occurred -  </h1>
    </div>
    <NuxtLink class="d-flex justify-center text-h6" to="/">
      Home page
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: ["statusCode"],
};
</script>

<style scoped>
.center-erorr {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.center-erorr > h1 {
  font-size: 2.5rem;
}
.center-erorr > img {
  width: 10rem;
  margin: 0 auto;
}
</style>
