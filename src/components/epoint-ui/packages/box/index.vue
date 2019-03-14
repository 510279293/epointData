<template>
    <transition name="fade">
        <aside ref="pg_box" class="box" @click="close" v-show="isShowBox">
            <transition name="opacity">
                <div class="aside_bg" v-if="isShowBox">
                </div>
            </transition>
            <transition name="faderight">
                <div class="container" v-if="isShowBox" @click.stop>
                    <slot></slot>
                </div>
            </transition>
        </aside>
    </transition>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .box {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        // overflow-x: hidden;
        // overflow-y: scroll;
        z-index: 2001;
        .container {
            // padding: 20px;
            min-height: 100%;
            background: #fff;
            position: absolute;
            right: 0;
            width: 768px;
            top: 0;
            bottom: 0;
            overflow-y: auto;
            overflow-x: hidden;
            box-sizing: border-box;
        }
    }
    .aside_bg {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
    }
    .fade-enter-active {
        animation: fadein .6s;
    }
    .fade-leave-active {
        animation: fadeout .6s;
    }
    .opacity-enter-active {
        animation: opacityin .6s linear;
    }
    .opacity-leave-active {
        animation: opacityout .6s linear;
    }
    .faderight-enter-active {
        animation: faderightin .6s ease;
    }
    .faderight-leave-active {
        animation: faderightout .6s ease;
    }
    @keyframes fadein {
        0% { opacity: 1 }
        100% { opacity: 1 }
    }
    @keyframes fadeout {
        0% { opacity: 1 }
        100% { opacity: 1 }
    }
    @keyframes opacityin {
        0% { opacity: 0 }
        100% { opacity: 1 }
    }
    @keyframes opacityout {
        0% { opacity: 1 }
        100% { opacity: 0 }
    }
    @keyframes faderightin {
        0% { transform: translate3d(100%, 0, 0) }
        100% { transform: none }
    }
    @keyframes faderightout {
        0% { transform: none }
        100% { transform: translate3d(100%, 0, 0) }
    }
</style>
<script type="text/babel">
  import index from './index'
  export default {
    ...index
  }
</script>
