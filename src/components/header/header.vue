<template>
    <div class="header">
        <pg-wrapper>
            <ul>
                <li>
                    <router-link :to="{path: '/home'}">首页</router-link>
                </li>
                <li>
                    <router-link :to="{path: '/framework'}">机构介绍</router-link>
                </li>
                <li>
                    <router-link :to="{path: '/family'}">紫云来家族</router-link>
                </li>
                <li>
                    <router-link :to="{path: '/home'}">国际茶都</router-link>
                </li>
                <li>
                    <img class="logo" src="../../assets/images/nav_logo.jpg">
                </li>
                <li>
                    <router-link :to="{path: '/mall'}">商城</router-link>
                </li>
                <li>
                    <router-link :to="{path: '/yicheng'}">懿城</router-link>
                </li>
                <li>
                    <router-link :to="{path: '/information'}">资讯</router-link>
                </li>
                <li>
                    <router-link :to="{path: '/companyInfo'}">紫云来兮</router-link>
                </li>
                <li>
                    <div class="other">
                        <div class="search">
                            <input type="text" autocomplete="off" v-model="searchText">
                            <pg-icon class="search_btn" name="sousuo" @click="search"></pg-icon>
                        </div>
                        <div class="user" @click="goLogin">
                            <pg-icon class="user_btn" name="gerenzhongxin"></pg-icon>
                        </div>
                    </div>
                </li>
            </ul>
        </pg-wrapper>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .header {
        height: 95px;
        background: @primary-color;
        ul {
            text-align: center;
            li {
                display: inline-block;
                padding: 0 25px;
                font-size: 18px;
                height: 95px;
                line-height: 95px;
                .logo {
                    width: 105px;
                    height: 95px;
                    vertical-align: top;
                }
                .other {
                    color: #fff;
                    position: relative;
                    display: inline-block;
                    width: 68px;
                    height: 28px;
                    line-height: 28px;
                    border: 1px solid #fff;
                    border-radius: 4px;
                    vertical-align: middle;
                    .search, .user {
                        position: absolute;
                        top: 2px;
                        width: 30px;
                        height: 24px;
                        line-height: 24px;
                        &_btn {
                            position: relative;
                            font-size: 18px;
                            color: @primary-color;
                        }
                    }
                    .search {
                        left: 2px;
                        background: @primary-title-color;
                        &:hover input {
                            width: 150px;
                            padding: 0 35px 0 5px;
                        }
                        input {
                            position: absolute;
                            right: 0;
                            top: 0;
                            height: 24px;
                            width: 0px;
                            border: none;
                            background: @primary-title-color;
                            padding: 0 30px 0 0;
                            font-size: 12px;
                            color: @title-color;
                            transition: width .5s ease 0s;
                        }
                    }
                    .user {
                        cursor: pointer;
                        right: 2px;
                        &_btn {
                            color: #fff;
                        }
                    }
                }
                a {
                    color: @primary-title-color;
                    &:hover {
                        color: #fff;
                    }
                }
            }
        }
    }
</style>

<script type="text/babel">
    export default {
        name: 'PgHeader',
        data() {
            return {
                searchText: ''
            }
        },
        methods: {
            search() {
                console.log(this.searchText)
            },
            goLogin() {
                this.$router.push('/login')
            }
        }
    }
</script>