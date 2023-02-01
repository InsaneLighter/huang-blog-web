<template>
  <div class="parentContainer">
    <div class="container">
      <!--右上导航栏-->
      <global-header :currentPage="$route.path">
        Today,I consider myself the luckiest man on the face of the earth
      </global-header>
    </div>

    <div class="backStep">
      <a @click="$router.push('/')">
        <left-circle-outlined :style="{fontSize: '24px'}"/>
      </a>
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
        <a-divider/>
        <div class="articles">
          <div class="skeleton" v-if="isLoading">
            <a-skeleton v-for="index of 4" :key="index" active :paragraph="{ rows: 4 }"/>
          </div>
          <a-list v-else item-layout="vertical" size="large" :pagination="pagination" :data-source="articles">
            <template #renderItem="{ item }">
              <a-list-item key="item.title">
                <template #actions>
                  <span>
                    <component :is="'LikeOutlined'" @click="isLiked(item.id)?removeLike(item):handleLike(item)"
                               :style="isLiked(item.id)?{marginRight: '8px',cursor:'pointer',color: '#464646',verticalAlign: 'middle'}:{marginRight: '8px',cursor:'pointer',color: 'rgba(0, 0, 0, 0.45)',verticalAlign: 'middle'}"/>
                    <span style="vertical-align: middle">
                      {{ item.likes }}
                    </span>
                  </span>
                  <span>
                    <component :is="'eyeOutlined'"
                               :style="{marginRight: '8px',cursor:'pointer',verticalAlign: 'middle'}"/>
                    <span style="vertical-align: middle">
                      {{ item.visit }}
                    </span>
                  </span>
                  <span>
                    <component :is="'MessageOutlined'" @click=""
                               :style="{marginRight: '8px',cursor:'pointer',verticalAlign: 'middle'}"/>
                     <span style="vertical-align: middle">
                      {{ item.comments || 0 }}
                    </span>
                  </span>
                </template>
                <template #extra>
                  <img
                    width="272"
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    @click="jumpToPage('/doc/' + item.id)"
                  />
                </template>
                <!--TODO summary 85个字-->
                <a-list-item-meta :description="item.summary" @click="jumpToPage('/doc/' + item.id)">
                  <template #title>
                    <div class="article_title">{{ item.title }}</div>
                  </template>
                </a-list-item-meta>
                {{ item.content }}
              </a-list-item>
            </template>
          </a-list>
        </div>
      </div>
    </div>

    <!-- 回到顶部 -->
    <a-back-top/>
  </div>
</template>

<script>
import 'css/articles.css'
import globalHeader from '@/components/globalHeader'
import postApi from '@/api/post'
import dayjs from 'dayjs'
import { datetimeFormat } from '@/utils/datetime'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
import journalApi from '@/api/journal'

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
      categories: [],
      page: 1
    }
  },
  computed: {
    pagination () {
      return {
        onChange: (page) => {
          this.loadData(page)
        },
        current: this.page,
        pageSize: this.params.size,
        total: this.totalCount,
        hideOnSinglePage: true
      }
    }
  },
  methods: {
    filterOption (input, option) {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
    },
    getCategory () {
      try {
        postApi.category().then(response => {
          if (response.code === 1) {
            this.categories = response.data
          } else {
            this.$message.error(response.msg)
          }
        })
      } catch (e) {
        this.$message.error('Failed to load categories', e)
      }
    },
    chooseCategory (categoryName) {
      let categoryId
      this.categories.forEach(item => {
        if (item.name === categoryName) {
          categoryId = item.value
        }
      })
      this.params.category = categoryId
      this.search()
    },
    datetimeFormat (date, pattern) {
      return datetimeFormat(date, pattern = 'YYYY-MM-DD HH:mm')
    },
    // more 页面跳转
    jumpToPage (target) {
      this.$router.push(target)
    },
    loadData (page = 1) {
      this.page = page
      this.params.page = page - 1
      this.isLoading = true
      var dateArr = this.date || []
      this.params.startDate = dateArr.length > 0 && dateArr[0] ? dayjs(dateArr[0]).format('YYYY-MM-DD') : ''
      this.params.endDate = dateArr.length > 0 && dateArr[1] ? dayjs(dateArr[1]).format('YYYY-MM-DD') : ''
      try {
        postApi.list(this.params).then(response => {
          if (response.code === 1) {
            this.articles = response.data.list
            this.totalCount = response.data.totalCount
          } else {
            this.$message.error(response.msg)
          }
        }).finally(() => {
          this.isLoading = false
        })
      } catch (e) {
        this.$message.error('Failed to load articles', e)
      }
    },
    handleLike (item) {
      item.likes += 1
      let likesArr = JSON.parse(window.localStorage.getItem('huang_blog_articles_like')) || []
      likesArr.push(item.id)
      window.localStorage.setItem('huang_blog_articles_like', JSON.stringify(likesArr))
      try {
        postApi.like({
          id: item.id,
          like: true
        }).then(response => {
          if (response.code !== 1) {
            this.$message.error(response.msg)
          }
        })
      } catch (e) {
        this.message.error('Failed to like articles', e)
      }
    },
    removeLike (item) {
      item.likes -= 1
      let likesArr = JSON.parse(window.localStorage.getItem('huang_blog_articles_like')) || []
      likesArr = likesArr.filter(ele => ele !== item.id)
      window.localStorage.setItem('huang_blog_articles_like', JSON.stringify(likesArr))
      try {
        postApi.like({
          id: item.id,
          like: false
        }).then(response => {
          if (response.code !== 1) {
            this.$message.error(response.msg)
          }
        })
      } catch (e) {
        this.message.error('Failed to unlike articless', e)
      }
    },
    isLiked (id) {
      let likesArr = JSON.parse(window.localStorage.getItem('huang_blog_articles_like')) || []
      return likesArr.indexOf(id) > -1
    }
  }
}
</script>
<style lang="less" scoped>
.backStep {
  position: absolute;
  top: 14%;
  left: 14%;
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

:deep(.ant-list-item-meta-content) {
  height: 8rem;
}

:deep(.ant-list-item-meta-content:hover) {
  cursor: pointer;
}

:deep(.ant-list-item-extra:hover) {
  cursor: pointer;
}

:deep(.ant-list-pagination) {
  padding-right: 20px;
  padding-bottom: 20px;
}
</style>
