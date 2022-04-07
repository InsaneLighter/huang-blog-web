import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons'
import App from './App.vue'
import router from './router'

//md-preview
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

//代码复制
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
import Prism from 'prismjs';
VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});
VueMarkdownEditor.use(createCopyCodePlugin());

//代码行号
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
VueMarkdownEditor.use(createLineNumbertPlugin());

const app = createApp(App);
Object.keys(ElIcons).forEach(key => {
  app.component(key,ElIcons[key])
})
app.use(router);
app.use(VueMarkdownEditor);
app.use(ElementPlus);
app.mount('#app');
