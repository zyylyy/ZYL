<template>
    <div class="header">
        <pg-wrapper>
            <ul>
                <li>
                    <img class="logo" src="../../assets/images/yc-logo.png">
                </li>
                <li>
                    <router-link :to="{path: '/yicheng'}">首页</router-link>
                </li>
                <li>
                    <router-link :to="{path: '/ycmall'}">懿城介绍</router-link>
                </li>
                <li>
                    <router-link :to="{path: '/yicheng'}">文化驿站</router-link>
                </li>
                <li>
                    <router-link :to="{path: '/ycmall'}">商城</router-link>
                </li>
                <li>
                    <router-link :to="{path: '/cloudcoinmall'}">云币商城</router-link>
                </li>
                <li>
                    <router-link :to="{path: '/yicheng'}">预定服务</router-link>
                </li>
                <li>
                    <router-link :to="{path: '/yicheng'}">懿城动态</router-link>
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
        height: 55px;
        background: rgba(255, 255, 255, 0.6);
        ul {
            text-align: center;
            li {
                display: inline-block;
                padding: 0 25px;
                font-size: 16px;
                height: 55px;
                line-height: 55px;
                .logo {
                    width: 132px;
                    height: 55px;
                    vertical-align: top;
                }
                .other {
                    color: #000;
                    position: relative;
                    display: inline-block;
                    width: 68px;
                    height: 28px;
                    line-height: 28px;
                    border: 1px solid rgba(0, 0, 0, 0.3);
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
                            color: #000;
                        }
                    }
                    .search {
                        left: 2px;
                        background: rgba(255, 255, 255, 0.6);
                        &:hover input {
                            width: 150px;
                            padding: 0 35px 0 5px;
                            background: rgba(255, 255, 255, 1);
                        }
                        input {
                            position: absolute;
                            right: 0;
                            top: 0;
                            height: 24px;
                            width: 0px;
                            border: none;
                            background: rgba(255, 255, 255, 0.6);
                            padding: 0 30px 0 0;
                            font-size: 12px;
                            color: #000;
                            transition: all .5s ease 0s;
                        }
                    }
                    .user {
                        cursor: pointer;
                        right: 2px;
                        &_btn {
                            color: #000;
                        }
                    }
                }
                a {
                    color: #000;
                    &:hover {
                        color: @primary-color;
                    }
                }
            }
        }
    }
</style>

<script type="text/babel">
    export default {
        name: 'YcHeader',
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