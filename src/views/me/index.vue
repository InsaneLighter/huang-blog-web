<template>
  <div>
    <div class="container">
      <!--右上导航栏-->
      <rightTopNavBar :menuPages="rightTopMenus"></rightTopNavBar>
    </div>
    <!--主页面-->
    <div class="me me_div1">
      <div class="page_content">
        <div class="div1">Life was a box of chocolate</div>
        <div class="div2">You never know</div>
        <div class="div3">What you gonna get</div>
<!--        <div class="introduce">拨开云雾见天日,守得云开见月明</div>-->
      </div>
    </div>
    <!--页面1-->
    <div class="me me_div2">
      <picture-wall></picture-wall>
    </div>
    <!--页面2-->
    <div class="me me_div3">
      <div class="introduce">未完待续~</div>
    </div>
    <!--向下滑动标签-->
    <div id="scrollDown">
      <span id="scrollDownSpan"></span>
    </div>
    <el-backtop id="backTop">
      <div
        style="
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .10);
        text-align: center;
        line-height: 40px;
        color: rgb(0 0 0 / 12%);
        border-radius: 20px;
      "
      >
        ↑
      </div>
    </el-backtop>
  </div>
</template>

<script>
import "css/about.css";
import { aboutMe } from "js/aboutMe";
import { navAnimate } from "js/navAnimate";
import { home } from "js/home";
import rightTopNavBar from "@/components/rightTopNavBar";
import pictureWall from "@/components/pictureWall"

export default {
  name: "me",
  components: {
    rightTopNavBar,
    pictureWall
  },
  created() {
  },
  mounted() {
    // 引入js
    navAnimate();
    home();
    aboutMe();
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
    };
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
        return item.target !== "/me";
      });
    },
  },
};
</script>

<style scoped>

</style>
