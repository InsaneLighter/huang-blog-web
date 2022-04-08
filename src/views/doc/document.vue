<template>
  <div>
    <div class="container">
      <!--右上导航栏-->
      <rightTopNavBar :menuPages="rightTopMenus"></rightTopNavBar>

      <!--背景图片 title-->
      <div class="main_bg div_news">
        <div class="p1">Changing your life's style</div>
      </div>
    </div>

    <div class="backStep">
      <a @click="$router.go(-1)"><el-icon style="vertical-align: -10%"><back /></el-icon><span>返回</span></a>
    </div>

    <!-- 文章内容 -->
    <div class="article_container">
      <el-scrollbar height="50rem">
        <div class="article_content">
          <v-md-editor v-model="text"
           mode="preview"
           @copy-code-success="handleCopyCodeSuccess"></v-md-editor>
        </div>

      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import "css/articles.css";
import "js/jquery-3.6.0";
import { proNavanimate } from "js/qs-jquery-1.0";
import { qs_index } from "js/qs_index";
import rightTopNavBar from "@/components/rightTopNavBar/index.vue";
export default {
  name: "document",
  components: {
    rightTopNavBar,
  },
  data() {
    return {
      menuPages: [
        {
          index: "div_index1",
          name: "不用看~是首页",
          alias: "HOME",
          target: "/home",
        },
        {
          index: "div_index2",
          name: "这个是关于Java的",
          alias: "JAVA",
          target: "/doc",
        },
        {
          index: "div_index3",
          name: "一些有意义的笔记",
          alias: "Notes",
          target: "/note",
        },
        {
          index: "div_index4",
          name: "有趣的小游戏",
          alias: "Little Game",
          target: "/game",
        },
        {
          index: "div_index5",
          name: "一个眼睛里慢慢有光的我",
          alias: "ME",
          target: "/me",
        },
      ],
      text:
        '提示：写完文章后，目录可以自动生成，如何生成可参考右边的帮助文档\n' +
            '> 随着人工智能的不断发展，机器学习这门技术也越来越重要，很多人都开启了学习机器学习，本文就介绍了机器学习的基础内容。\n' +
            '\n' +
            '## 前言\n' +
            '提示：这里可以添加本文要记录的大概内容：\n' +
            '例如：随着人工智能的不断发展，机器学习这门技术也越来越重要，很多人都开启了学习机器学习，本文就介绍了机器学习的基础内容。\n' +
            '\n' +
            '## 一、Java是什么？\n' +
            '示例：Java 是面向对象的语音设计。该工具是为了解决数据分析任务而创建的。\n' +
            '\n' +
            '## 二、使用步骤\n' +
            '#### 1.引入库\n' +
            '```\n' +
            'import numpy as np\n' +
            'import pandas as pd\n' +
            'import matplotlib.pyplot as plt\n' +
            'import seaborn as sns\n' +
            'import warnings warnings.filterwarnings(\'ignore\')\n' +
            'import ssl\n' +
            'ssl._create_default_https_context = ssl._create_unverified_context\n' +
            '```\n' +
            '#### 2.读入数据\n' +
            '代码如下（示例）：\n' +
            '\n' +
            '```\n' +
            'data = pd.read_csv( \'https://labfile.oss.aliyuncs.com/courses/1283/adult.data.csv\') print(data.head())\n' +
            '```\n' +
            '该处使用的url网络请求的数据。\n' +
            '\n' +
            '## 总结\n' +
            '提示：这里对文章进行总结：\n' +
            '例如：以上就是今天要讲的内容，本文仅仅简单介绍了pandas的使用，而pandas提供了大量能使我们快速便捷地处理数据的函数和方法。\'\n提示：写完文章后，目录可以自动生成，如何生成可参考右边的帮助文档\n' +
            '> 随着人工智能的不断发展，机器学习这门技术也越来越重要，很多人都开启了学习机器学习，本文就介绍了机器学习的基础内容。\n' +
            '\n' +
            '## 前言\n' +
            '提示：这里可以添加本文要记录的大概内容：\n' +
            '例如：随着人工智能的不断发展，机器学习这门技术也越来越重要，很多人都开启了学习机器学习，本文就介绍了机器学习的基础内容。\n' +
            '\n' +
            '## 一、Java是什么？\n' +
            '示例：Java 是面向对象的语音设计。该工具是为了解决数据分析任务而创建的。\n' +
            '\n' +
            '## 二、使用步骤\n' +
            '#### 1.引入库\n' +
            '```\n' +
            'import numpy as np\n' +
            'import pandas as pd\n' +
            'import matplotlib.pyplot as plt\n' +
            'import seaborn as sns\n' +
            'import warnings warnings.filterwarnings(\'ignore\')\n' +
            'import ssl\n' +
            'ssl._create_default_https_context = ssl._create_unverified_context\n' +
            '```\n' +
            '#### 2.读入数据\n' +
            '代码如下（示例）：\n' +
            '\n' +
            '```\n' +
            'data = pd.read_csv( \'https://labfile.oss.aliyuncs.com/courses/1283/adult.data.csv\') print(data.head())\n' +
            '```\n' +
            '该处使用的url网络请求的数据。\n' +
            '\n' +
            '## 总结\n' +
            '提示：这里对文章进行总结：\n' +
            '例如：以上就是今天要讲的内容，本文仅仅简单介绍了pandas的使用，而pandas提供了大量能使我们快速便捷地处理数据的函数和方法。\'\n',
    };
  },
  created() {
    // 引入js
    proNavanimate();
    qs_index();
  },
  mounted() {
    // 引入js
    proNavanimate();
    qs_index();
  },
  methods: {
    // more 页面跳转
    jumpToPage(target) {
      this.$router.push(target);
    },
    handleCopyCodeSuccess(){
      this.$message.success("代码复制成功")
    }
  },
  computed: {
    rightTopMenus: function () {
      return this.menuPages.filter(function (item) {
        return item.target;
      });
    },
  }
};
</script>

<style lang="less" scoped>
.article_content {
  text-align: left;
  width: 1200px;
  margin: 10px auto;
}
::v-deep .v-md-editor--preview{
  box-shadow: 0 0 5px 1px #d4d4d4;
}
.p1 {
	font-family :'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  height: 100px;
  line-height: 100px;
}
.backStep {
  color: #afadad;
  position: absolute;
  top: 8rem;
  left: 12rem;
  font-size: 16px;
  z-index: 999;

  a:hover {
    color: #000;
  }

  span {
    margin-left: 5px
  }
}
</style>
