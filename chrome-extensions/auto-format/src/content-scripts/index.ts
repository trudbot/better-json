import { createApp } from "vue";
import App from "./app.vue";
import browser from "webextension-polyfill";

(() => {
  // 判断页面类型是否为json
  if (document.contentType !== 'application/json') {
    return;
  }
  const container = document.createElement('div');
  container.id = 'app';
  const root = document.createElement('div');
  const styleEl = document.createElement('link');
  const shadowDOM = container.attachShadow?.({ mode:'closed' }) || container;
  styleEl.setAttribute('rel', 'stylesheet');
  styleEl.setAttribute('href', browser.runtime.getURL('dist/content-scripts/style.css'));
  shadowDOM.appendChild(styleEl);
  shadowDOM.appendChild(root);
  // 替换页面内容
  document.body.innerHTML = '';
  document.body.appendChild(container);
  // 请求当前页面的数据, 使用background脚本绕过跨域问题
  browser.runtime.sendMessage({ type: 'fetch', data: window.location.href }).then((data) => {
    console.log('data', data);
    const app = createApp(App);
    app.provide('data', data);
    app.mount(root);
  });
})();