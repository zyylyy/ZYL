<template>
    <i 
        class="iconfont" 
        :class="[
            name ? 'icon-icon_' + name : ''
        ]"
        @click="tap">
    </i>
</template>
<script type="text/babel">
    export default {
        name: 'PgIcon',
        props: {
            name: String
        },
        methods: {
            tap() {
                this.$emit('click')
            }
        }
    }
</script>