---
outline: deep
---

<script setup>
import Example from './example.vue'
</script>

# json格式化工具

**为什么要造这个轮子?**

在浏览器打开url查看json格式的数据， 在工作中是非常常见的。而我的需求也很简单， 浏览器打开url后， 能自动识别是否为json格式数据并格式化， 提供**高亮**、**折叠**、**复制**及其他的**json辅助阅读**就基本ok。

这类浏览器插件多如牛毛, 但要么就某些想要的功能没有， 要么就**太丑了**。而最近， 让我比较满意的、也一直在用的[FE helper](https://www.baidufe.com/fehelper/index/index.html)竟然失效了， 即打开json页面不能自动格式化了。

::: tip
要知道这个功能非常重要, 减少了非常多的交互步骤:
```
打开json页面  -----> 自动格式化  -------> 阅读
打开json页面  -----> 复制全部  -----> 打开json格式化工具网站   -----> 粘贴  -----> 格式化  -----> 阅读
```
:::
于是， 不如自己写一个吧。顺便能涉及到两个不太熟悉的技术: vue3组件打包和浏览器插件开发。


`@trudbot/format`是一个开箱即用的vue3 json格式化组件, 提供了高亮、折叠、复制等等功能， 默认主题与WebStorm相似, 让查看json数据不再痛苦。

## 快速开始
### 安装
```bash
npm install @trudbot/format
```
### 使用
```vue
<script setup lang="ts">
import { JsonFormatView } from '@trudbot/format'
import data from './example-data.json'
</script>

<template>
  <JsonFormatView :value="data"/>
</template>

<style>
@import '@trudbot/format/style';
</style>
```
### 预览
> <Example />
### 自定义样式
自定义样式的方式有两种
1. 修改类名`.json-format`下预定义好的css变量的值
```scss
.json-view {
  // 缩进距离
  --tab-size: 2em;
  // 括号字体大小， 包括 `[`、`]`、`{`、`}`
  --bracket-size: 14px;
  // 通用字体大小
  --base-font-size: 14px;
  // 通用行高
  --base-line-height: 23px;
  // 对齐虚线宽度
  --alignment-dotted-line-width: 1px;
  // 对齐虚线颜色
  --alignment-dotted-line-color: #ddd;
  // 通用字体颜色
  --base-font-color: #080808;
  // json 键字体颜色
  --key-text-color: #7b258f;
  // json tip颜色(点击复制后的'复制成功'提示)
  --tip-text-color: #45a930;
  // 字符串值 颜色
  --string-value-color: #377a29;
  // 链接字符串值 颜色
  --link-text-color: #377a29;
  // null 颜色
  --null-value-color: #0839ac;
  // 数字值 颜色
  --number-value-color: #2156e2;
  // 布尔值 颜色
  --boolean-value-color: #d64242;
  // 括号 字体颜色
  --bracket-color: #080808;
  // hover 行背景色
  --line-highlight-background: #f5f8fd;
  // hover 括号背景色
  --bracket-highlight-background: #a2d7d8;
  // hover 折叠按钮背景色
  --control-highlight-background: #f5f8fd;
  // hover 链接字体颜色
  --link-highlight-color: #0839ac;
}
```
2. 通过类名直接修改样式(仅列举了一小部分类名)
```scss
// 总容器
.json-view {
  // 每一行行
  .line {}
  // 值为array时的容器
  .array-box {}
  // 值为object时的容器
  .object-box {}
  // array内容
  .array-content {}
  // object内容
  .object-content {}
  // '['、']'、'}'、'{' 样式
  .bracket {}
  // 值为boolean时的容器
  .boolean-value {}
  // 值为null时的容器
  .null-value {}
  // 值为number时的容器
  .number-value {}
  // 值为string时的容器
  .string-value {}
  // 值为link时的容器
  .link {}
  // 键 的样式
  .key-text {}
  // 逗号
  .comma {}
}
```