<template>
  <div>
    <global-header :currentPage="$route.path">
      Daily life
    </global-header>

    <div class="backStep">
      <a @click="$router.push('/')"><el-icon style="vertical-align: -10%"><back /></el-icon><span>返回</span></a>
    </div>

    <div class="note_container">
      <el-scrollbar height="810px">
        <div class="note_content">
          <el-timeline>
            <el-timeline-item
              size="large"
              v-for="item in notes"
              :key="item.id"
              :timestamp="item.timestamp"
              placement="top"
              :icon="item.mood"
              :color="item.color"
            >
              <el-card>
                <img width="230" v-if="item.image != null && item.image !== ''"
                     v-for="img in item.image"
                     :src="img"
                     alt="这是一张照片"
                     style="margin-right: 10px;margin-bottom: 10px">
                <div class="note_item_content" v-html="item.content"></div>
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
import rightTopNavBar from "@/components/rightTopNavBar";
import globalHeader from '@/components/globalHeader'

export default {
  name: "note",
  components: {
    rightTopNavBar,
    globalHeader
  },
  data() {
    return {
      notes: [
        {
          id: 1,
          editor: "yiyi",
          mood: 'Sunny',
          color: '#37cbcb ',
          image: ['https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png','https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png','https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png','https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png','https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png','https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'],
          title: "哈哈哈哈哈",
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 2,
          editor: "yiyi",
          mood: 'Sunrise',
          color: '#8340e2',
          image: ['https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'],
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 3,
          editor: "yiyi",
          mood: 'Moon',
          color: '#c73697',
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 4,
          editor: "yiyi",
          mood: 'MoonNight',
          // color: '#9ee8d1',
          content: "<h1>今天是很开心的一天</h1>",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 5,
          editor: "yiyi",
          mood: 'MoreFilled',
          // color: '#38b7f1',
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 6,
          editor: "yiyi",
          mood: 'NoSmoking',
          // color: '#27bfa8',
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 7,
          editor: "yiyi",
          mood: 'Headset',
          color: '#4fc6a2',
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        }
      ]
    };
  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
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
  width: 80rem;
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
