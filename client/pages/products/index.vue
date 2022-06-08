<template>
  <div>
    <div class="d-flex flex-column">
      <LargeCardDisplay
        v-for="allCard in allLargesCards"
        :key="allCard.id"
        :allCard="allCard"
      />
      <SmallCardDisplay
        v-for="allCard in allSmallsCard"
        :key="allCard.id"
        :allCard="allCard"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  head: {
    title: 'products page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'show all products'
      }
    ],
  },
  asyncData({ store }) {
    return store.dispatch("getLargeCardSections","getSmallCardSections");
  },
  computed: {
    ...mapGetters(["allLargesCards", "allSmallsCard"]),
  },
};
</script>

<style lang="scss" scoped></style>
