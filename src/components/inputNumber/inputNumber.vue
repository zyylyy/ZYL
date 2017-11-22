<template>
    <div class="pg-input-number">
        <a 
            class="pg-input-number_decrease" 
            @click="decrease">
			-
        </a>
        <input 
            autocomplete="off" 
            type="text" 
            :min="min" 
            :max="max" 
            class="pg-input-number_inner " 
            v-model="number" @change="change">
        <a 
            class="pg-input-number_increase " 
            @click="increase">
			+
        </a>

    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .pg-input-number {
        display: inline-block;
        width: 100px;
        position: relative;
        text-align: center;
        .pg-input-number_decrease {
        	box-sizing: border-box;
        	display: inline-block;
            cursor: pointer;
            position: absolute;
            left: 0;
            width: 35px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background-color: @white-color;
            border: 1px solid @gray-color;
            font-size: 20px;
        }
        .pg-input-number_increase {
        	box-sizing: border-box;
            cursor: pointer;
            position: absolute;
            right: 0;
            width: 35px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background-color: @white-color;
            border: 1px solid @gray-color;
            font-size: 20px;
        }
        .pg-input-number_inner {
        	box-sizing: border-box;
        	display: inline-block;
            height: 30px;
            width: 50px;
            text-align: center;
            border: none;
            border-top: 1px solid @gray-color;
            border-bottom: 1px solid @gray-color;
            background-color: transparent;
        }
    }
</style>
<script type="text/babel">
    import inputNumber from './inputNumber'
    export default {
        ...inputNumber
    }
</script>