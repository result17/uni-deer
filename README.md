## bug
uni-app会在宽萤幕下给html font-size设置96px的字体，导致样式变形。

## fix
修改了u-action-sheet的源码
```css
.u-action-sheet-item {
		display: flex;
		line-height: 1;
		justify-content: left;
		margin-left: 20rpx;
		align-items: center;
		font-size: 34rpx;
		padding: 34rpx 0;
	}
```

## 滚动事件发生在父元素

## 时间戳转换问题
```js
<!-- 手机端显示正确 -->
new Date('2020/04/20 10:10:10').getTime()
<!-- 手机端显示NaN -->
new Date('2020-04-20 10:10:10').getTime()
```
## ~和indexOf

## event.preventDefault和万恶的滚轮事件
[event.preventDefault bug](https://ask.dcloud.net.cn/question/88063)