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
            <div class="articleTitle">{{ article.title }}<span v-if="article.topPriority === 1" id="topPriority">置顶</span></div>
            <div class="articleDesc">
              {{ handleDateTrans(article.createTime) }}&nbsp;&nbsp;&nbsp;&nbsp;阅读&nbsp;&nbsp;{{ article.visit || 0 }}
            </div>
          </div>
          <a-divider/>
          <md-editor v-model="article.originContent" :editorId="article.title" previewTheme="cyanosis" preview-only/>
          <MdCatalog :editorId="article.title" :scrollElement="scrollElement" />
        </div>
        <comment :postId="this.$route.params.id"></comment>
      </div>
    </div>
    <!-- 回到顶部 -->
    <a-back-top/>
  </div>
</template>

<script>
import MdEditor from 'md-editor-v3';
import 'css/articles.css'
import "md-editor-v3/lib/style.css";
import rightTopNavBar from '@/components/rightTopNavBar'
import globalHeader from '@/components/globalHeader'
import postApi from '@/api/post'
import Comment from '@/components/utils/comment'
import { timeAgo } from '@/utils/datetime'
import {addMeta} from "@/utils/addMeta";

const MdCatalog = MdEditor.MdCatalog;
export default {
  name: 'document',
  components: {
    MdEditor,
    MdCatalog,
    Comment,
    rightTopNavBar,
    globalHeader
  },
  data () {
    return {
      scrollElement: document.documentElement,
      isLoading: false,
      article: {
        title: '',
        summary: '',
        topPriority: '',
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
        addMeta(this.article.title,this.article.summary)
        document.querySelector(".md-editor-catalog").setAttribute("style","display: none !important;");
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
      let scroll = window.scrollTop
      // 获取当前文档流的 scrollTop
      const scrollTop = scroll || document.documentElement.scrollTop || document.body.scrollTop
      if(scrollTop < 100){
        document.querySelector(".md-editor-catalog").setAttribute("style","display: none !important;");
      }else {
        document.querySelector(".md-editor-catalog").removeAttribute("style");
      }
    },
    handleIncrVisit () {
      postApi.incrVisit(this.$route.params.id)
    },
    handleDateTrans (datetime) {
      return timeAgo(datetime)
    },
    handleLoadData () {
      this.isLoading = true
      try {
        postApi.detail(this.$route.params.id).then(response => {
          if (response.code === 1) {
            this.article = response.data
            this.isLoading = false
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
.md-editor {
  padding: 0 2.5rem;
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
.md-editor-catalog  {
  position: fixed;
  top: 5%;
  right: 6%;
  width: 220px;
  height: 82%;
  overflow-y: auto;
  font-size: 14px;
  font-weight: 500;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;;
}

:deep(.md-editor-catalog-link span) {
  color: rgba(60, 60, 60, .7) !important;
  font-weight: normal;
}
:deep(.md-editor-catalog-active > span) {
  color: #000 !important;
  font-weight: 600 !important;
}
#topPriority {
  position: relative;
  top: -5px;
  font-size: 14px;
  color: #fff;
  font-weight: normal;
  padding: 2px 5px 2px 5px;
  border-radius: 5px;
  background-color: #ff4545;
  margin-left: 10px;
}
</style>
