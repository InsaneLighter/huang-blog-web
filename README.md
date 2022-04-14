# huang-blog-web

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

###bug 待修复
```angular2html
1.关于我页面滚动效果给定970px定值,暂时无法自适应屏幕大小滚动 2022.04.10

2.关于我页面对于鼠标滚轮滚动至最后一页继续向下滑动再向上滑动则e.wheelDelta的初始值无法从0开始 2022.04.10

3.全局样式文件待更新整理 2022.04.10

4.项目部署至nginx后 直接通过url访问会导致404 只能通过路由跳转才为正常 2022.04.13
location / {
root html;
index index.html index.htm;
try_files $uri $uri/ /index.html;
}
nginx部署后会按照 try_files后面的参数依次去匹配 root中对应的文件或文件夹。
如果匹配到的是一个文件，那么将返回这个文件；如果匹配到的是一个文件夹，
那么将返回这个文件夹中 index指令指定的文件。
最后一个 uri参数将作为前面没有匹配到的fallback。（注意 try_files指令至少需要两个参数）

5.如果页面直接通过url访问右上菜单打开后没有隐藏下层页面
```
