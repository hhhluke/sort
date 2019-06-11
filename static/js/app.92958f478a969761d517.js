webpackJsonp([1],{"7DLN":function(t,r){},"B/Pk":function(t,r){},"KUo/":function(t,r){},NHnr:function(t,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=n("xd7I"),a={render:function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{attrs:{id:"app"}},[n("header",[t._v("排序算法学习")]),t._v(" "),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"sidebar"},t._l(t.sortList,function(r){return n("li",{on:{click:function(n){return t.to(r.link)}}},[t._v(t._s(r.name))])}),0),t._v(" "),n("div",{staticClass:"content"},[n("router-view")],1)])])},staticRenderFns:[]};var i=n("C7Lr")({name:"App",components:{},data:function(){return{sortList:[{name:"快速排序",link:"quickSort"},{name:"冒泡排序",link:"bubbleSort"},{name:"插入排序",link:"insertSort"},{name:"堆排序",link:"heapSort"},{name:"归并排序",link:"mergeSort"}]}},computed:{},methods:{to:function(t){this.$router.push(t)}}},a,!1,function(t){n("B/Pk")},null,null).exports,o=n("3XdE"),s=n("xjgd"),u=n.n(s),c=n("b91K"),l=n.n(c),p=(n("YNrn"),{name:"HelloWorld",data:function(){return{sortIntroduction:'# 快速排序\n\n> 快速排序是对冒泡排序的一种改进。它的基本思想是：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一不部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。\n\n### 复杂度\n| 平均时间复杂度  | 最好情况    |  最坏情况  |    空间复杂度\n| --------       | -----      | :----:    |     :----:    \n| O(nlog₂n)      | O(nlog₂n)  |   O(n²)   |  O(nlog₂n)\n\n整个排序过程只需要三步：\n1. 在数据集之中，选择一个元素作为"基准"（pivot）。\n2. 所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。\n3. 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。\n\n### 实现图解:\n\n![a](http://dry-image.test.upcdn.net/quicksort.png)\n\n### 实现代码:\n',code:"\n    quickSort(arr) {\n        if(arr.length <= 1) return arr\n        let right = [],left = [],base = arr.splice(Math.floor(arr.length / 2),1)[0]\n        for(let i = 0 ; i < arr.length ; i++) {\n            if(arr[i] < base) {\n                left.push(arr[i])\n            }else {\n                right.push(arr[i])\n            }\n        }\n    　　return this.quickSort(left).concat([base], this.quickSort(right))\n    }",testArray:"12,26,31,22,5,9,13",doneArray:[]}},computed:{array:function(){return this.testArray.split(",").map(function(t){return Number(t)})},mark:function(){return u()(this.sortIntroduction)},codeBox:function(){return l.a.highlight(this.code,l.a.languages.javascript,"javascript")}},methods:{quickSort:function(t){if(t.length<=1)return t;for(var r=[],n=[],e=t.splice(Math.floor(t.length/2),1)[0],a=0;a<t.length;a++)t[a]<e?n.push(t[a]):r.push(t[a]);return this.quickSort(n).concat([e],this.quickSort(r))},calArray:function(){this.doneArray=this.quickSort(this.array)}}}),h={render:function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"sortBox"},[n("div",{staticClass:"markBox",domProps:{innerHTML:t._s(t.mark)}}),t._v(" "),n("pre",{domProps:{innerHTML:t._s(t.codeBox)}}),t._v(" "),n("div",{staticClass:"sortDemo"},[n("div",[n("p",[t._v("请输入数组，逗号隔开")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.testArray,expression:"testArray"}],attrs:{type:"text"},domProps:{value:t.testArray},on:{input:function(r){r.target.composing||(t.testArray=r.target.value)}}}),t._v(" "),n("p",[t._v(t._s(t.array))]),t._v(" "),n("button",{on:{click:t.calArray}},[t._v("排序")]),t._v(" "),n("p",[t._v(t._s(t.doneArray))])])])])},staticRenderFns:[]};var d=n("C7Lr")(p,h,!1,function(t){n("7DLN")},null,null).exports,v=n("kfHR"),m=n.n(v),g={name:"HelloWorld",data:function(){return{sortIntroduction:"# 冒泡排序\n\n排序算法的入门，应该都很熟悉吧，冒泡排序需要两个嵌套的循环， 其中, 外层循环移动游标，内层循环遍历游标及之后(或之前)的元素, 通过两两交换的方式, 每次只确保该内循环结束位置排序正确, 然后内层循环周期结束, 交由外层循环往后(或前)移动游标, 随即开始下一轮内层循环, 以此类推, 直至循环结束。\n每次移动有一个值处于正确的位置，且不改变相同元素的位置，是稳定的算法。\n\n### 复杂度\n\n| 平均时间复杂度  | 最好情况    |  最坏情况  |    空间复杂度\n| --------       | -----      | :----:    |     :----:\n| O(n²)      | O(n²)  |   O(n²)   |  O(n²)\n### 实现图解\n\n![a](http://dry-image.test.upcdn.net/fdce56a6-fbb6-11e6-9cfd-3f82b9667b94.png)\n\n### 实现代码\n",code:"\n    bubbleSort(arr) {\n        if (arr.length <= 1) return arr\n        for (let i = 0; i < arr.length - 1; i++) {\n            for (let j = 0; j < arr.length - 1 - i; j++) {\n                if (arr[j] > arr[j + 1]) {\n                    let temp = arr[j]\n                    arr[j] = arr[j + 1]\n                    arr[j + 1] = temp\n                }\n            }\n        }\n        return arr\n    }",testArray:"12,26,31,22,5,9,13",doneArray:[],processArray:[]}},computed:{array:function(){return this.testArray.split(",").map(function(t){return Number(t)})},mark:function(){return u()(this.sortIntroduction)},codeBox:function(){return l.a.highlight(this.code,l.a.languages.javascript,"javascript")}},methods:{bubbleSort:function(t){if(this.processArray=[],t.length<=1)return t;for(var r=0;r<t.length-1;r++){for(var n=0;n<t.length-1-r;n++)if(t[n]>t[n+1]){var e=t[n];t[n]=t[n+1],t[n+1]=e}this.processArray.push(m()(t))}return t},calArray:function(){this.doneArray=this.bubbleSort(this.array)}}},f={render:function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"sortBox"},[n("div",{staticClass:"markBox",domProps:{innerHTML:t._s(t.mark)}}),t._v(" "),n("pre",{domProps:{innerHTML:t._s(t.codeBox)}}),t._v(" "),n("div",{staticClass:"sortDemo"},[n("div",[n("p",[t._v("请输入数组，逗号隔开")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.testArray,expression:"testArray"}],attrs:{type:"text"},domProps:{value:t.testArray},on:{input:function(r){r.target.composing||(t.testArray=r.target.value)}}}),t._v(" "),n("p",[t._v(t._s(t.array))]),t._v(" "),n("button",{on:{click:t.calArray}},[t._v("排序")]),t._v(" "),n("p",[t._v("结果："+t._s(t.doneArray))])]),t._v(" "),n("div",[n("p",[t._v("排序过程")]),t._v(" "),t._l(t.processArray,function(r){return n("div",t._l(r,function(r){return n("span",{staticClass:"numBox"},[t._v(t._s(r))])}),0)})],2)])])},staticRenderFns:[]};var _=n("C7Lr")(g,f,!1,function(t){n("bHQ3")},null,null).exports,y={name:"HelloWorld",data:function(){return{sortIntroduction:"# 堆排序\n\n堆排序是利用堆这种数据结构而设计的一种排序算法，是一种选择排序，它的最坏，最好，平均时间复杂度均为O(nlogn)，它也是不稳定排序。\n\n堆实际上是具有以下性质的完全二叉树：每个结点的值都大于或等于其左右孩子结点的值，称为大顶堆；或者每个结点的值都小于或等于其左右孩子结点的值，称为小顶堆。\n\n大顶堆：\n\n![bigheap](http://dry-image.test.upcdn.net/bigheap.png)\n\n小顶堆：\n\n![smallheap](http://dry-image.test.upcdn.net/smallheap.png)\n\n\n\n由上面的介绍我们可以看出堆的第一个元素最大值或最小值，我们利用堆的这个性质，在排序的时候，直接将第一个元素和最后一个元素进行交换，然后从第一个元素开始进行向下调整至第n-1个元素，就形成了一个有序数列。\n堆排序的步骤分为三步: \n1. 建堆（升序建大堆，降序建小堆）\n2. 交换数据\n3. 向下调整\n\n### 复杂度\n| 平均时间复杂度  | 最好情况    |  最坏情况  |    空间复杂度\n| --------       | -----      | :----:    |     :----:    \n| O(nlogn)      | O(nlogn)  |   O(n²)   |  O(1)\n\n### 实现图解\n1. 初始化堆\n\n    ![init](http://dry-image.test.upcdn.net/initheap.png)\n2. 创建大顶堆,从第一个非叶子节点开始，往上遍历，保证每个非叶子节点比它的叶子节点值大\n\n    ![big](http://dry-image.test.upcdn.net/initheap1.png)\n    =>\n    ![big1](http://dry-image.test.upcdn.net/initheap2.png)\n\n3. 将堆顶元素和末尾元素交换，使末尾元素最大，然后继续往上调整。这时候堆其实分成了两块，无序堆(1到n-1)和有序堆(n)\n\n    ![](http://dry-image.test.upcdn.net/initheap3.png)\n    =>\n    ![](http://dry-image.test.upcdn.net/initheap4.png)\n\n4. 重复步骤3,完成堆排序\n\n    ![](http://dry-image.test.upcdn.net/initheap5.png)\n\n### 实现代码\n",code:"\n    heapSort(arr) {\n        let len = arr.length\n\n        if (len <= 1) return arr\n        //init\n        for(let i = Math.floor(len / 2 - 1); i >= 0; i--) {\n            this.heapAdjust(arr, i , len)\n        }\n        for(let i =len - 1; i > 0; i--) {\n            this.swap(0, i, arr)\n            this.heapAdjust(arr, 0 , i)\n        }\n        return arr\n    },\n    heapAdjust(arr, i, len) {\n        let left = 2 * i + 1,\n            right = 2 * i + 2,\n            largest = i\n        if(left < len && arr[left] > arr[largest]) {\n            largest = left\n        }\n        if(right < len && arr[right] > arr[largest]) {\n            largest = right\n        }\n        if(largest != i) {\n            this.swap(i, largest, arr)\n            this.heapAdjust(arr, largest, len)\n        }\n    },\n    swap(i, j, arr) {\n        [arr[i], arr[j]] = [arr[j], arr[i]] \n    },",testArray:"12,26,31,22,5,9,13",doneArray:[]}},computed:{array:function(){return this.testArray.split(",").map(function(t){return Number(t)})},mark:function(){return u()(this.sortIntroduction)},codeBox:function(){return l.a.highlight(this.code,l.a.languages.javascript,"javascript")}},methods:{heapSort:function(t){var r=t.length;if(r<=1)return t;for(var n=Math.floor(r/2-1);n>=0;n--)this.heapAdjust(t,n,r);for(var e=r-1;e>0;e--)this.swap(0,e,t),this.heapAdjust(t,0,e);return t},heapAdjust:function(t,r,n){var e=2*r+1,a=2*r+2,i=r;e<n&&t[e]>t[i]&&(i=e),a<n&&t[a]>t[i]&&(i=a),i!=r&&(this.swap(r,i,t),this.heapAdjust(t,i,n))},swap:function(t,r,n){var e=[n[r],n[t]];n[t]=e[0],n[r]=e[1]},calArray:function(){this.doneArray=this.heapSort(this.array)}}},A={render:function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"sortBox"},[n("div",{staticClass:"markBox",domProps:{innerHTML:t._s(t.mark)}}),t._v(" "),n("pre",{domProps:{innerHTML:t._s(t.codeBox)}}),t._v(" "),n("div",{staticClass:"sortDemo"},[n("div",[n("p",[t._v("请输入数组，逗号隔开")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.testArray,expression:"testArray"}],attrs:{type:"text"},domProps:{value:t.testArray},on:{input:function(r){r.target.composing||(t.testArray=r.target.value)}}}),t._v(" "),n("p",[t._v(t._s(t.array))]),t._v(" "),n("button",{on:{click:t.calArray}},[t._v("排序")]),t._v(" "),n("p",[t._v("结果："+t._s(t.doneArray))])])])])},staticRenderFns:[]};var b=n("C7Lr")(y,A,!1,function(t){n("oyPp")},null,null).exports,k={name:"HelloWorld",data:function(){return{sortIntroduction:"# 归并排序\n\n归并排序是建立在归并操作上的一种有效的排序算法,该算法是采用分治法的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为二路归并。\n\n分的过程很像一棵二叉树，所以时间复杂度为o(log2n)。治的过程是合并两个数组，取两个数组的第一个值比较，较小的放进去，所以时间复杂度为o(n)\n\n### 复杂度\n| 平均时间复杂度  | 最好情况    |  最坏情况  |    空间复杂度\n| --------       | -----      | :----:    |     :----:    \n| O(nlogn)      | O(nlogn)  |   O(nlogn)   |  O(1)\n\n### 实现图解\n\n![mergesort](http://dry-image.test.upcdn.net/mergeSort.png)\n\n\n### 实现代码\n",code:"mergeSort(arr) {\n    if (arr.length <= 1) return arr\n    let m = arr.length >> 1,\n        left = arr.slice(0, m)\n        right = arr.slice(m)\n    return this.merge(this.mergeSort(left), this.mergeSort(right))\n},\nmerge(left, right) {\n    let res = []\n    while(left.length && right.length) {\n        res.push(left[0] > right[0] ? right.shift() : left.shift())\n    }\n    return res.concat(left.length ? left : right)\n}\n",testArray:"12,26,31,22,5,9,13",doneArray:[],processArray:[]}},computed:{array:function(){return this.testArray.split(",").map(function(t){return Number(t)})},mark:function(){return u()(this.sortIntroduction)},codeBox:function(){return l.a.highlight(this.code,l.a.languages.javascript,"javascript")}},methods:{mergeSort:function(t){if(t.length<=1)return t;var r=t.length>>1,n=t.slice(0,r),e=t.slice(r);return this.merge(this.mergeSort(n),this.mergeSort(e))},merge:function(t,r){for(var n=[];t.length&&r.length;)n.push(t[0]>r[0]?r.shift():t.shift());return n.concat(t.length?t:r)},calArray:function(){this.doneArray=this.mergeSort(this.array)}}},x={render:function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"sortBox"},[n("div",{staticClass:"markBox",domProps:{innerHTML:t._s(t.mark)}}),t._v(" "),n("pre",{domProps:{innerHTML:t._s(t.codeBox)}}),t._v(" "),n("div",{staticClass:"sortDemo"},[n("div",[n("p",[t._v("请输入数组，逗号隔开")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.testArray,expression:"testArray"}],attrs:{type:"text"},domProps:{value:t.testArray},on:{input:function(r){r.target.composing||(t.testArray=r.target.value)}}}),t._v(" "),n("p",[t._v(t._s(t.array))]),t._v(" "),n("button",{on:{click:t.calArray}},[t._v("排序")]),t._v(" "),n("p",[t._v("结果："+t._s(t.doneArray))])])])])},staticRenderFns:[]};var j=n("C7Lr")(k,x,!1,function(t){n("KUo/")},null,null).exports,S={name:"HelloWorld",data:function(){return{sortIntroduction:"# 插入排序\n插入排序的设计初衷是往有序的数组中快速插入一个新的元素。它的算法思想是: 把要排序的数组分为两个部分, 一部分是数组的全部元素(除去待插入的元素), 另一部分是待插入的元素; 先将第一部分排序完成, 然后再插入这个元素。 其中第一部分的排序也是通过再次拆分为两部分来进行的。\n\n### 复杂度\n| 平均时间复杂度  | 最好情况    |  最坏情况  |    空间复杂度\n| --------       | -----      | :----:    |     :----:\n| O(n²)      | O(n)  |   O(n²)   |  O(1)\n\n## 实现图解\n![](http://dry-image.test.upcdn.net/TIM%E5%9B%BE%E7%89%8720180427161231.png)\n\n## 实现代码\n",code:"insertSort(arr) {\n        for (let i = 1; i < arr.length; i++) {\n            let tmp = arr[i]\n            let j = i - 1\n            while(arr[j] > tmp && j >= 0) {\n                arr[j + 1] = arr[j]\n                j--\n            }\n            arr[j + 1] = tmp\n        }\n        return arr\n    }",testArray:"12,26,31,22,5,9,13",doneArray:[],processArray:[]}},computed:{array:function(){return this.testArray.split(",").map(function(t){return Number(t)})},mark:function(){return u()(this.sortIntroduction)},codeBox:function(){return l.a.highlight(this.code,l.a.languages.javascript,"javascript")}},methods:{insertSort:function(t){this.processArray=[];for(var r=1;r<t.length;r++){for(var n=t[r],e=r-1;t[e]>n&&e>=0;)t[e+1]=t[e],e--;t[e+1]=n,this.processArray.push(m()(t))}return t},calArray:function(){this.doneArray=this.insertSort(this.array)}}},C={render:function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"sortBox"},[n("div",{staticClass:"markBox",domProps:{innerHTML:t._s(t.mark)}}),t._v(" "),n("pre",{domProps:{innerHTML:t._s(t.codeBox)}}),t._v(" "),n("div",{staticClass:"sortDemo"},[n("div",[n("p",[t._v("请输入数组，逗号隔开")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.testArray,expression:"testArray"}],attrs:{type:"text"},domProps:{value:t.testArray},on:{input:function(r){r.target.composing||(t.testArray=r.target.value)}}}),t._v(" "),n("p",[t._v(t._s(t.array))]),t._v(" "),n("button",{on:{click:t.calArray}},[t._v("排序")]),t._v(" "),n("p",[t._v("结果："+t._s(t.doneArray))])]),t._v(" "),n("div",[n("p",[t._v("排序过程")]),t._v(" "),t._l(t.processArray,function(r){return n("div",t._l(r,function(r){return n("span",{staticClass:"numBox"},[t._v(t._s(r))])}),0)})],2)])])},staticRenderFns:[]};var B=n("C7Lr")(S,C,!1,function(t){n("lZgI")},null,null).exports;e.a.use(o.a);var O=new o.a({routes:[{path:"/",redirect:"/quickSort"},{path:"/quickSort",component:d},{path:"/bubbleSort",component:_},{path:"/heapSort",component:b},{path:"/mergeSort",component:j},{path:"/insertSort",component:B}]});n("ZsCP");e.a.config.productionTip=!1,new e.a({el:"#app",router:O,components:{App:i},template:"<App/>"})},YNrn:function(t,r){},ZsCP:function(t,r){},bHQ3:function(t,r){},lZgI:function(t,r){},oyPp:function(t,r){}},["NHnr"]);
//# sourceMappingURL=app.92958f478a969761d517.js.map