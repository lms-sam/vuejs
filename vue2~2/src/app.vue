<template>
    <div class="">
        {{msg}}
        <p>
            <router-link to="./first">first</router-link>
            <router-link to="./second">second</router-link>
        </p>
        <router-view></router-view>
    </div>

</template>
<style lang="scss">

</style>
<script>
    export default{
        name: 'App',
        data(){
            return{
                msg:'hello vue'
            }
        },
        components : {

        },
        render(){
            console.log('render');
            console.log(this.$store,'*******');
        }
    }
</script>
