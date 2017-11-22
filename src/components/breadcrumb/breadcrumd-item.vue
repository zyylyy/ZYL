<template>
    <span>
        <router-link v-if="href" :to="{path: href}">
            <slot></slot>
        </router-link>
        <span v-else>
            <slot></slot>
        </span>
        <span v-html="separator" v-if="!showSeparator"></span>
        <span v-else>
            <slot name="separator"></slot>
        </span>
    </span>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
//面包屑
    span, a {
        color: @text-color;
        font-size: 12px;
    }
    a:hover {
        color: @primary-color;
    }
</style>
<script type="text/babel">
    export default {
        name: 'PgBreadcrumdItem',
        props: {
            href: {
                type: String
            }
        },
        data() {
            return {
                separator: '',
                showSeparator: false
            }
        },
        mounted() {
            this.showSeparator = this.$slots.separator !== undefined
        }
    }
</script>