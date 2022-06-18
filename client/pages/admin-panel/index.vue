<template>
  <div>
    <h1 class="text-center">بازدید از سایت</h1>
    <v-sparkline
      :fill="fill"
      :gradient="selectedGradient"
      :line-width="width"
      :padding="padding"
      :smooth="radius || false"
      :value="value"
      auto-draw
      :auto-draw-duration="2000"
      auto-line-width
      height="80"
      show-labels
    ></v-sparkline>
    <v-card class="mx-auto text-center mt-16" color="green" max-width="600">
      <v-card-text>
        <v-sheet color="rgba(0, 0, 0, .12)">
          <v-sparkline
            :value="valueTwo"
            color="rgba(255, 255, 255, .7)"
            height="100"
            padding="24"
            stroke-linecap="round"
            smooth
          >
            <template v-slot:label="item"> ${{ item.value }} </template>
          </v-sparkline>
        </v-sheet>
      </v-card-text>

      <v-card-text>
        <div class="text-h5 font-weight-thin">
          فروش محصولات در 24 ساعت گذشته
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="justify-center">
        <v-btn  text> محصولات خریداری شده </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]
export default {
  name: 'admin',
  layout: 'admin',
  data() {
    return {
      fill: true,
      selectedGradient: gradients[4],
      gradients,
      padding: 8,
      radius: 10,
      value: [10, 50, 100, 1000, 1500, 500, 2000, 40, 50, 50,],
      width: 1,
      valueTwo: [423, 446, 675, 510, 590, 610, 760],
    }
  },
}
</script>

<style lang="scss" scoped></style>
