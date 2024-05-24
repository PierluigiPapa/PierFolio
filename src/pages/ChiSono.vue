<script>
export default {
  name: 'ChiSono',
  mounted() {
    setTimeout(() => {
      const nameElement = document.querySelector('.name');
      nameElement.classList.add('visible');
    }, 1000);

  },
  methods: {
    
  }
}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 d-flex justify-content-center mt-5">
                <h1 class="text-light">Piacere, <span class="name">Pierluigi!</span></h1>
            </div>

            <div class="col-6 mt-5">
                <h1 class="text-light d-flex justify-content-center">FOTO</h1>
            </div>
        </div>
    </div>
</template>

<style lang="scss">





</style>