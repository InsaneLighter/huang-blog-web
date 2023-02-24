<template>
  <div class="parentContainer">
    <global-header :currentPage="$route.path">
      Changing your life's style
    </global-header>

    <div class="backStep">
      <a @click="$router.push('/doc')">
        <left-circle-outlined :style="{fontSize: '24px'}"/>
      </a>
    </div>

    <!-- 文章内容 -->
    <div class="articleContainer">
      <div class="skeleton" v-show="isLoading">
        <a-skeleton v-for="index of 4" :key="index" active :paragraph="{ rows: 4 }"/>
      </div>
      <div v-show="!isLoading">
        <div class="articleContent">
          <div class="articleHead">
            <div class="articleTitle">{{ article.title }}</div>
            <div class="articleDesc">
              {{ handleDateTrans(article.createTime) }}&nbsp;&nbsp;&nbsp;&nbsp;阅读&nbsp;&nbsp;{{ article.visit || 0 }}
            </div>
          </div>
          <a-divider/>
          <div class="anchor" style="display: none">
            <div
              v-for="(anchor,k) in titles"
              :key="k"
              :class="{ active: active == k }"
              :style="{ padding: `3px 0 3px ${anchor.indent * 20 +16}px`}"
            >
              <a style="cursor: pointer" @click="scrollTo(k)">{{ anchor.title }}</a>
            </div>
          </div>
          <v-md-preview :text="article.originContent"
                        @copy-code-success="handleCopyCodeSuccess"
                        ref="preview"></v-md-preview>
        </div>
        <comment :postId="this.$route.params.id"></comment>
      </div>
    </div>
    <!-- 回到顶部 -->
    <a-back-top/>
  </div>
</template>

<script>
import 'css/articles.css'
import rightTopNavBar from '@/components/rightTopNavBar'
import globalHeader from '@/components/globalHeader'
import postApi from '@/api/post'
import Comment from '@/components/utils/comment'
import { timeAgo } from '@/utils/datetime'

export default {
  name: 'document',
  components: {
    Comment,
    rightTopNavBar,
    globalHeader
  },
  data () {
    return {
      props: {
        targetOffset: 0,
        target: ''
      },
      target: undefined,
      active: 0,
      titles: [],
      isLoading: false,
      article: {
        title: '',
        content: '',
        createTime: '',
        visit: 0
      }
    }
  },
  created () {
    this.handleLoadData()
    this.handleIncrVisit()
  },
  watch: {
    article(value) {
      if (value) {
        window.removeEventListener("scroll",this.onScroll)
        window.addEventListener("scroll",this.onScroll)
      }
    }
  },
  unmounted () {
    window.removeEventListener("scroll",this.onScroll)
  },
  methods: {
    onScroll(){
      const anchors = document.querySelector(".v-md-editor-preview").querySelectorAll('h1,h2,h3,h4,h5,h6');
      // 所有锚点元素的 offsetTop
      const offsetTopArr = []
      anchors.forEach(v => {
        offsetTopArr.push(v.offsetTop)
      })
      let scroll = window.scrollTop
      // 获取当前文档流的 scrollTop
      const scrollTop = scroll || document.documentElement.scrollTop || document.body.scrollTop
      if(scrollTop < 100){
        document.querySelector(".anchor").setAttribute("style","display: none !important;");
      }else {
        document.querySelector(".anchor").removeAttribute("style");
      }
      // 定义当前点亮的导航下标
      offsetTopArr.forEach((v, k) => {
        if (scrollTop >= v - 50 - this.props.targetOffset) {
          this.active = k
        }
      })
      let anchorOffsetTop = this.$el.querySelector(".active").offsetTop
      if(anchorOffsetTop && anchorOffsetTop > 50){
        document.querySelector(".anchor").scrollTo(
          {
            top: this.$el.querySelector(".active").offsetTop - 300,
            behavior: 'smooth'
          }
        )
      }
    },
    scrollTo(k){
      const anchors = document.querySelector(".v-md-editor-preview").querySelectorAll('h1,h2,h3,h4,h5,h6');
      let item = anchors.item(k)
      let offsetTop = item.offsetTop
      if (this.props.target) {
        this.target.scrollTo({
          top: offsetTop - this.props.targetOffset,
          behavior: 'smooth'
        })
      } else {
        document.documentElement.scrollTo({
          top: offsetTop - this.props.targetOffset,
          behavior: 'smooth'
        })
      }
    },
    handleIncrVisit () {
      postApi.incrVisit(this.$route.params.id)
    },
    handleDateTrans (datetime) {
      return timeAgo(datetime)
    },
    handleCopyCodeSuccess () {
      this.$message.success('代码复制成功')
    },
    handleLoadData () {
      this.isLoading = true
      try {
        postApi.detail(this.$route.params.id).then(response => {
          if (response.code === 1) {
            this.article = response.data
            this.isLoading = false
            this.$nextTick(function () {
              const anchors = document.querySelector(".v-md-editor-preview").querySelectorAll('h1,h2,h3,h4,h5,h6');
              const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());
              if (!titles.length) {
                this.titles = [];
                return;
              }
              const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort();
              this.titles = titles.map((el) => ({
                title: el.innerText,
                lineIndex: el.getAttribute('data-v-md-line'),
                indent: hTags.indexOf(el.tagName),
                offsetTop: el.offsetTop
              }));
            })
          } else {
            this.$message.error(response.msg)
          }
        }).finally(() => {
          this.isLoading = false
        })
      } catch (e) {
        this.$message.error('Failed to load data', e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article_content {
  text-align: left;
  margin: 10px auto;
}

:deep(.v-md-editor--preview) {
  box-shadow: 0 0 5px 1px #d4d4d4;
}

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

:deep(.comment-view) {
  width: 60vw;
  margin: 0 auto;
}

:deep(.v-md-editor--preview) {
  box-shadow: none;
}

:deep(.ant-divider-horizontal) {
  margin: 0
}

:deep(.u-comment) {
  margin-top: .5rem;
}

.skeleton {
  padding: 0 10px;
  background-color: #fff;
  border-radius: 5px;
}
.anchor {
  position: fixed;
  top: 7%;
  right: 6%;
  width: 220px;
  height: 82%;
  overflow-y: auto;
  border-left: 1px solid rgba(60, 60, 60, .12);
  font-size: 13px;
  font-weight: 500;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;;
}
.anchor a {
  color: rgba(60, 60, 60, .7);
  text-decoration: none;
}
.anchor a:hover {
  cursor: pointer;
  font-weight: 600;
  color: #213547;
}
.active {
  //border-left: 1px solid #213547;
}
.active a {
  color: #213547;
  font-weight: 600;
}

.active::before{
  content: '';
  position: absolute;
  left: -2px;
  background-color: #213547;
  border-radius: 4px;
  width: 3px;
  height: 20px;
}
//::-webkit-scrollbar { width: 0 !important }
</style>
