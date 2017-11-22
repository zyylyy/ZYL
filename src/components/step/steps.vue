<template>
    <div class="steps">
        <slot></slot>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
//步骤条
.steps {
    font-size: 0;
    margin-top: 80px;
}

.steps .step:first-child .step_line {
    left: 50%;
}

.steps .step:last-child .step_line {
    right: 50%;
}

.step {
    display: inline-block;
    position: relative;
    vertical-align: top;
    color: #fff;
    .step_icon {
        position: relative;
        display: block;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        line-height: 30px;
        margin: 0 auto;
        z-index: 1;
    }
    .step_line {
        position: absolute;
        top: 13px;
        left: 0;
        right: 0;
        height: 4px;
    }
    .step_main {
        text-align: center;
    }
    .step_title {
        color: @primary-color;
        font-size: 14px;
        padding: 10px 0 3px 0;
    }
    .step_description {
        color: @primary-color;
        font-size: 12px;
    }
}
.step.default {
    .step_icon, .step_line {
        background: #ccc;
    }
}
.step.process {
    .step_icon, .step_line {
        background: @text-color;
    }
}
.step.finish {
    .step_icon, .step_line {
        background: @primary-color;
    }
}
</style>
<script type="text/babel">
    import steps from './steps'
    export default {
        ...steps
    }
</script>