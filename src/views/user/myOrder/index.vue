<template>
    <div class="user">
        <pg-info></pg-info> 
        <div class="order">
            <pg-tab @click="clickTab"></pg-tab>
            <pg-table></pg-table>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .order {
    	background-color: #ffffff;
    }
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>