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
                <p>{{doneArray}}</p>
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
                sortIntroduction: `# 快速排序

> 快速排序是对冒泡排序的一种改进。它的基本思想是：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一不部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。

### 复杂度
| 平均时间复杂度  | 最好情况    |  最坏情况  |    空间复杂度
| --------       | -----      | :----:    |     :----:    
| O(nlog₂n)      | O(nlog₂n)  |   O(n²)   |  O(nlog₂n)

整个排序过程只需要三步：
1. 在数据集之中，选择一个元素作为"基准"（pivot）。
2. 所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
3. 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

### 实现图解:

![a](http://dry-image.test.upcdn.net/quicksort.png)

### 实现代码:
`,
                code: `
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
    }`,
                testArray: '12,26,31,22,5,9,13',
                doneArray: []
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
            quickSort(arr) {
                if (arr.length <= 1) return arr
                let right = [],
                    left = [],
                    base = arr.splice(Math.floor(arr.length / 2), 1)[0]
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] < base) {
                        left.push(arr[i])
                    } else {
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

<style>


</style>
