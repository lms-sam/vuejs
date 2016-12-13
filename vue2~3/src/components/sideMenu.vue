<template>
    <div>
        sm
        <a href="#" @click="countUp" class="cursor">++++++</a>
    </div>
</template>

<style lang="scss">
.view-wrap {
    margin-left: 190px;
    padding-top: 70px;
}
.cursor{
    cursor: pointer;
}
</style>

<script>
export default {
    name: 'sm',
    data() {
        return {

        }
    },
    methods:{
        countUp : function(){
            this.$store.commit('INCREMENT',true);
        }
    }
}
</script>
