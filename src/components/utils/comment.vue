<template>
  <div class="comment-view">
    <u-comment
      :config="config"
      page
      @submit="submit"
      @like="like"
      @remove="removeComment"
      @reply-page="replyPage"></u-comment>
  </div>
</template>

<script>
import { reactive } from 'vue'
import emoji from '@/assets/js/emoji'
import commentApi from '@/api/comment'

export default {
  name: 'comment',
  props:{
    postId: String
  },
  created () {
    this.config.user.id = this.visitor.id
    this.config.user.likeIds = this.visitor.likeids?this.visitor.likeids.split(","):[]
    this.handleListComments()
  },
  data(){
    return {
      config: reactive({
        user: {
          id: -1,
          // 评论id数组 建议:存储方式用户id和文章id和评论id组成关系,根据用户id和文章id来获取对应点赞评论id,然后加入到数组中返回
          likeIds: []
        },
        emoji: emoji,
        comments: []
      }),
      visitor: JSON.parse(window.localStorage.getItem("huang-blog-temp-visitor"))
    }
  },
  methods: {
    async handleListComments() {
      try {
        commentApi.queryCommentsTree(this.postId).then(response => {
          if(response.code === 1){
            this.config.comments = response.data
          }else {
            this.$message.error(response.msg)
          }
        })
      } catch (error) {
        this.$message.error(error)
      }
    },
    submit(content, parentId, finish){
      let comment = {
        parentId: parentId,
        uid: this.visitor.id,
        username: this.visitor.username,
        address: this.visitor.address,
        content: content,
        like: 0,
        reply: null,
        postId: this.postId,
        status: 0
      }
      try {
        commentApi.add(comment).then(response => {
          if(response.code !== 1){
            this.$message.error(response.msg)
          }
        })
      } catch (error) {
        this.$message.error(error)
      }finally {
        finish(comment)
        this.$message.info('评论成功!(待Huang审核通过后即可查看)')
      }
    },
    removeComment(id,finish){
      try {
        commentApi.del(id).then(response => {
          if(response.code !== 1){
            this.$message.error(response.msg)
          }
        })
      } catch (error) {
        this.$message.error(error)
      }finally {
        finish()
        this.$message.info('删除评论成功!')
      }
    },
    page(pageNum, pageSize, arr){
      let skipNum = (pageNum - 1) * pageSize
      return skipNum + pageSize >= arr.length ? arr.slice(skipNum, arr.length) : arr.slice(skipNum, skipNum + pageSize)
    },
    //回复分页
    replyPage({parentId, pageNum, pageSize,finish}){
      console.log(parentId,pageNum,pageSize)
      let replyList = []
      //replyList
      this.config.comments.filter(item => item.id === parentId).forEach(item => {
          replyList = item.reply.list
      })
      let tmp = this.page(pageNum, pageSize, replyList)
      console.log(tmp)
      setTimeout(() => {
        finish(tmp)
      }, 200)
    },
    // 点赞按钮事件
    like(id, finish){
      try {
        commentApi.like({uid: this.visitor.id,id:id}).then(response => {
          if(response.code === 1){
            this.visitor = response.data
            window.localStorage.setItem("huang-blog-temp-visitor",JSON.stringify(this.visitor))
          }else {
            this.$message.error(response.msg)
          }
        })
      } catch (error) {
        this.$message.error(error)
      }finally {
        finish()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.vp-doc ul {
  list-style: none !important;
}

.vp-doc ul,
.vp-doc ol {
  padding-left: 0 !important;
  margin: 0 !important;
}

.vp-doc li + li {
  margin-top: 0px !important;
}
:deep(.ant-avatar-group .ant-avatar) {
  margin-right: 16px !important;
  border-color: #c6c6c6;
}
:deep(.ant-avatar-group .ant-avatar:hover) {
  cursor: pointer;
  border-color: #888888;
}
</style>
