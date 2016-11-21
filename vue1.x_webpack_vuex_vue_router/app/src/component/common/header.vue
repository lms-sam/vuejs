<template>
    <div class="logBox">
        <div v-if="islogined">
            logined
        </div>
        <div v-else="islogined">
            unlogined
        </div>
        <p>
            {{item}}
        </p>
    </div>
</template>
<style  lang="scss">

</style>
<script>
    import store from '../../vuex/store';
    export default{
        props : ['item'],
        data(){
            return{
                islogined:true
            }
        },
        components:{

        },
        store ,
        vuex : {
            getter : {

            },
            actions : {

            }
        }

    }
</script>
