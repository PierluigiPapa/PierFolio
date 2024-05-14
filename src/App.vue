<script>
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';

export default {
    components: {
        AppHeader,
        AppMain,
    }
}
</script>


<template>
    <AppHeader/>
    <AppMain/>
</template>

<style lang="scss" scoped>
@use "./styles/general.scss" as *;




</style>
