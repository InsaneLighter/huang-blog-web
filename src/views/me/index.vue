<template>
  <div>
    <div class="container">
      <!--右上导航栏-->
      <rightTopNavBar :menuPages="rightTopMenus"></rightTopNavBar>
    </div>
    <!--主页面-->
    <div class="div_abo">
      <div class="page_content">
        <div class="div1">Life was a box of chocolate</div>
        <div class="div2">You never know</div>
        <div class="div3">What you gonna get</div>
        <div class="introduce">拨开云雾见天日,守得云开见月明</div>
      </div>
    </div>
    <!--页面1-->
    <div class="div_abo1">
      <div class="box">
        <el-carousel :interval="5000" height="700px" arrow="hover">
          <el-carousel-item
            :label="item.label"
            v-for="item in rotationCharts"
            :key="item"
          >
            <img style="width: 100%" :src="item.url" :alt="item.label" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!--页面2-->
    <div class="div_abo2">
      <div class="introduce">未完待续~</div>
    </div>
    <!--页面3-->
    <!--向下滑动标签-->
    <div id="scrollDown">
      <span id="scrollDownSpan"></span>
    </div>
    <el-backtop>
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
import "css/articles.css";
import "css/about.css";
import "js/jquery-3.6.0";
import { aboutMe } from "js/about";
import { proNavanimate } from "js/qs-jquery-1.0";
import { qs_index } from "js/qs_index";
import rightTopNavBar from "@/components/rightTopNavBar/index.vue";

export default {
  name: "me",
  components: {
    rightTopNavBar,
  },
  created() {
    // 引入js
    proNavanimate();
    qs_index();
    aboutMe();
  },
  mounted() {
    // 引入js
    proNavanimate();
    qs_index();
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
      rotationCharts: [
        {
          id: 1,
          label: "lalala",
          url: "../../assets/image/IMG_20210417_195637.jpg",
        },
        {
          id: 2,
          label: "lalala",
          url: "../../assets/image/IMG_20210417_195637.jpg",
        },
        {
          id: 3,
          label: "lalala",
          url: "../../assets/image/IMG_20210417_195637.jpg",
        },
        {
          id: 4,
          label: "lalala",
          url: "../../assets/image/IMG_20210417_195637.jpg",
        },
      ]

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
        return item.target != "/me";
      });
    },
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
