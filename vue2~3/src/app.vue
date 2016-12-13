<template>
<div>
    <nav-menu></nav-menu>
    <side-menu></side-menu>
    <div class="view-wrap">
        <router-view></router-view>
    </div>
</div>
</template>

<style lang="scss">
.view-wrap {
    margin-left: 190px;
    padding-top: 70px;
}
</style>

<script>
    import NavMenu from './components/navMenu.vue'
    import SideMenu from './components/sideMenu.vue'
    export default {
        name: 'app',
        components: {
            NavMenu,
            SideMenu
        },
        data() {
            return {

            }
        },
        created(){
            
        }
    }
</script>
