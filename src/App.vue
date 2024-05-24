<script>
import AppHeader from './components/Header/AppHeader.vue';
// import AppMain from './components/Main/AppMain.vue';
import AppFooter from './components/Footer/AppFooter.vue';

export default {
    components: {
        AppHeader,
        // AppMain,
        AppFooter,
    }
}
</script>


<template>
    

    <AppHeader/>
    <router-view></router-view>
    <AppMain/>
    <AppFooter/>

</template>

<style lang="scss" scoped>
@use "./styles/general.scss" as *;




</style>
