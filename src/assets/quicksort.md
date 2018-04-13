# 快速排序

> 快速排序是对冒泡排序的一种改进。它的基本思想是：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一不部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。

整个排序过程只需要三步：
1. 在数据集之中，选择一个元素作为"基准"（pivot）。
2. 所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
3. 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

实现代码:
```
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
    }
```