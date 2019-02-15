<template>
<el-container id='elContainerIndex'>
    <el-aside id='howLong' width="200px">
        <div class="leftLogo" :style="styleObject"></div>
        <div class="circular" @click="openMenu">
            <i :class="{'el-icon-d-arrow-left': isLeft, 'el-icon-d-arrow-right': !isLeft}"></i>
        </div>
        <el-scrollbar style="height: calc(100% - 60px); overflow-y: auto;">
            <el-menu class="el-menu-vertical-demo" background-color="#eeeeee" :collapse="isCollapse"
                :collapse-transition='false' @open="handleOpen" @close="handleClose" router
                v-for="(item, index) in menuList.menu" :key="index">
                <el-submenu v-if="item.children.length>0" :index="item.id">
                    <template slot="title">
                        <i :class="item.icon"></i><span slot="title">{{item.title}}</span>
                    </template>
                    <el-menu-item-group v-for="(itemChildren, indexChildren) in item.children" :key="indexChildren">
                        <!-- {{itemChildren.path}} -->
                        <el-menu-item :route="itemChildren.path" :index="itemChildren.id">{{itemChildren.title}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item v-else :index="item.id" :route="item.path">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.title}}</span>
                </el-menu-item>
            </el-menu>
        </el-scrollbar>
    </el-aside>
    <el-container>
        <el-header id="header">
            <el-breadcrumb separator-class="el-icon-loading">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/canbbIndex' }">I can BB</el-breadcrumb-item>
                <el-breadcrumb-item>for1</el-breadcrumb-item>
                <el-breadcrumb-item>for2</el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>
        <el-main id="main">
            <router-view />
        </el-main>
    </el-container>
</el-container>
</template>

<script>
let bgImg = require('../../assets/img/leftlogo.jpg')
import menuList from './menuList.js'
export default {
    data() {
        return {
            menuList,
            isLeft: true,
            isCollapse: false,
            styleObject: {
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover'
            }
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        openMenu () {
            this.isCollapse = !this.isCollapse
            this.isLeft = !this.isLeft
        }
    }, 
    watch: {
        "isCollapse" (val) {
            document.getElementById('howLong').style.width=(val?'65px': '200px');
        }
    },
    created () {
    }
}
</script>

<style lang="less">
#main {
    background-color: rgba(255, 255, 255, 0.4);
}
#elContainerIndex, #howLong {
    position: relative;
}
#elContainerIndex{
    .leftLogo{
        height: 60px;
        width: 100%;
    }
    .circular{
        position: relative;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        right: 0;
        margin-right: -16px;
        margin-top: -13px;
        z-index: 9999999;
    }
    .circular>i{
        width: 26px;
        height: 26px;
        text-align: center;
        color: #000;
        line-height: 25px;
        border-radius: 100%;
        background: #eeeeee;
        z-index: 2000;
        cursor: pointer;
    }
}
.el-header, .el-footer {
    color: #fff;
    text-align: center;
    line-height: 60px;
}
#header{
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    .el-breadcrumb{
        line-height: 60px;
    }
}
#howLong {
    .el-menu {
        border-right-width: 0;
    }
    .el-scrollbar__wrap {
        overflow-y: scroll;
        overflow-x: hidden;
        height: 100%;
    }
    .el-menu-item-group__title {
        padding: 0;
    }
}
.el-aside {
    color: #fff;
    background: #eeeeee;
    overflow: visible;
}
body > .el-container {
    margin-bottom: 40px;
}
/* #howLong:after { */
    /* content: '';
    width: 86px;
    height: 86px;
    background: url('../../assets/img/cat1.jpg') no-repeat;
    background-size: cover;
    position:absolute;
    left: 0;
    bottom: 0;
    z-index: 999; */
/* } */
/* #wbheader{
    background-color: antiquewhite;
} */
  
</style>
