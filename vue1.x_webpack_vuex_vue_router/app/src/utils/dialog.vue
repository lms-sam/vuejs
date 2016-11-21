<template>
<div class="dialog" v-if="isShow">
    <div class="dialogTitle">{{title}}</div>
    <span class="closeBtn" @click="closeDialog">x</span>
    <slot></slot>
</div>
</template>
<style>

</style>
<script>
export default {
    props : ['title'],
    data() {
        return {
            isShow : true
        }
    },
    methods: {
        closeDialog: function() {
            this.isShow = !this.isShow;
        }
    }
}
</script>
