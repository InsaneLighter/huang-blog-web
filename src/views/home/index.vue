<template>
  <div>
    <!--container-->
    <div class="container">
      <!--右侧导航栏-->
      <rightNavBar></rightNavBar>

      <!--右上导航栏-->
      <rightTopNavBar :menuPages='rightTopMenus'></rightTopNavBar>

      <!--content-->
      <div id="content">
        <dl class="article div_index1">
          <div class="bg"></div>
          <div class="div1">
              Chasing The Light
          </div>
        </dl>
        <dl class="article" :class="item.index" v-for="(item,index) in activeMenuPages" :key="item.index">
          <div class="div_bg">
            <div class="div1">
              <div class="div_js p1">{{item.name}}</div>
              <div class="div_js p2"><a href="javascript:void(0)" @click="jumpToPage(item.target)">+more</a></div>
            </div>
          </div>
        </dl>
      </div>
    </div>

    <!--footer-->
    <div class="footer">
      <div style="color:#fff;text-align: center">Design by Huang</div>
      <a href="http://beian.miit.gov.cn/" target="_blank">鄂ICP备2022003078号</a>
      &nbsp;
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42070302000092" style="display:inline-block;text-decoration:none;">鄂公网安备 42070302000092号</a>
    </div>
  </div>
</template>

<script>
import {navAnimate} from 'js/navAnimate';
import {home} from 'js/home';
import rightNavBar from '@/components/rightNavBar';
import rightTopNavBar from '@/components/rightTopNavBar';
export default {
  name: 'home',
  components: {
    rightNavBar,
    rightTopNavBar
  },
  data(){
    return {
      menuPages: [
        {
          index: 'div_index1',
          name: '不用看~是首页',
          alias: 'HOME',
          target: '/home'
        },
        {
          index: 'div_index2',
          name: '这个是关于Java的',
          alias: 'JAVA',
          target: '/doc'
        },
        {
          index: 'div_index3',
          name: '一些有意义的笔记',
          alias: 'Notes',
          target: '/note'
        },
        {
          index: 'div_index4',
          name: '有趣的小游戏',
          alias: 'Little Game',
          target: '/game'
        },
        {
          index: 'div_index5',
          name: '一个眼睛里慢慢有光的我',
          alias: 'ME',
          target: '/me'
        }
      ]
    }
  },
  computed: {
    activeMenuPages: function(){
      return this.menuPages.filter(function(item){
        return item.index !== "div_index1";
      })
    },
    rightTopMenus: function(){
      return this.menuPages.filter(function(item){
        return item.target !== '/home';
      })
    }
  },
  methods:{
    // more 页面跳转
    jumpToPage(target){
      this.$router.push(target);
    },
  },
  mounted(){
    navAnimate();
    home();
  }
}

</script>
<style scoped>

</style>
