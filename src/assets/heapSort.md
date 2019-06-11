# 堆排序

堆排序是利用堆这种数据结构而设计的一种排序算法，是一种选择排序，它的最坏，最好，平均时间复杂度均为O(nlogn)，它也是不稳定排序。

堆实际上是具有以下性质的完全二叉树：每个结点的值都大于或等于其左右孩子结点的值，称为大顶堆；或者每个结点的值都小于或等于其左右孩子结点的值，称为小顶堆。

大顶堆：

![bigheap](http://dry-image.test.upcdn.net/bigheap.png)

小顶堆：

![smallheap](http://dry-image.test.upcdn.net/smallheap.png)



由上面的介绍我们可以看出堆的第一个元素最大值或最小值，我们利用堆的这个性质，在排序的时候，直接将第一个元素和最后一个元素进行交换，然后从第一个元素开始进行向下调整至第n-1个元素，就形成了一个有序数列。
堆排序的步骤分为三步:
1. 建堆（升序建大堆，降序建小堆）
2. 交换数据
3. 向下调整

### 复杂度
| 平均时间复杂度  | 最好情况    |  最坏情况  |    空间复杂度
| --------       | -----      | :----:    |     :----:
| O(nlogn)      | O(nlogn)  |   O(n²)   |  O(1)

### 实现图解
1. 初始化堆

    ![init](http://dry-image.test.upcdn.net/initheap.png)
2. 创建大顶堆,从第一个非叶子节点开始，往上遍历，保证每个非叶子节点比它的叶子节点值大

    ![big](http://dry-image.test.upcdn.net/initheap1.png)
    =>
    ![big1](http://dry-image.test.upcdn.net/initheap2.png)

3. 将堆顶元素和末尾元素交换，使末尾元素最大，然后继续往上调整。这时候堆其实分成了两块，无序堆(1到n-1)和有序堆(n)

    ![](http://dry-image.test.upcdn.net/initheap3.png)
    =>
    ![](http://dry-image.test.upcdn.net/initheap4.png)

4. 重复步骤3,完成堆排序

    ![](http://dry-image.test.upcdn.net/initheap5.png)

### 实现代码

```
    heapSort(arr) {
        let len = arr.length

        if (len <= 1) return arr
        //init
        for(let i = Math.floor(len / 2 - 1); i >= 0; i--) {
            this.heapAdjust(arr, i , len)
        }
        for(let i =len - 1; i > 0; i--) {
            this.swap(0, i, arr)
            this.heapAdjust(arr, 0 , i)
        }
        return arr
    },
    heapAdjust(arr, i, len) {
        let left = 2 * i + 1,
            right = 2 * i + 2,
            largest = i
        if(left < len && arr[left] > arr[largest]) {
            largest = left
        }
        if(right < len && arr[right] > arr[largest]) {
            largest = right
        }
        if(largest != i) {
            this.swap(i, largest, arr)
            this.heapAdjust(arr, largest, len)
        }
    },
    swap(i, j, arr) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    },
```
