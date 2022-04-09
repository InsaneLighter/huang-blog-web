<template>
  <div>
    <global-header :currentPage="$route.path">
      When you choose to become others, you will lose yourself
    </global-header>

    <div class="mian_box">
      <ul class="ul_list">
        <li v-for="item in games" :key="item.id">
          <div class="div1"><img :src="item.picture"/></div>
          <div class="div2">
            <div class="p1"></div>
            <div class="p2">
              <p
                style="
                  background: #ffffff;
                  text-align: left;
                  vertical-align: top;
                "
              >
                <span
                  style="
                    color: #333333;
                    font-family: 微软雅黑;
                    font-size: 10.5pt;
                    font-style: normal;
                    font-weight: normal;
                  "
                >
                  <span>{{ item.description }}</span>
                </span>
              </p>
            </div>
            <a href="javascript:void(0)" @click="jumpToPage(item.target)">
              <div class="p3">Go</div>
            </a>
          </div>
        </li>
        <div class="clear"></div>
      </ul>
    </div>

    <div class="foot">
      To be continued
    </div>
  </div>
</template>

<script>
import 'css/articles.css'
import 'css/game.css'
import { game } from 'js/game'
import rightTopNavBar from '@/components/rightTopNavBar'
import globalHeader from '@/components/globalHeader'

export default {
  name: 'game',
  components: {
    rightTopNavBar,
    globalHeader
  },
  data () {
    return {
      games: [
        {
          id: 1,
          picture: '/static/image/tom.jpg',
          description: '我诅咒你一辈子买方便面没有调料包,哈哈哈',
          target: '',
        },
        {
          id: 2,
          picture: '/static/image/tom.jpg',
          description: '我诅咒你一辈子买方便面没有调料包,哈哈哈',
          target: '',
        },
        {
          id: 3,
          picture: '/static/image/tom.jpg',
          description: '我诅咒你一辈子买方便面没有调料包,哈哈哈',
          target: '',
        },
      ],
    }
  },
  mounted () {
    game()
  },
  methods: {
    // more 页面跳转
    jumpToPage (target) {
      this.$router.push(target)
    },
  }
}
</script>

<style scoped>
.p1, .foot {
  height: 100px;
  line-height: 100px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
  "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.foot {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}
</style>
