<template>
    <div>user</div>
    
</template>
<style  lang="scss">
    
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }, 
        created() {
            console.log(this.$route.params);
        },
        components:{
            
        }
    }
</script>
