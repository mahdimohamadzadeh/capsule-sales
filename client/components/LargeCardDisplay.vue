<template>
  <div class="mx-auto mt-10" max-width="700">
    <h4 class="">{{ allCard.title }}</h4>
    <h6 class="">
      {{ allCard.snippet }}
    </h6>
    <v-card class="d-flex" elevation="0" max-width="700">
      <LargCard
        v-for="(card, index) in allCard.cards"
        :key="card.id"
        :card="card"
        :id="card.id"
        :classStyle="index == allCard.length - 1 ? 'mr-0' : ''"
      />
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LargeCardDisplay",
  props: ["allCard"],
};
</script>
