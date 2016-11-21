<template>
    <div class="">
        {{msg}}
        <p>
            <router-link to="./first">first</router-link>
            <router-link to="./second">second</router-link>
        </p>
        <my-component></my-component>
        <router-view></router-view>
    </div>

</template>
<style lang="scss">

</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components : {
            'my-component' : {
                name : 'test',
                template : '<div>test</div>'
            }
        },
        render(){
            console.log('render');
        }
    }
</script>
