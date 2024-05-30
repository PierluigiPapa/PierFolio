<script>
import { RouterLink } from 'vue-router';


export default {
  name: 'AppHeader',
}
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <!-- // SECTION LOGO_NAVBAR // -->
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Pierluigi Papa</a>
      </div>
      <!-- // SECTION LOGO_NAVBAR // -->

      <!-- // SECTION LINK_NAVBAR_RIGHT // -->
      <div class="navbar-right">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'chisono' }" class="nav-link">Chi sono</router-link>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Portfolio</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Progetti</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Competenze</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Contatti</a>
            </li>
          </ul>
        </div>
        <!-- // SECTION LINK_NAVBAR_RIGHT // -->
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@use "../../styles/partials/variables.scss" as *;

nav {
  background-color: $gray;

  .nav-link,
  .navbar-brand {
    color: white;
  }

  .nav-link:hover,
  .navbar-brand:hover {
    color: #2892D7;
    transition: background-color 0.3s, color 0.3s, filter 0.3s;
  }
}


</style>
