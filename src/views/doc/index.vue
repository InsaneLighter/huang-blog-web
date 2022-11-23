<template>
  <div class="parentContainer">
    <div class="container">
      <!--右上导航栏-->
      <global-header :currentPage="$route.path">
        Today,I consider myself the luckiest man on the face of the earth
      </global-header>
    </div>

    <div class="backStep">
      <a @click="$router.push('/')"><left-circle-outlined :style="{fontSize: '24px'}"/></a>
    </div>


    <!--文章内容渲染-->
    <div class="articleContainer">
      <div class="articleContent">
        <a-form
          ref="formRef"
          class="ant-advanced-search-form"
          style="padding: 24px 10px 0px"
        >
          <a-row :gutter="24">
            <a-col :span="6">
              <a-form-item
                name="keyword"
                label="关键字"
              >
                <a-input v-model:value="this.params.keyword"></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item
                name="category"
                label="分类"
              >
                <a-select
                  v-model:value="this.params.category"
                  show-search
                  placeholder="选择分类"
                  :options="this.categories"
                  :filter-option="filterOption"
                ></a-select>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item
                name="date"
                label="日期"
              >
                <a-range-picker v-model:value="date" :locale="locale"/>
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-button type="primary" html-type="submit" @click="loadData">查询</a-button>
              <a-button style="margin: 0 8px" @click="() => formRef.resetFields()">重置</a-button>
            </a-col>
          </a-row>
        </a-form>
        <a-divider />
        <div class="articles">
          <a-skeleton v-if="isLoading" v-for="index of 6" :key="index" active />
          <el-card shadow="hover" :body-style="{ padding: '0px'}" v-for="item in articles" :key="item.id">
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
        </div>
      </div>
    </div>

    <!-- 回到顶部 -->
    <a-back-top />
  </div>
</template>

<script>
import 'css/articles.css'
import globalHeader from '@/components/globalHeader'
import postApi from '@/api/post'
import dayjs from 'dayjs'
import {datetimeFormat} from "@/utils/datetime";
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';

export default {
  name: 'doc',
  components: {
    globalHeader
  },
  created () {
  },
  mounted () {
    this.getCategory()
    this.loadData()
  },
  data () {
    return {
      locale: locale,
      date: [],
      params: {
        keyword: '',
        category: '',
        page: 0,
        size: 10
      },
      totalCount: 0,
      isLoading: false,
      articles: [],
      categories: []
    }
  },
  methods: {
    filterOption(input, option){
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
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
    datetimeFormat(date,pattern){
      return datetimeFormat(date,pattern = 'YYYY-MM-DD HH:mm')
    },
    // more 页面跳转
    jumpToPage (target) {
      this.$router.push(target)
    },
    loadData () {
      this.isLoading = true;
      var dateArr = this.date
      this.params.startDate = dateArr.length > 0 && dateArr[0] ? dayjs(dateArr[0]).format('YYYY-MM-DD') : ''
      this.params.endDate = dateArr.length > 0 && dateArr[1] ? dayjs(dateArr[1]).format('YYYY-MM-DD') : ''
      try {
        postApi.list(this.params).then(response => {
          if(response.code === 1){
            this.articles = response.data.list
            this.totalCount = response.data.totalCount
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
  }
}
</script>
<style lang="less" scoped>
.backStep {
  position: fixed;
  top: 15%;
  left: 15%;
  font-size: 16px;
  z-index: 999;
  a {
    color: #afadad;
  }
  a:hover {
    color: #343434;
  }

  span {
    margin-left: 5px
  }
}
:deep(.ant-divider-horizontal) {
  margin: 0
}
</style>
