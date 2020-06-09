## 前言
此处记录我完成本仓库时遇到的“坑”和困难。
### 时间戳转换问题
```js
<!-- 手机端显示正确 -->
new Date('2020/04/20 10:10:10').getTime()
<!-- 手机端显示NaN -->
new Date('2020-04-20 10:10:10').getTime()
```
### swiper滚动卡顿问题
测试机型: 红米K20 pro<br>
安卓版本：10<br>
问题描述：应用切换后台后，再切换回来，swiper会发生卡顿，滚动不流畅的现象。<br>
补充描述：在低版本的安卓手机上，无上述现象。而且当列表数量从14降至2后，上述测试环境不再发生此现象，可能跟安卓系统性能优化相关。<br>
### 滚动事件
问题描述：遮罩层如果可以滚动的话，滚动事件会冒泡，从而带动底层视图发生滚动。<br>
解决方法：在遮罩层的父组件中使用@mousewheel.stop.prevent。<br>
代码示例：
```html
<my-popup-action-list v-if="showPayMethodsList" @touchmove.stop.prevent></my-popup-action-list>
```
### 图片标签和图片路径问题
uni-app为了跨端使用，只建议使用image标签进行引入图片，不能使用img标签。此标签会对图片进行base64转换。<br>
图片路径应该统一使用绝对路径，因为h5端，app端和微信小程序端对相对路径判断不一致，微信小程序相对路径是相对于页面，而h5端和app端则是相对组件。<br>
还有微信小程序是不允许通过css引入图片
```css
.bg {
  background-image: url('./bg.png');
}
```
解决方法是使用image配合绝对定位进行模拟背景图片使用。
### 微信小程序自定义组件样式问题
问题描述：在微信小程序中，给自定义组件添加样式是无效的。<br>
解决方法：在使用自定义组件处添加view标签，再添加样式。<br>
```html
<view class="cmp-style">
  <my-cmp></my-cmp>
</view>
```
### 微信小程序内联样式问题
问题描述：微信小程序添加一个内联样式对象，会被编译成'[object object]'。
代码示例：
```html
<template>
  <view :style="myStyle"></view>
</template>
<script>
  export default {
    data() {
      return {
        myStyle: {
          width: '100px',
          height: '100px'
        }
      }
    }
  }
</script>
```
解决方法：使用类名
### 微信小程序通过props传递Date对象
问题描述：父组件通过props传递Date类型，在微信小程序的子组件获取的不是Date类型，而是String。
解决方法：传递时间戳，子组件通过计算属性再转化为Date类型。
### 微信小程序的声明周期问题
问题描述：在h5端和app端mounted阶段可以获取精确的节点信息，但微信小程序在mounted阶段不可以。
解决方法：获取节点信息统一安排在updated阶段。
代码示例:
```js
updated() {
  if (!this.isMounted) {
    this.$nextTick(() => {
      this.getSwipetItemHeight()
    })
  }
}

getSwipetItemHeight(listIdx) {
  let view = uni.createSelectorQuery().in(this).selectAll('.goods_list_wrapper')
  view.boundingClientRect(dataList => {
    for (let i = 0; i < dataList.length; ++i) {
      !this.isMounted ? this.swiperHegithList.push(dataList[i].height) : this.$set(this.swiperHegithList, i, dataList[i].height)
    }
    if (!this.isMounted && !listIdx) {
      this.isMounted = true
      // this.swiperCurrent = 0
      this.changeHeight(0)
    }
    // maybe zero
    if (listIdx !== undefined) {
      this.changeHeight(listIdx)
    }
  }).exec()
}
```