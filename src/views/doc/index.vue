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
                  allowClear
                  v-model:value="this.params.category"
                  show-search
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
              <!--              <a-button type="primary" html-type="submit" @click="loadData(1)">查询</a-button>-->
              <button id="customizedButton" @click="loadData(1)">查询</button>
              <button style="margin: 0 8px" @click="resetCondition">重置</button>
<!--              <a-button style="margin: 0 8px" @click="resetCondition">重置</a-button>-->
            </a-col>
          </a-row>
        </a-form>
        <a-divider/>
        <div class="articles">
          <div class="cover" v-if="isLoading">
            <div class="balls">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="articles">
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
                               :style="{marginRight: '8px',verticalAlign: 'middle'}"/>
                    <span style="vertical-align: middle">
                      {{ item.visit }}
                    </span>
                  </span>
                  <span>
                    <component :is="'MessageOutlined'"
                               :style="{marginRight: '8px',verticalAlign: 'middle'}"/>
                     <span style="vertical-align: middle">
                      {{ item.comments || 0 }}
                    </span>
                  </span>
                </template>
                <template #extra>
                  <img
                    width="272"
                    style="height: 168px;border-radius: 15px"
                    alt="logo"
                    :src="item.cover?item.cover:'https://huanghong.top/minio/huang-blog-attachment/huang-blog-attachment_1676984667240_2023-02-21_863.jpg'"
                    @click="jumpToPage('/doc/' + item.id)"
                  />
                </template>
                <!--TODO summary 85个字-->
                <a-list-item-meta :description="item.summary" @click="jumpToPage('/doc/' + item.id)">
                  <template #title>
                    <h2 class="article_title">
                      <span style="line-height: 30px;">
                        {{ item.title }}
                        <span v-if="item.topPriority === 1" class="topPriority">置顶</span>
                      </span>
                    </h2>
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
import {datetimeFormat} from '@/utils/datetime'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
import {addMeta} from "@/utils/addMeta";

export default {
  name: 'doc',
  components: {
    globalHeader
  },
  mounted() {
    this.getCategory()
    this.loadData(1)
    addMeta("huanghong,个人网站博客内容", "huanghong个人网站博客内容")
  },
  data() {
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
    pagination() {
      return {
        onChange: (page) => {
          this.loadData(page)
        },
        current: this.page || 1,
        pageSize: this.params.size,
        total: this.totalCount,
        hideOnSinglePage: true
      }
    }
  },
  methods: {
    resetCondition() {
      this.params.keyword = ''
      this.params.category = ''
      this.params.startDate = ''
      this.params.endDate = ''
      this.date = []
    },
    filterOption(input, option) {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
    },
    getCategory() {
      try {
        postApi.category().then(response => {
          if (response.code === 1) {
            if (response.data) {
              this.categories = response.data.map(item => {
                return {
                  label: item.name,
                  value: item.id
                }
              })
            }

          } else {
            this.$message.error(response.msg)
          }
        })
      } catch (e) {
        this.$message.error('Failed to load categories', e)
      }
    },
    chooseCategory(categoryName) {
      let categoryId
      this.categories.forEach(item => {
        if (item.name === categoryName) {
          categoryId = item.value
        }
      })
      this.params.category = categoryId
      this.search()
    },
    datetimeFormat(date, pattern) {
      return datetimeFormat(date, pattern = 'YYYY-MM-DD HH:mm')
    },
    // more 页面跳转
    jumpToPage(target) {
      this.$router.push(target)
    },
    loadData(page = 1) {
      this.page = page
      this.params.page = page - 1
      this.isLoading = true
      var dateArr = this.date || []
      this.params.startDate = dateArr.length > 0 && dateArr[0] ? dayjs(dateArr[0]).format('YYYY-MM-DD') : ''
      this.params.endDate = dateArr.length > 0 && dateArr[1] ? dayjs(dateArr[1]).format('YYYY-MM-DD') : ''
      try {
        document.body.scrollTop = document.documentElement.scrollTop = 0
        let htmlEl = document.getElementsByTagName("html")[0]
        htmlEl.setAttribute('style', "overflow-y: hidden !important;")
        postApi.list(this.params).then(response => {
          if (response.code === 1) {
            this.articles = response.data.list
            this.totalCount = response.data.totalCount
          } else {
            this.$message.error(response.msg)
          }
        }).finally(() => {
          const _this = this
          setTimeout(function () {
            _this.isLoading = false
            htmlEl.setAttribute('style', "overflow-y: auto !important;")
          },700)
        })
      } catch (e) {
        this.$message.error('Failed to load articles', e)
      }
    },
    handleLike(item) {
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
    removeLike(item) {
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
    isLiked(id) {
      let likesArr = JSON.parse(window.localStorage.getItem('huang_blog_articles_like')) || []
      return likesArr.indexOf(id) > -1
    }
  }
}
</script>
<style lang="less" scoped>
.backStep {
  position: absolute;
  top: 15%;
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

:deep(.ant-select-clear) {
  top: 43%
}

.topPriority {
  position: relative;
  top: -2px;
  font-size: 14px;
  color: #fff;
  font-weight: normal;
  padding: 2px 5px 2px 5px;
  border-radius: 5px;
  background-color: #ff4545;
}

button {
  height: 32px;
  width: 60px;
  line-height: 12px;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  padding: 0.5em 1em;
  outline: none;
  border: 1px solid #000000;
  color: white;
  background-color: #000;
  overflow: hidden;
  transition: color 0.4s ease-in-out;
  border-radius: 5px;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 100%;
  right: 100%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #fff;
  transform-origin: center;
  transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

button:hover {
  cursor: pointer;
  color: #000;
}

button:hover::before {
  transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
}

button:active {
  animation: btnClick 0.6s;
}

@keyframes btnClick {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}

.cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 200;
}
.balls {
  position: relative;
  top: 50%;
  left: 49%;
  width: 4em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.balls div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #000;
}

.balls div:nth-of-type(1) {
  transform: translateX(-100%);
  animation: left-swing 0.5s ease-in alternate infinite;
}

.balls div:nth-of-type(3) {
  transform: translateX(-95%);
  animation: right-swing 0.5s ease-out alternate infinite;
}

@keyframes left-swing {
  50%,
  100% {
    transform: translateX(95%);
  }
}

@keyframes right-swing {
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
}
:deep(.anticon) {
  vertical-align: 0.2em;
}
</style>
