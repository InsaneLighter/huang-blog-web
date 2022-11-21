<template>
  <div>
    <div class="container">
      <!--右上导航栏-->
      <global-header :currentPage="$route.path">
        Today,I consider myself the luckiest man on the face of the earth
      </global-header>
    </div>

    <!--文章内容渲染-->
    <div class="mian_box">
      <div class="content">
        <div class="terms">
          <el-form :inline="true">
            <el-form-item label="关键字">
              <el-input placeholder="关键字" v-model="params.keyword" @change="search" clearable></el-input>
            </el-form-item>
            <el-form-item label="分类标签">
              <!-- 标签菜单 -->
              <el-select v-model="params.tagName"
                         placeholder="分类标签"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button :loading="this.isLoading" id="searchBtn" round @click="search">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="articles">
          <ul class="infinite-list"
              v-infinite-scroll="loadData"
              style="overflow:auto;height: 78vh">
            <li v-for="item in articles" :key="item.id" class="infinite-list-item">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="article_content" @click="jumpToPage('/doc/' + item.id)">
                  <p class="article_title">{{ item.title }}</p>
                  <p class="article_desc">{{ item.description }}</p>
                  <span class="article_detail">
                  <label>时间: </label><span>{{ item.createTime }}</span>
                </span>
                  <span class="article_detail">
                  <label>浏览: </label><span>{{ item.skim }}</span>
                </span>
                  <span class="article_detail">
                  <label>分类: </label>
                  <span
                  ><a href="javascript:void(0)">{{ item.type }}</a></span
                  >
                </span>
                </div>
              </el-card>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'css/articles.css'
import globalHeader from '@/components/globalHeader'

export default {
  name: 'doc',
  components: {
    globalHeader
  },
  created () {
  },
  mounted () {
    //请求
    this.getData(this.params)
  },
  data () {
    return {
      isLoading: false,
      menuPages: [
        {
          index: 'div_index1',
          name: '不用看是首页',
          alias: 'HOME',
          target: '/home',
        },
        {
          index: 'div_index2',
          name: '这个是关于Java的',
          alias: 'JAVA',
          target: '/doc',
        },
        {
          index: 'div_index3',
          name: '一些有意义的笔记',
          alias: 'Notes',
          target: '/note',
        },
        {
          index: 'div_index4',
          name: '有趣的小游戏',
          alias: 'Little Game',
          target: '/game',
        },
        {
          index: 'div_index5',
          name: '一个眼睛里慢慢有光的我',
          alias: 'ME',
          target: '/me',
        },
      ],
      articles: [
        {
          id: 1,
          title: '从Paxos到Zookeeper分布式一致性原理与实践',
          description:
            '本书将会从分布式一致性的理论出发，向读者进解几种典型的分布式一致性协议是如何解决分布式一致性问',
          createTime: '2021/04/12 19:52',
          skim: '777',
          type: '分布式架构',
        },
        {
          id: 2,
          title: '从Paxos到Zookeeper分布式一致性原理与实践',
          description:
            '本书将会从分布式一致性的理论出发，向读者进解几种典型的分布式一致性协议是如何解决分布式一致性问',
          createTime: '2021/04/12 19:52',
          skim: '777',
          type: '分布式架构',
        },
        {
          id: 3,
          title: '从Paxos到Zookeeper分布式一致性原理与实践',
          description:
            '本书将会从分布式一致性的理论出发，向读者进解几种典型的分布式一致性协议是如何解决分布式一致性问',
          createTime: '2021/04/12 19:52',
          skim: '777',
          type: '分布式架构',
        },
        {
          id: 4,
          title: '从Paxos到Zookeeper分布式一致性原理与实践',
          description:
            '本书将会从分布式一致性的理论出发，向读者进解几种典型的分布式一致性协议是如何解决分布式一致性问',
          createTime: '2021/04/12 19:52',
          skim: '777',
          type: '分布式架构',
        },
        {
          id: 5,
          title: '从Paxos到Zookeeper分布式一致性原理与实践',
          description:
            '本书将会从分布式一致性的理论出发，向读者进解几种典型的分布式一致性协议是如何解决分布式一致性问',
          createTime: '2021/04/12 19:52',
          skim: '777',
          type: '分布式架构',
        },
        {
          id: 6,
          title: '从Paxos到Zookeeper分布式一致性原理与实践',
          description:
            '本书将会从分布式一致性的理论出发，向读者进解几种典型的分布式一致性协议是如何解决分布式一致性问',
          createTime: '2021/04/12 19:52',
          skim: '777',
          type: '分布式架构',
        },
      ],
      params: {
        keyword: '',
        tag: ''
      },
      options: [
        {
          value: '1',
          label: 'Wa',
        },
        {
          value: '2',
          label: 'Hou',
        },
        {
          value: '3',
          label: 'Gan',
        },
        {
          value: '4',
          label: 'Ohuo',
        },
        {
          value: '5',
          label: 'Nice!',
        },
      ]
    }
  },
  methods: {
    search(){
      this.getData(this.params);
      document.getElementById("searchBtn").blur();
    },
    loadData(){
      this.articles.push({
        title: "从Paxos到Zookeeper分布式一致性原理与实践",
        description:
          "本书将会从分布式一致性的理论出发，向读者进解几种典型的分布式一致性协议是如何解决分布式一致性问",
        createTime: "2021/04/12 19:52",
        skim: "777",
        type: "分布式架构",
      });
    },
    // more 页面跳转
    jumpToPage (target) {
      this.$router.push(target)
    },
    randomType(){
      const types = ['success','info','warning','danger']
      let randomInt = Math.floor((Math.random() * 10) + 1)
      return types[randomInt%types.length]
    },
    getData (params) {
      console.log(params)
      this.isLoading = true;
      let loadingInstance = this.$loading({
        target: document.querySelector('.articles')
      })
      setTimeout(function () {
        loadingInstance.close()
      }, 2000);
      this.isLoading = false;
    }
  },
  computed: {
  }
}
</script>

<style scoped>
 .el-card {
   border-radius: 10px;
 }
 .article_content:hover {
   cursor: pointer;
 }
</style>
