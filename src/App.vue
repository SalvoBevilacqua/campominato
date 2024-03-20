<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
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
</style>
