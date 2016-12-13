<template>
<div>
    nM
    {{count}}
</div>
</template>

<style lang="scss">
.view-wrap {
    margin-left: 190px;
    padding-top: 70px;
}
</style>

<script>
export default {
    name: 'nm',
    data() {
        return {

        }
    },
    created(){
        console.log('mount');
        console.log(this.$store.state.count);
        console.log(this.$store.commit('INCREMENT',true));
    },
    computed: {
        count () {
          return this.$store.state.count
        }
      }
}
</script>
