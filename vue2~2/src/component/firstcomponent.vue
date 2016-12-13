<template>
<div id="secondcomponent">
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <p> 感谢 <a href="https://github.com/showonne">{{ author }}</a>大神的技术指导</p>
</div>
</template>

<script>
export default {
    data() {
        return {
            author: "微信 sam15999",
            articles: [],
        }
    },
    created() {
        console.log('created');
    },
    beforeCreate() {
        console.log('bc');
    },
    beforeMount() {
        console.log('bm');
    },
    mounted() {
        console.log('m');
    },
    beforeUpdate() {
        console.log('bu');
    },
    updated() {
        console.log('u');
    },
    acitvated() {
        console.log('a');
    },
    deactivated() {
        console.log('da');
    },
    beforeDestory() {
        console.log('bd');
    },
    destoryed() {
        console.log('d');
    }
}
</script>

<style>

</style>
