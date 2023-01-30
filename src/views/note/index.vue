<template>
  <div class="parentContainer">
    <global-header :currentPage="$route.path">
      Daily life
    </global-header>

    <div class="backStep">
      <a @click="$router.push('/')"><left-circle-outlined :style="{fontSize: '24px'}"/></a>
    </div>

    <div class="note_container">
      <div class="noteList">
        <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="notes">
          <div class="skeleton">
            <a-skeleton v-if="isLoading" v-for="index of 5" :key="index" active />
          </div>
          <template #renderItem="{ item }">
            <a-list-item key="item.title">
              <template #actions>
                <div>
                  <component :is="'LikeOutlined'" @click="isLiked(item.id)?removeLike(item):handleLike(item)"
                             :style="isLiked(item.id)?{marginRight: '8px',cursor:'pointer',color: '#464646',verticalAlign: 'middle'}:{marginRight: '8px',cursor:'pointer',color: 'rgba(0, 0, 0, 0.45)',verticalAlign: 'middle'}" />
                  <span style="vertical-align: middle;">{{ item.likes }}</span>
                </div>
              </template>
              <a-list-item-meta :description="item.createTime+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+item.weather">
                <template #title>
                  {{ item.title }}
                </template>
              </a-list-item-meta>
              <div class="note_content">
                <div class="image" v-if="item.image !== '' && item.image != null">
                  <a-image-preview-group>
                    <a-image
                      v-if="item.image"
                      :width="'27vh'"
                      :src="item.image"
                    />
                  </a-image-preview-group>
                </div>
                <div class="content fl" v-html="item.content"></div>
                <div class="clear"></div>
              </div>
            </a-list-item>
          </template>
        </a-list>
      </div>
    </div>
    <!-- 回到顶部 -->
    <a-back-top />
  </div>
</template>

<script>
import rightTopNavBar from "@/components/rightTopNavBar";
import globalHeader from '@/components/globalHeader'
import journalApi from '@/api/journal'
export default {
  name: "note",
  components: {
    rightTopNavBar,
    globalHeader
  },
  data() {
    return {
      isLoading: false,
      params: {
        page: 0,
        size: 10
      },
      totalCount: 0,
      notes: [
      ],
      actions:[
        { type: 'LikeOutlined', text: '156' },
      ]
    };
  },
  computed: {
    pagination(){
      return {
        onChange: (page) => {
          this.loadData(page)
        },
        pageSize: this.params.size,
        total: this.totalCount,
        hideOnSinglePage: true
      }
    }
  },
  created(){
    this.loadData()
  },
  methods: {
    loadData(page = 1){
      this.params.page = page - 1
      this.isLoading = true
      try {
        journalApi.list(this.params).then(response => {
          if(response.code === 1){
            this.notes = response.data.list
            this.totalCount = response.data.totalCount
          }else {
            this.$message.error(response.msg)
          }
        }).finally(() => {
          this.isLoading = false;
        })
      } catch (e) {
        this.message.error('Failed to load notes', e)
      }
    },
    handleLike(item){
      item.likes+=1
      window.localStorage.setItem("huang_blog_note_like"+item.id,"1")
      try {
        journalApi.like({id:item.id,like:true}).then(response => {
          if(response.code !== 1){
            this.$message.error(response.msg)
          }
        })
      } catch (e) {
        this.message.error('Failed to like notes', e)
      }
    },
    removeLike(item){
      item.likes-=1
      window.localStorage.removeItem("huang_blog_note_like"+item.id)
      try {
        journalApi.like({id:item.id,like:false}).then(response => {
          if(response.code !== 1){
            this.$message.error(response.msg)
          }
        })
      } catch (e) {
        this.message.error('Failed to unlike notes', e)
      }
    },
    isLiked(id){
      return window.localStorage.getItem("huang_blog_note_like" + id) === "1";
    }
  }
};
</script>

<style lang="less" scoped>
.p1 {
  height: 100px;
  line-height: 100px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.note_container {
  //height: calc(100vh - 96px);
  padding-top: 10px;
  padding-bottom: 10px;
}
.noteList {
  width: 60vw;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
}
.note_content {
  margin: 10px 0;
}
.content {
  font-size: 1rem;
  color: #656565;
  font-family: 微软雅黑;
  width: 100%;
  word-break: break-all;
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

:deep(.ant-image)  {
  margin-bottom: 10px ;
  margin-right: 12px ;
}
:deep(.ant-image:nth-child(4n))  {
  margin-bottom: 10px ;
  margin-right: 0 ;
}
:deep(.ant-list-item:hover)  {
  background-color: #fafafa;
}
:deep(.anticon-like:hover) {
  cursor:pointer;
  color: #464646;
}
:deep(.ant-list-pagination) {
  padding: 15px;
}
</style>
