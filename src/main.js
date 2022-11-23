import { createApp } from 'vue'
import 'css/base.css';
import App from './App.vue'
import router from './router'
import './router/router-permission'

//系统页面禁止缩放及查看开发页面
// import './assets/js/sys'

//ant design vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as Icons from '@ant-design/icons-vue'

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

//注入全局属性$message
import { message} from 'ant-design-vue'
app.config.globalProperties.$message = message;
message.config({
  duration: 2,// 持续时间
  top:`100px`, // 到页面顶部距离
  maxCount: 3 // 最大显示数, 超过限制时，最早的消息会被自动关闭
});

app.use(Antd);
app.use(router);
app.use(VueMarkdownEditor);
app.mount('#app');

// 全局使用图标，遍历引入
const icons = Icons
for (const i in icons) {
  app.component(i, icons[i])
}
