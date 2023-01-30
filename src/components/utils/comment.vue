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
import {mapGetters} from "vuex";
import commentApi from '@/api/comment'
let temp_id = 100

export default {
  name: 'comment',
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  data(){
    return {
      config: reactive({
        user: {
          // id: this.user.id,
          id: 0,
          // 评论id数组 建议:存储方式用户id和文章id和评论id组成关系,根据用户id和文章id来获取对应点赞评论id,然后加入到数组中返回
          // likeIds: this.user.likes?this.user.likes.split(","):[]
          likeIds: []
        },
        emoji: emoji,
        comments: []
      })
    }
  },
  props:{
    postId: String
  },
  created () {
    this.handleListComments()
  },
  methods: {
    async handleListComments() {
      try {
        commentApi.queryCommentsTree(this.postId).then(response => {
          debugger
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
      console.log(content, parentId)
      let comment = {
        parentId: parentId,
        uid: this.user.id,
        username: this.user.username,
        address: this.user.address,
        content: content,
        like: 0,
        reply: null
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
        this.$message.info('评论成功!')
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
      this.comments.forEach(item => {
        if (item.id === parentId) {
          replyList = item.reply
        }
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
        commentApi.like({uid: "0",id:id}).then(response => {
          if(response.code !== 1){
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
