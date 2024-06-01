import JsonFormatView from './index.vue';
import { App } from "vue";

export {JsonFormatView};

export default {
  install: (app: App) => {
    app.component('JsonFormatView', JsonFormatView);
  }
}
