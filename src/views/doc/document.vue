<template>
  <div>
    <global-header :currentPage="$route.path">
      Changing your life's style
    </global-header>

    <div class="backStep">
      <a @click="$router.go(-1)"><el-icon style="vertical-align: -10%">
        <ArrowLeftBold />
      </el-icon><span>返回</span></a>
    </div>

    <!-- 文章内容 -->
    <div class="article_container">
      <el-scrollbar height="50rem">
        <div class="article_content">
          <v-md-editor v-model="text"
           mode="preview"
           @copy-code-success="handleCopyCodeSuccess"></v-md-editor>
        </div>

      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import "css/articles.css";
import rightTopNavBar from "@/components/rightTopNavBar";
import globalHeader from '@/components/globalHeader'
import postApi from '@/api/post'
export default {
  name: "document",
  components: {
    rightTopNavBar,
    globalHeader
  },
  data() {
    return {
      text: ''
    };
  },
  created() {
    this.handleLoadData()
  },
  methods: {
    handleCopyCodeSuccess(){
      this.$message.success("代码复制成功")
    },
    handleLoadData(){
      try {
        postApi.detail(this.$route.params.id).then(response => {
          debugger
          if(response.code === 1){
            this.text = response.data.content
          }else {
            this.$message.error(response.msg)
          }
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
  width: 1200px;
  margin: 10px auto;
}
::v-deep(.v-md-editor--preview) {
  box-shadow: 0 0 5px 1px #d4d4d4;
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
