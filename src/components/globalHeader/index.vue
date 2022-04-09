<template>
  <div class="container">
    <!--右上导航栏-->
    <rightTopNavBar :menuPages="getDynamicMenus(currentPage)"></rightTopNavBar>

    <!--背景图片 title-->
    <div class="main_bg div_news">
      <div class="p1">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { proNavanimate } from 'js/qs-jquery-1.0'
import { qs_index } from 'js/qs_index'
import rightTopNavBar from '@/components/rightTopNavBar'

export default {
  name: 'globalHeader',
  components: {
    rightTopNavBar
  },
  props: [
    'currentPage'
  ],
  data(){
    return {
      menuPages: [
        {
          index: 'div_index1',
          name: '不用看~是首页',
          alias: 'HOME',
          target: '/home',
        },
        {
          index: 'div_index2',
          name: '这个是关于Java的',
          alias: 'JAVA',
          target: '/doc',
        },
        {
          index: 'div_index3',
          name: '一些有意义的笔记',
          alias: 'Notes',
          target: '/note',
        },
        {
          index: 'div_index4',
          name: '有趣的小游戏',
          alias: 'Little Game',
          target: '/game',
        },
        {
          index: 'div_index5',
          name: '一个眼睛里慢慢有光的我',
          alias: 'ME',
          target: '/me',
        },
      ]
    }
  },
  created () {
    // 引入js
    proNavanimate()
    qs_index()
  },
  mounted () {
    // 引入js
    proNavanimate()
    qs_index()
  },
  methods: {
    getDynamicMenus(currentPage){
      return this.menuPages.filter(function (item) {
        return item.target !== currentPage
      })
    }
  }
}
</script>

<style scoped>

</style>
