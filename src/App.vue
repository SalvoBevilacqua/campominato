<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
    data() {
        return {
        };
    },
    components: {
        AppHeader,
        AppMain,
    }
}
</script>

<template>
    <div class="wrapper">
        <AppHeader />
        <div class="my-4 ms_width">
            <AppMain />
        </div>
    </div>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
@import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
</style>
