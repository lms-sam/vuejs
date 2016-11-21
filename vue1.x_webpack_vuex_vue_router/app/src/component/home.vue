<template>
    <!-- <mt-header title="多个按钮" fixed>
      <div slot="left">
        <mt-button v-link="'/'" icon="back">返回</mt-button>
        <mt-button @click="handleClose">关闭</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header> -->
    <div>
        <s-header :item="msg"></s-header>
        <s-dialog :title="testTitle">
            <p  @click="logSomeT">
                con
            </p>
        </s-dialog>
        <tttt></tttt>
    </div>
   
</template>
<style  lang="scss">
    video{
        width: 200px;
        height: 200px;
        background:blue;
    }
</style>
<script>
    import { Header,Indicator,Toast} from 'mint-ui';
    import header from './common/header.vue';
    import dialog from '../utils/dialog.vue';
    // Vue.component(Header.name, Header);
    export default{
        data(){
            return{
                msg:'hello vue',
                testTitle:'testTitle'
            }
        },
        created() {
            // Indicator.open({
            //   text: '加载中...',
            //   spinnerType: 'fading-circle'
            // });
            // Toast('111111');
        },
        methods : {
            logSomeT : function () {
                if(typeof(this.msg)=='number'){
                    this.msg++;
                    return;
                }
                this.msg = 1;
            }
        },
        components:{
            // 'mt-header':Header
            's-header' : header,
            's-dialog':dialog,
            'tttt' : {
                template : '<div>ttttt</div>'
            }
        }
    }
</script>
