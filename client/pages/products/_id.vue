<template>
  <div>
    <!-- <div v-if="product" class="countainer">
      <div class="Top-countainer">
        <div class="Image-countainer">
          <img
            class="image"
            :src="require(`@/assets/image/${product.image}`)"
            alt=""
          />
        </div>
        <div class="text-right">
          <h1>{{ product.title }}</h1>
          <h4>{{ product.snippet }}</h4>
          <RentModel :product="product"/>
        </div>
      </div>
      <div class="main">
        <h3>consectetur adipisicing elit</h3>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dolor doloremque unde maiores porro dolore tempore
        </h5>
      </div>
      <div class="main">
        <h3>consectetur adipisicing elit</h3>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dolor doloremque unde maiores porro dolore tempore
        </h5>
      </div>
      <div class="main">
        <h3>consectetur adipisicing elit</h3>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dolor doloremque unde maiores porro dolore tempore
        </h5>
      </div>
      <div class="main">
        <h3>consectetur adipisicing elit</h3>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          dolor doloremque unde maiores porro dolore tempore
        </h5>
      </div>
      <hr>
      <p class="my-15">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, nihil.
        A quo debitis soluta, sapiente aliquam voluptatibus ex, repudiandae
        maiores recusandae suscipit doloribus consectetur! Unde quasi fugit
        adipisci magni in?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, nihil.
        A quo debitis soluta, sapiente aliquam voluptatibus ex, repudiandae
        maiores recusandae suscipit doloribus consectetur! Unde quasi fugit
        adipisci magni in?
      </p>
      <Reviwo/>
    </div>
    <div v-else><Error/></div> -->
    {{product}}
  </div>
</template>

<script>
import Error from "../../components/Erorr.vue";
export default {
  head: {
    title: 'details product page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'details product'
      }
    ],
  },
    computed: {
        product() {
            return this.$store.getters.getProductById(1);
        },
    },
    components: { Error }
};
</script>

<style scoped>
.countainer {
  width: 800px;
  margin: 10px auto;
}
.Top-countainer {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  margin: 40px 0 100px 0;
}
.Image-countainer {
  margin: 0 10px;
}
.image {
  width: 420px;
  height: 280px;
}
.text-right {
  height: 280px;
  background-color: rgb(255, 222, 199);
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 0 10px;
}
.text-right > h1 {
  margin-top: 10px;
  text-align: center;
  font-size: 30px;
}
.text-right > h4 {
  margin-top: 20px;
  font-size: 13px;
  text-align: justify;
}
.main{
  margin-left: 7px;
  width: 100%;
  height: 80px;
}
.countainer > p{
  margin-top: 15px;
}
</style>
