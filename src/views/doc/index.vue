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
              <el-input placeholder="关键字" v-model="params.keyword" clearable></el-input>
            </el-form-item>
            <el-form-item label="分类标签">
              <!-- 标签菜单 -->
              <el-select v-model="params.category"
                         placeholder="分类标签"
              >
                <el-option v-if="categories.length > 0"
                  v-for="item in categories"
                  :key="item.value"
                  :label="item.name"
                  :value="parseInt(item.value)"
                >
                </el-option>
                <el-option v-else
                           label="-请选择-"
                           value=""
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
          <ul v-if="isMounted" class="infinite-list"
              ref="infiniteList"
              v-infinite-scroll="getData"
              :infinite-scroll-disabled="disabled"
              infinite-scroll-immediate="false"
              style="overflow:auto">
            <li v-for="(item,index) in articles" :key="item.id" class="infinite-list-item" :style="{marginTop: index === 0?'0':'10px'}">
              <el-card shadow="hover" :body-style="{ padding: '0px'}">
                <div class="article_content">
                  <div class="article_title" @click="jumpToPage('/doc/' + item.id)">{{ item.title }}</div>
                  <div class="article_detail" @click="jumpToPage('/doc/' + item.id)">
                    {{ item.summary }}
                  </div>
                  <div>
                    <div class="article_desc">时间: {{ datetimeFormat(item.createTime) }}</div>
                    <div class="article_desc">浏览: {{ item.visit }}</div>
                    <div class="article_desc">分类: <a href="javascript:void(0)" @click="chooseCategory(item.category)">{{ item.category }}</a></div>
                    <div class="clear"></div>
                  </div>
                </div>
              </el-card>
            </li>
          </ul>
          <p v-if="isLoading" v-loading="isLoading"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'css/articles.css'
import globalHeader from '@/components/globalHeader'
import postApi from '@/api/post'
import {datetimeFormat} from "@/utils/datetime";
export default {
  name: 'doc',
  components: {
    globalHeader
  },
  created () {
  },
  mounted () {
    this.getCategory()
    this.getData()
    this.isMounted = true;
    this.$nextTick(() => {
      this.$refs.infiniteList.removeAttribute("v-infinite-scroll")
    })
  },
  data () {
    return {
      params: {
        keyword: '',
        category: '',
        currentCount: 0
      },
      isMounted: false,
      isLoading: false,
      noMore: false,
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
      articles: [],
      categories: []
    }
  },
  methods: {
    getCategory(){
      try {
        postApi.category().then(response => {
          if(response.code === 1){
            this.categories = response.data
          }else {
            this.$message.error(response.msg)
          }
        })
      } catch (e) {
        this.$message.error('Failed to load categories', e)
      }
    },
    chooseCategory(categoryName){
      let categoryId;
      this.categories.forEach(item => {
        if (item.name === categoryName) {
          categoryId = item.value
        }
      })
      this.params.category = categoryId
      this.search()
    },
    datetimeFormat(date){
      return datetimeFormat(date)
    },
    search(){
      this.getData(this.params);
      document.getElementById("searchBtn").blur();
    },
    // more 页面跳转
    jumpToPage (target) {
      this.$router.push(target)
    },
    getData () {
      this.isLoading = true;
      try {
        postApi.list(this.params).then(response => {
          if(response.code === 1){
            let data = response.data;
            if(data.length === this.params.currentCount){
              this.$message.info("没有更多的数据了~")
              this.noMore = true
              return
            }
            this.categories = data
            this.params.currentCount = data.length
            this.articles = response.data
          }else {
            this.$message.error(response.msg)
          }
        }).finally(() => {
          this.isLoading = false;
        })
      } catch (e) {
        this.$message.error('Failed to load articles', e)
      }
    }
  },
  computed: {
    disabled(){
      return this.params.currentCount < 4 ? false : (this.isLoading || this.noMore)
    }

  }
}
</script>

<style scoped>
 .el-card {
   border-radius: 10px;
 }
</style>
