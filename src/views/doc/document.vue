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
      <div class="skeleton" v-if="isLoading">
        <a-skeleton v-for="index of 4" :key="index" active :paragraph="{ rows: 4 }"/>
      </div>
      <div v-else>
        <div class="articleContent">
          <div class="articleHead">
            <div class="articleTitle">{{article.title}}</div>
            <div class="articleDesc">{{handleDateTrans(article.createTime)}}&nbsp;&nbsp;&nbsp;&nbsp;阅读 0</div>
          </div>
          <a-divider/>
          <v-md-editor v-model="article.content"
                       mode="preview"
                       @copy-code-success="handleCopyCodeSuccess"></v-md-editor>
        </div>
        <comment></comment>
      </div>
    </div>
    <!-- 回到顶部 -->
    <a-back-top/>
  </div>
</template>

<script>
import "css/articles.css";
import rightTopNavBar from "@/components/rightTopNavBar";
import globalHeader from '@/components/globalHeader'
import postApi from '@/api/post'
import Comment from '@/components/utils/comment'
import {timeAgo} from '@/utils/datetime'
export default {
  name: "document",
  components: {
    Comment,
    rightTopNavBar,
    globalHeader
  },
  data() {
    return {
      isLoading: false,
      article: {
        title: '',
        content: '',
        createTime: '',
        visit: 0
      }
    }
  },
  created() {
    this.handleLoadData()
  },
  methods: {
    handleDateTrans(datetime){
      return timeAgo(datetime)
    },
    handleCopyCodeSuccess(){
      this.$message.success("代码复制成功")
    },
    handleLoadData(){
      this.isLoading = true
      try {
        postApi.detail(this.$route.params.id).then(response => {
          if(response.code === 1){
            this.article = response.data
          }else {
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
};
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
:deep(.u-comment){
  margin-top: .5rem;
}
.skeleton {
  padding: 0 10px;
  background-color: #fff;
  border-radius: 5px;
}
</style>
