<script>
export default {
    name: 'AppFooter',
}
</script>

<template>
<nav class="navbar navbar-expand-lg">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand fs-6">&copy; Pierluigi Papa</a>
        </div>
        
        <div class="navbar-right">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Torna su</a>
                    </li>
                </ul>
            </div>
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
}

</style>