<template>
  <div>
    <v-card class="mx-auto mt-6" elevation="0" max-width="800">
      <v-list-item>
        <v-list-item-content class="pl-5">
          <v-card-title class="text-h3">
            کپسول آتش نشانی خود را پیدا کنید
          </v-card-title>
          <v-card-subtitle class="text-body-1 mt-2 text-justify py-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد
          </v-card-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="310" class="mt-8">
          <img
            src="../assets/svg/fire-extinguisher.svg"
            alt="A photo titled Fire Extinguisher"
          />
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions class="pa-4">
        <v-btn depressed class="rounded-pill py-5 px-10 " color="error">
          <nuxt-link to="/products" class="text-decoration-none white--text "
            >تماشا کنید</nuxt-link
          >
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'Hero',
}
</script>
