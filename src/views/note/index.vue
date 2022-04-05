<template>
  <div>
    <div class="container">
      <!--右上导航栏-->
      <rightTopNavBar :menuPages="rightTopMenus"></rightTopNavBar>

      <!--背景图片 title-->
      <div class="main_bg div_news">
        <div class="p1">Daily life</div>
      </div>
    </div>
    <div class="note_container">
      <el-scrollbar height="810px">
        <div class="note_content">
          <el-timeline>
            <el-timeline-item
              v-for="item in notes"
              :key="item.id"
              :timestamp="item.timestamp"
              placement="top"
              size="large"
              :icon="item.mood"
              :color="item.color"
            >
              <el-card>
                <h4>{{ item.content }}</h4>
                <p>{{ item.editor }}  提交于  {{ item.createTime }}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-scrollbar>
    </div>
    <!-- 回到顶部 -->
    <el-backtop target=".el-scrollbar__wrap">
      <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .10);
        text-align: center;
        line-height: 40px;
        color: rgb(0 0 0 / 12%);
        border-radius: 20px;
      }"
    >
      ↑
    </div>
    </el-backtop>
  </div>
</template>

<script>
import "css/articles.css";
import "js/jquery-3.6.0.js";
import { proNavanimate } from "js/qs-jquery-1.0.js";
import { qs_index } from "js/qs_index.js";
import rightTopNavBar from "@/components/rightTopNavBar";
export default {
  name: "note",
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
      notes: [
        {
          id: 1,
          editor: "yiyi",
          mood: '',
          color: '',
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 2,
          editor: "yiyi",
          mood: 'el-icon-light-rain',
          color: '',
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 3,
          editor: "yiyi",
          mood: '',
          color: '',
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 4,
          editor: "yiyi",
          mood: 'el-icon-light-rain',
          color: 'red',
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 5,
          editor: "yiyi",
          mood: '',
          color: '',
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 6,
          editor: "yiyi",
          mood: '',
          color: 'black',
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 7,
          editor: "yiyi",
          mood: '',
          color: '',
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
      ],
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
    }
  },
  computed: {
    rightTopMenus: function () {
      return this.menuPages.filter(function (item) {
        return item.target != "/note";
      });
    }
  }
};
</script>

<style scoped>
.p1 {
  height: 100px;
  line-height: 100px;
	font-family :'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.note_container {
  margin-top: 10px;
}
.note_content {
  text-align: left;
  width: 1200px;
  margin: 10px auto;
}
.el-card:hover {
  background-color: #d9dbdf;
  cursor: pointer;
}
.el-card p {
  font-size: 12px;
  color: rgb(185, 178, 178);
}
</style>
