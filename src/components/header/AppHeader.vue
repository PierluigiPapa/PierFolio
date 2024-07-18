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
              <router-link :to="{ name: 'portfolio' }" class="nav-link">Portfolio</router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'progetti' }" class="nav-link">Progetti</router-link>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Contatti</a>
            </li>
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item">
                    <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
                  </a>
                </li>

                <li>
                  <a class="dropdown-item">
                    <router-link :to="{ name: 'chisono' }" class="nav-link">Chi sono</router-link>
                  </a>
                </li>

                <li>
                  <a class="dropdown-item">
                    <router-link :to="{ name: 'portfolio' }" class="nav-link">Portfolio</router-link>
                  </a>
                </li>

                <li>
                  <a class="dropdown-item">
                    <router-link :to="{ name: 'progetti' }" class="nav-link">Progetti</router-link>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <!-- // SECTION LINK_NAVBAR_RIGHT // -->
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
  
  .dropdown-menu,
  .dropdown-item {
    background-color: $gray;
  }

  .dropdown-item:hover,
  .dropdown-menu:hover{
    background-color: $gray;
    color: #2892D7;
    transition: background-color 0.3s, color 0.3s, filter 0.3s;
  }
}
</style>
