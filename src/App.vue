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
        <div class="container">
            <AppHeader />
            <div class="mt-4 pt-4 ms_width" id="mydom">
                <AppMain />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
