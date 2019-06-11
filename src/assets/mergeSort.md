# 归并排序

归并排序是建立在归并操作上的一种有效的排序算法,该算法是采用分治法的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为二路归并。

分的过程很像一棵二叉树，所以时间复杂度为o(log2n)。治的过程是合并两个数组，取两个数组的第一个值比较，较小的放进去，所以时间复杂度为o(n)

### 复杂度
| 平均时间复杂度  | 最好情况    |  最坏情况  |    空间复杂度
| --------       | -----      | :----:    |     :----:
| O(nlogn)      | O(nlogn)  |   O(nlogn)   |  O(1)

### 实现图解

![mergesort](http://dry-image.test.upcdn.net/mergeSort.png)


### 实现代码
```
mergeSort(arr) {
    if (arr.length <= 1) return arr
    let m = arr.length >> 1,
        left = arr.slice(0, m)
        right = arr.slice(m)
    return this.merge(this.mergeSort(left), this.mergeSort(right))
},
merge(left, right) {
    let res = []
    while(left.length && right.length) {
        res.push(left[0] > right[0] ? right.shift() : left.shift())
    }
    return res.concat(left.length ? left : right)
},
```
