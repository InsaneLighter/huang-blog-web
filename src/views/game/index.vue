<template>
  <div>
    <div class="container">
      <!--右上导航栏-->
      <rightTopNavBar :menuPages="rightTopMenus"></rightTopNavBar>

      <!--背景图片 title-->
      <div class="main_bg div_news">
        <div class="p1">
          When you choose to become others, you will lose yourself
        </div>
      </div>
    </div>
    <div class="mian_box">
      <ul class="ul_list">
        <li v-for="item in games" :key="item.id">
          <div class="div1"><img :src="item.picture" /></div>
          <div class="div2">
            <div class="p1"></div>
            <div class="p2">
              <p
                style="
                  background: #ffffff;
                  text-align: left;
                  vertical-align: top;
                "
              >
                <span
                  style="
                    color: #333333;
                    font-family: 微软雅黑;
                    font-size: 10.5pt;
                    font-style: normal;
                    font-weight: normal;
                  "
                >
                  <span>{{ item.description }}</span>
                </span>
              </p>
            </div>
            <a href="javascript:void(0)" @click="jumpToPage(item.target)">
              <div class="p3">Go</div>
            </a>
          </div>
        </li>
        <div class="clear"></div>
      </ul>
    </div>

    <div class="foot">
      To be continued
    </div>
  </div>
</template>

<script>
import "css/articles.css";
import "css/game.css";
import "js/jquery-3.6.0";
import { proNavanimate } from "js/qs-jquery-1.0";
import { qs_index } from "js/qs_index";
import rightTopNavBar from "@/components/rightTopNavBar/index.vue";
export default {
  name: "game",
  components: {
    rightTopNavBar,
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
      games: [
        {
          id: 1,
          picture: "/static/image/tom.jpg",
          description: "我诅咒你一辈子买方便面没有调料包,哈哈哈",
          target: "",
        },
        {
          id: 2,
          picture: "/static/image/tom.jpg",
          description: "我诅咒你一辈子买方便面没有调料包,哈哈哈",
          target: "",
        },
        {
          id: 3,
          picture: "/static/image/tom.jpg",
          description: "我诅咒你一辈子买方便面没有调料包,哈哈哈",
          target: "",
        },
      ],
    };
  },
  methods: {
    // more 页面跳转
    jumpToPage(target) {
      this.$router.push(target);
    },
  },
  computed: {
    rightTopMenus: function () {
      return this.menuPages.filter(function (item) {
        return item.target != "/game";
      });
    },
  },
};
</script>

<style scoped>
.p1,.foot {
  height: 100px;
  line-height: 100px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
 .foot {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}
</style>
