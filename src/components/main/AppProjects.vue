<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

import AppFramework from './AppFramework.vue'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    AppFramework,
  },
  data () {
    return {
      projects: [
        {
          image: '../src/assets/images/Card_Pokemon.png',
          title: 'Card Pokémon',
        },
        {
          image: '../src/assets/images/MasterStudy.jpg',
          title: 'MasterStudy',
        },
        {
          image: '../src/assets/images/Yu_Gi_Oh.png',
          title: 'Yu-Gi-Oh',
        },
        {
          image: '../src/assets/images/BoolBnB.png',
          title: 'BoolBnB',
        },
      ],
    }
  }
})
</script>

<template>
  <div class="container-fluid gradient-bg">
    <h1 class="text-center text-light mt-5 fw-bold">Portfolio</h1>
  
    <div class="row justify-content-center">
      <div class="col mt-4 my-5">
        <Carousel :items-to-show="2.9" :wrap-around="true" :autoplay="3000">
          <Slide v-for="(project, index) in projects" :key="index">
            <div class="carousel__item d-flex flex-column align-items-center">
              <img :src="project.image" class="image-project"/>
            </div>
          </Slide>
        </Carousel>
      </div>
      <AppFramework/>
    </div>
  </div>
</template>

<style lang="scss">
@use "../../styles/partials/variables.scss" as *;

.gradient-bg {
  background: linear-gradient(#1D70A2, #173753);
}

.carousel__item {
  margin-right: 10px;

  .image-project {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
}
</style>
