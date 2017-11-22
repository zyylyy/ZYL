<template>
    <div id="app" class="base">
        <!-- 视图页面 -->
        <!-- <pg-header></pg-header> -->
        <router-view></router-view>
        <!-- <pg-footer></pg-footer> -->
        <!-- 提示信息 -->
        <pg-hud :show="isShowHUD" :type="optionsHUD.type" :content="optionsHUD.content"></pg-hud>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    #app {
        background-image: url('./assets/images/zyl-bg.png');
        background-position: 100% 100%;
    }
</style>

<script type="text/babel">
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'isShowHUD', // 提示信息是否显示的开关
                'optionsHUD', // 提示信息的参数内容
            ])
        }
    }
</script>
