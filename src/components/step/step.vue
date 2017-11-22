<template>
    <div class="step" :style="[style]" :class="[currentStatus]">
        <div class="step_head">
            <div class="step_line">
            </div>
            <span class="step_icon">
                <slot name="icon">
                    <div>{{ index + 1 }}</div>
                </slot>
            </span>
        </div>
        <div class="step_main">
            <div class="step_title">
                <slot name="title">{{ title }}</slot>
            </div>
            <div class="step_description">
                <slot name="description">{{ description }}</slot>
            </div>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
//步骤条
.steps {
    font-size: 0;
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
        color: @text-color;
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
        background: @primary-color;
    }
}
.step.finish {
    .step_icon, .step_line {
        background: @primary-color;
    }
}
</style>
<script type="text/babel">
    export default {
        name: 'PgStep',
        props: {
            title: String,
            icon: String,
            description: String,
            status: {
                type: String,
                default: 'default'
            }
        },
        data() {
            return {
                index: -1,
                style: {},
                currentStatus: this.status
            }
        },
        beforeCreate() {
            this.$parent.steps.push(this)
        },
        mounted() {
            const parent = this.$parent
            const len = parent.steps.length
            const space = typeof parent.space === 'number' ? parent.space + 'px' : parent.space ? parent.space : (100 / len) + '%'
            this.style = { width: space }

            const unwatch = this.$watch('index', val => {
                this.$watch('$parent.active', this.updateStatus, { immediate: true })
                unwatch()
            })
        },
        methods: {
            updateStatus(val) {
                const prevChild = this.$parent.$children[this.index - 1]

                if (val > this.index) {
                    this.currentStatus = 'process'
                }
                else if (val === this.index) {
                    this.currentStatus = 'process'
                }
                else {
                    this.currentStatus = 'default'
                }
            }
        }
    }
</script>