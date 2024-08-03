<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      language: [
        {
          logo: '../src/assets/images/Html.png',
        },
        {
          logo: '../src/assets/images/CSS.png',
        },
        {
          logo: '../src/assets/images/Bootstrap.png',
        },
        {
          logo: '../src/assets/images/JavaScript.png',
        },
        {
          logo: '../src/assets/images/VueJS.png',
        },
        {
          logo: '../src/assets/images/AngularLogo.png',
        },
        {
          logo: '../src/assets/images/Vite.png',
        },
        {
          logo: '../src/assets/images/SASS.png',
        },
        {
          logo: '../src/assets/images/PHP.png',
        },
        {
          logo: '../src/assets/images/MySQL.png',
        },
        {
          logo: '../src/assets/images/PostgreSQL.png',
        },
        {
          logo: '../src/assets/images/Laravel_logo.png',
        },
        {
          logo: '../src/assets/images/SpringBootLogo.png',
        },
      ]
    }
  },
  computed: {
    itemsToShow() {
      const width = window.innerWidth;
      if (width >= 1200) {
        return 10.70;
      } else if (width >= 992) {
        return 4;
      } else if (width >= 768) {
        return 3;
      } else {
        return 1.5;
      }
    }
  }
})
</script>

<template>
  <h1 class="text-center text-light fw-bold">Competenze tecniche</h1>

  <div class="row justify-content-center">
    <div class="col mt-4 my-5">
      <Carousel :itemsToShow="itemsToShow" :wrapAround="true" :transition="500" :autoplay="3000">
        <Slide v-for="(language, index) in language" :key="index">
          <div class="carousel__item d-flex flex-column align-items-center me-6">
            <img :src="language.logo" class="image">
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 1;
  transform: rotateY(0) scale(0.8); 
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(0) scale(0.8);  
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(0) scale(0.8); 
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(0) scale(0.8);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1); 
}

.image {
  width: 100px;
  height: 100px;
}
</style>
