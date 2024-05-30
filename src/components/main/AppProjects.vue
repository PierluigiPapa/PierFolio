<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
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
        <Carousel :items-to-show="2.5" :wrap-around="true" :autoplay="3000">
          <Slide v-for="(project, index) in projects" :key="index">
            <div class="carousel__item d-flex flex-column align-items-center">
              <img :src="project.image" :alt="project.title" class="img-fluid m-2"/>
              <span class="project-title">{{ project.title }}</span>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>



<style lang="scss">
@use "../../styles/partials/variables.scss" as *;



.gradient-bg {
  background: linear-gradient(#1D70A2, #173753);
}

.carousel__item {
  position: relative;

  img {
    width: 100%;
    height: 15rem;
    transition: filter 0.3s, opacity 0.3s;
    object-fit: cover;
  }

  img:hover {
    filter: brightness(0.5);
  }

  .project-title {
    position: absolute;
    bottom: 43%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-weight: bold;
    font-size: 25px;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }
  
  &:hover .project-title {
    opacity: 1;
  }
}
</style>
