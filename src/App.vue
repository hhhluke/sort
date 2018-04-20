<template>
    <div id="app">
        <header>排序算法学习</header>
        <div class="wrapper">
            <div class="sidebar">
                <li v-for='item in  sortList' @click="to(item.link)">{{item.name}}</li>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {},
        data() {
            return {
                sortList:[{
                    name: '快速排序',
                    link: 'quickSort'
                },{
                    name: '冒泡排序',
                    link: 'bubbleSort'
                },{
                    name: '插入排序',
                    link: 'quickSort'
                },{
                    name: '堆排序',
                    link: 'heapSort'
                },{
                    name: '归并排序',
                    link: 'mergeSort'
                }]
            }
        },
        computed: {
        },
        methods:{
            to(link) {
                this.$router.push(link)
            }
        }
    }

</script>

<style lang="less">
* {
    padding: 0px;
    margin: 0px;
    background: #f5f5d5;
}
header {
    height: 60px;
    font-size: 48px;
    text-align: center;
}
.wrapper {
    display: flex;
    position: absolute;
    width: 1200px;
    left: 50%;
    transform: translate(-50%);
    margin-top: 40px;
    .sidebar {
        flex: 160px 0 0;
        padding: 10px;
        border-left: none;
        text-align: center;
        li {
            height: 40px;
            line-height: 40px;
            margin-bottom: 10px;
            list-style: none;
            cursor: pointer;
            font-size: 24px;
        }
    }
    .content {
        flex : 1;
        clear: both;
        padding: 10px;
        overflow: hidden;
        font-size: 24px;
        border: 3px solid #cccccc;
        border-radius: 10px;
    }
}
</style>
