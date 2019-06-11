<template>
    <div class="sortBox">
        <div v-html="mark" class="markBox"></div>
        <pre v-html="codeBox"></pre>
        <div class="sortDemo">
            <div>
                <p>请输入数组，逗号隔开</p>
                <input type="text" v-model="testArray">
                <p>{{array}}</p>
                <button @click="calArray">排序</button>
                <p>结果：{{doneArray}}</p>
            </div>
            <div>
                <p>排序过程</p>
                <div v-for="r in processArray">
                    <span class="numBox" v-for="c in r">{{c}}</span class="numBox">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import marked from 'marked'
    import Prism from 'prismjs'
    import 'prismjs/themes/prism.css'
    export default {
        name: 'HelloWorld',
        data() {
            return {
                sortIntroduction: `# 冒泡排序

排序算法的入门，应该都很熟悉吧，冒泡排序需要两个嵌套的循环， 其中, 外层循环移动游标，内层循环遍历游标及之后(或之前)的元素, 通过两两交换的方式, 每次只确保该内循环结束位置排序正确, 然后内层循环周期结束, 交由外层循环往后(或前)移动游标, 随即开始下一轮内层循环, 以此类推, 直至循环结束。
每次移动有一个值处于正确的位置，且不改变相同元素的位置，是稳定的算法。

### 复杂度

| 平均时间复杂度  | 最好情况    |  最坏情况  |    空间复杂度
| --------       | -----      | :----:    |     :----:
| O(n²)      | O(n²)  |   O(n²)   |  O(n²)
### 实现图解

![a](http://dry-image.test.upcdn.net/fdce56a6-fbb6-11e6-9cfd-3f82b9667b94.png)

### 实现代码
`,
                code: `
    bubbleSort(arr) {
        if (arr.length <= 1) return arr
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                }
            }
        }
        return arr
    }`,
                testArray: '12,26,31,22,5,9,13',
                doneArray: [],
                processArray: [],
            }
        },
        computed: {
            array() {
                return this.testArray.split(',').map(item => Number(item))
            },
            mark() {
                return marked(this.sortIntroduction)
            },
            codeBox() {
                return Prism.highlight(this.code, Prism.languages.javascript, 'javascript')
            }
        },
        methods: {
            bubbleSort(arr) {
                this.processArray = []
                if (arr.length <= 1) return arr
                for (let i = 0; i < arr.length - 1; i++) {
                    for (let j = 0; j < arr.length - 1 - i; j++) {
                        if (arr[j] > arr[j + 1]) {
                            let temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                        }
                    }
                    this.processArray.push(Array.from(arr))
                }
                return arr;
            },
            calArray() {
                this.doneArray = this.bubbleSort(this.array)
            }
        }
    }

</script>

<style>

</style>
