---
outline: deep
---
Auto Format是一个chrome扩展， 在你用浏览器打开json文件时， 会自动格式化json。

## 安装
暂未发布

## 原理
这个扩展核心存在三个过程:
1. 判断当前页面是否是json文件展示。 这里实现的相对简单: 直接判断document.contentType是否为`application/json`。(这已经足够满足我的需求了)
2. 拿到初始json数据。这里我选择再请求一次， 但由于content script无法跨域请求， 所以建立了background页面(类似后台进程)来专门处理请求以避开跨域。
3. 替换页面。 将浏览器默认的json显示页面替换自己的页面， 这里就是先清空body.innerHtml，然后加入结点、挂载vue实例进行渲染。 

## 开发过程中的参考
[vitesse-webext](https://github.com/antfu-collective/vitesse-webext)
[两万字大章带你使用 Vue3、Vite、TypeScript、Less、Pinia、Naive-ui 开发 Chrome 浏览器 Manifest V3 版本插件](https://guoqiankun.blog.csdn.net/article/details/135847091)
