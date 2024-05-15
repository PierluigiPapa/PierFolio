<script>
export default {
    name: 'AppMain',
}
</script>

<template>

<div class="container-fluid">
    <div class="row">
        <div class="col-md-6 d-flex justify-content-center mt-5">
            <div>
                <h1>Hello, I'm <span class="name">Pierluigi Papa</span></h1>
                <h3>Ruolo</h3>
                <p>Descrizione</p>
            </div>
        </div>

        <div class="col-md-6 d-flex justify-content-center mt-5">
            <div>
                <h1>FOTO</h1>
            </div>
        </div>
    </div>
</div>

</template>



<style lang="scss">
@use "../../styles/partials/variables.scss" as *;

.container-fluid {
    background-color: $gray;
    color: white;

    .name {
        color: #1D70A2;
        font-weight: bold;
    }
}
</style>