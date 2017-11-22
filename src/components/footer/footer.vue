<template>
    <div class="footer">
        <pg-wrapper>
            <ul>
                <li>懿城</li>
                <li>国际茶都</li>
                <li>大宗拍卖</li>
                <li>全民拍</li>
            </ul>
            <p class="footer_icp">青岛紫云来实业有限公司2017©版权所有</p>
        </pg-wrapper>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .footer {
        height: 220px;
        .wrapper {
            border-top: 1px solid @primary-color;
        }
        ul {
            text-align: center;
            padding-top: 30px;
            li {
                display: inline-block;
                padding: 0 30px;
                color: @text-color;
                font-size: 14px;
            }
        }
        &_icp {
            text-align: center;
            margin-top: 16px;
            font-size: 12px;
            color: @text-color;
            opacity: .5;
        }
    }
</style>

<script type="text/babel">
    export default {
        name: 'PgFooter'
    }
</script>