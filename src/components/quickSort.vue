<template>
<div class="sortBox">
    <div v-html="sortIntroduction"></div>
    <div class="sortDemo">
        <div>
            <p>请输入数组，逗号隔开</p>
            <input type="text" v-model="testArray">
            <p>{{array}}</p>
            <button @click="calArray">生成排序过程</button>
            <p>{{doneArray}}</p>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                sortIntroduction: '123',
                testArray: '',
                doneArray: []
            }
        },
        computed:{
            array() {
                return this.testArray.split(',').map(item => Number(item))
            }
        },
        methods: {
            quickSort(arr) {
                if(arr.length <= 1) return arr
                let right = [],left = [],base = arr.splice(Math.floor(arr.length / 2),1)[0]
                for(let i = 0 ; i < arr.length ; i++) {
                    if(arr[i] < base) {
                        left.push(arr[i])
                    }else {
                        right.push(arr[i])
                    }
                }
            　　return this.quickSort(left).concat([base], this.quickSort(right))
            },
            calArray() {
                this.doneArray = this.quickSort(this.array)
            }
        }
    }

</script>

<style scoped>


</style>
