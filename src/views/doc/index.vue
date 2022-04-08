<template>
  <div>
    <div class="container">
      <!--右上导航栏-->
      <rightTopNavBar :menuPages="rightTopMenus"></rightTopNavBar>

      <!--背景图片 title-->
      <div class="main_bg div_news">
        <div class="p1">
          Today,I consider myself the luckiest man on the face of the earth
        </div>
      </div>
    </div>

    <!-- 标签菜单 -->
    <div class="tagMenu">
      <el-select
        style="width:12rem;margin-left: 5rem"
        v-model="tagName"
        clearable
        filterable
        placeholder="分类标签"
        @change="addNewTag"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <div class="tags">
        <el-tag
          :key="tag"
          :type="tag.randomType"
          v-for="tag in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{ tag.name }}
        </el-tag>
      </div>
    </div>
    <!-- 查询容器 -->
    <div class="queryContainer">
      <div class="search">
        <el-input placeholder="搜索" style="width:12rem" v-model="searchContent" @change="searchArticle"
                  clearable></el-input>
        <el-button icon="Search" style="margin-left: 5px;margin-bottom: 4px" circle @click="searchArticle"/>
      </div>
    </div>

    <!--文章内容渲染-->
    <div class="mian_box">
      <div class="content">
        <el-scrollbar v-loading="false" height="50rem">
          <ul class="articles">
            <li v-for="item in articles" :key="item.id">
              <div class="article_content">
                <a
                  href="javascript:void(0)"
                  @click="jumpToPage('/doc/' + item.id)"
                >
                  <p class="article_title">{{ item.title }}</p>
                  <p class="article_desc">{{ item.description }}</p>
                  <div>
                    <span class="article_detail">
                      <label>时间: </label><span>{{ item.createTime }}</span>
                    </span>
                      <span class="article_detail">
                      <label>浏览: </label><span>{{ item.skim }}</span>
                    </span>
                    <span class="article_detail">
                    <label>分类: </label>
                    <span>
                      <a href="javascript:void(0)">{{ item.type }}</a>
                    </span>
                  </span>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </el-scrollbar>
      </div>
      <!-- 分页 -->
      <div>
        <el-pagination
          class="pagination"
          :hide-on-single-page="isSinglePage"
          @current-change="handleCurrentChange"
          @prev-click="handlePreClick"
          @next-click="handleNextClick"
          v-model:currentPage="this.params.currentPage"
          :page-size="10"
          layout="total, prev, pager, next"
          :total="this.params.totalCount"
          />
      </div>
    </div>
  </div>
</template>

<script>
import 'css/articles.css'
import 'js/jquery-3.6.0'
import { proNavanimate } from 'js/qs-jquery-1.0'
import { qs_index } from 'js/qs_index'
import 'js/articles'
import rightTopNavBar from '../../components/rightTopNavBar/index.vue'
import { Search } from '@element-plus/icons-vue'

export default {
  name: 'doc',
  components: {
    rightTopNavBar
  },
  created () {
    // 引入js
    proNavanimate()
    qs_index()
  },
  mounted () {
    // 引入js
    proNavanimate()
    qs_index()
    //请求
    this.getData(this.params)
  },
  data () {
    return {
      menuPages: [
        {
          index: 'div_index1',
          name: '不用看~是首页',
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
        pageSize: '10',
        currentPage: 1,
        totalCount: 100,
      },
      options: [
        {
          value: 'Wa~',
          label: 'Wa~',
        },
        {
          value: 'Hou~',
          label: 'Hou~',
        },
        {
          value: 'Gan~',
          label: 'Gan~',
        },
        {
          value: 'Ohuo~',
          label: 'Ohuo~',
        },
        {
          value: 'Nice!',
          label: 'Nice!',
        },
      ],
      tagName: '',
      dynamicTags: [],
      searchContent: ''
    }
  },
  methods: {
    // more 页面跳转
    jumpToPage (target) {
      this.$router.push(target)
    },
    handleCurrentChange (value) {
      this.params.currentPage = value
      //请求
      this.getData(this.params)
    },
    handlePreClick (value) {
      this.params.currentPage = value
      //请求
      this.getData(this.params)
    },
    handleNextClick (value) {
      this.params.currentPage = value
      //请求
      this.getData(this.params)
    },
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      //请求
      this.getData(this.params)
    },
    addNewTag () {
      let tagName = this.tagName
      let index = this.dynamicTags.findIndex((item) => {
        return item.name == tagName
      })
      if (index == -1) {
        this.dynamicTags.push({name:tagName,randomType: this.randomType()})
        //请求
        this.getData(this.params)
      } else {
        this.$message({
          showClose: true,
          message: '已经选择过了哦~',
        })
      }
      this.tagName = ''
    },
    randomType(){
      const types = ['success','info','warning','danger']
      let randomInt = Math.floor((Math.random() * 10) + 1)
      return types[randomInt%types.length]
    },
    searchArticle () {
      console.log(this.searchContent)
      this.getData(this.params)
    },
    getData (params) {
      let loadingInstance = this.$loading({
        target: document.querySelector('.content')
      })
      setTimeout(function () {
        loadingInstance.close()
      }, 2000)
    },
  },
  computed: {
    rightTopMenus: function () {
      return this.menuPages.filter(function (item) {
        return item.target != '/doc'
      })
    },
    isSinglePage: function () {
      return this.params.totalCount <= this.params.pageSize
    },
  },
}
</script>

<style scoped>
.tagMenu {
  position: absolute;
  width: 300px;
  height: 200px;
  top: 130px;
  left: 45px;
  z-index: 99;
}

.queryContainer {
  position: absolute;
  width: 300px;
  height: 200px;
  top: 130px;
  right: 45px;
  z-index: 999;
}

.tags {
  margin-top: 10px;
}

.el-tag + .el-tag {
  margin-left: 10px;
  margin-top: 10px;
}

.content {
  width: 60rem;
  margin: 0 auto;
}

.p1 {
  height: 6rem;
  line-height: 6rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.pagination {
  width: 30rem;
  margin: 0 auto;
}
.classify {
  margin-top: 5px;
  height: 20px;
  line-height: 20px;
}
</style>
