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
                sortIntroduction: `# 插入排序
插入排序的设计初衷是往有序的数组中快速插入一个新的元素。它的算法思想是: 把要排序的数组分为两个部分, 一部分是数组的全部元素(除去待插入的元素), 另一部分是待插入的元素; 先将第一部分排序完成, 然后再插入这个元素。 其中第一部分的排序也是通过再次拆分为两部分来进行的。

### 复杂度
| 平均时间复杂度  | 最好情况    |  最坏情况  |    空间复杂度
| --------       | -----      | :----:    |     :----:
| O(n²)      | O(n)  |   O(n²)   |  O(1)

## 实现图解
![](http://dry-image.test.upcdn.net/TIM%E5%9B%BE%E7%89%8720180427161231.png)

## 实现代码
`,
                code: `insertSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let tmp = arr[i]
            let j = i - 1
            while(arr[j] > tmp && j >= 0) {
                arr[j + 1] = arr[j]
                j--
            }
            arr[j + 1] = tmp
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
            insertSort(arr) {
                this.processArray = []
                for (let i = 1; i < arr.length; i++) {
                    let tmp = arr[i]
                    let j = i - 1
                    while(arr[j] > tmp && j >= 0) {
                        arr[j + 1] = arr[j]
                        j--
                    }
                    arr[j + 1] = tmp
                    this.processArray.push(Array.from(arr))
                }
                return arr
            },
            calArray() {
                this.doneArray = this.insertSort(this.array)
            }
        }
    }

</script>

<style>

</style>
