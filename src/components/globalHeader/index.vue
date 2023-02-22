<template>
  <div class="container">
    <!--右上导航栏-->
    <rightTopNavBar :menuPages="getDynamicMenus(currentPage)" is-home="false"></rightTopNavBar>

    <!--背景图片 title-->
    <div class="main_bg div_news">
      <div class="p1">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { navAnimate } from 'js/navAnimate'
import { home } from 'js/home'
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
          name: '这里是首页',
          alias: 'HOME',
          target: '/home',
        },
        {
          index: 'div_index2',
          name: '学习内容',
          alias: 'JAVA',
          target: '/doc',
        },
        {
          index: 'div_index3',
          name: '生活琐事',
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
          name: '关于我吧',
          alias: 'ME',
          target: '/me',
        },
      ]
    }
  },
  created () {
    // 引入js
    navAnimate()
    home()
  },
  mounted () {
    // 引入js
    navAnimate()
    home()
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
