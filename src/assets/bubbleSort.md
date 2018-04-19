# 冒泡排序

排序算法的入门，应该都很熟悉吧，冒泡排序需要两个嵌套的循环， 其中, 外层循环移动游标，内层循环遍历游标及之后(或之前)的元素, 通过两两交换的方式, 每次只确保该内循环结束位置排序正确, 然后内层循环周期结束, 交由外层循环往后(或前)移动游标, 随即开始下一轮内层循环, 以此类推, 直至循环结束。
每次移动有一个值处于正确的位置，且不改变相同元素的位置，是稳定的算法。

### 实现图解
    
![a](http://owicv5j2l.bkt.clouddn.com/fdce56a6-fbb6-11e6-9cfd-3f82b9667b94.png)

### 实现代码
```
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
    }
```