import browser from "webextension-polyfill";

type Message = 
{type: 'fetch', data: string} |
{type: any, data: any};

type Callback = (data: any) => void;

browser.runtime.onMessage.addListener(async (message: Message) => {
  if (message?.type === 'fetch' && message?.data) {
    return await fetch(message.data).then(res => {
      if (res.headers.get('content-type')?.includes('application/json')) {
        return res.json();
      } else {
        return 'not json';
      }
    });
  }
});