<template>
  <div>
    <global-header :currentPage="$route.path">
      Daily life
    </global-header>

    <div class="backStep">
      <a @click="$router.push('/')">
        <el-icon style="vertical-align: -10%">
          <back/>
        </el-icon>
        <span>返回</span></a>
    </div>

    <div class="note_container">
        <ul>
          <li v-for="(item,index) in notes" :key="index">
            <div class="note_item">
              <div class="note_content">
                <div class="image fl" v-if="item.image !== '' && item.image != null">
                  <el-image
                    style="height: 18vh"
                    v-if="item.image"
                    :src="item.image"
                    :preview-src-list="[item.image]">
                  </el-image>
                  <el-image
                    style="height: 18vh"
                    v-if="item.image"
                    :src="item.image"
                    :preview-src-list="[item.image]">
                  </el-image>
                  <el-image
                    style="height: 18vh"
                    v-if="item.image"
                    :src="item.image"
                    :preview-src-list="[item.image]">
                  </el-image>
                </div>
                <div class="content fl" v-html="item.content"></div>
                <div class="clear"></div>
              </div>
              <div class="eg">
                <div class="timestamp fl">{{item.createTime}}</div>
                <div class="mood fl">{{item.mood}}</div>
                <div class="clear"></div>
              </div>
              <el-divider></el-divider>
            </div>
          </li>
        </ul>
    </div>
    <!-- 回到顶部 -->
    <el-backtop>
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .10);
        text-align: center;
        line-height: 40px;
        color: rgb(0 0 0 / 12%);
        border-radius: 20px;
      }"
      >
        ↑
      </div>
    </el-backtop>
  </div>
</template>

<script>
import rightTopNavBar from "@/components/rightTopNavBar";
import globalHeader from '@/components/globalHeader'

export default {
  name: "note",
  components: {
    rightTopNavBar,
    globalHeader
  },
  data() {
    return {
      notes: [
        {
          id: 1,
          editor: "yiyi",
          mood: 'Sunny',
          color: '#37cbcb ',
          image: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          title: "哈哈哈哈哈",
          content: "“斗之力，三段！”\n" +
            "\n" +
            "望着测验魔石碑上面闪亮得甚至有些刺眼的五个大字，少年面无表情，唇角有着一抹自嘲，紧握的手掌，因为大力，而导致略微尖锐的指甲深深的刺进了掌心之中，带来一阵阵钻心的疼痛…\n" +
            "\n" +
            "“萧炎，斗之力，三段！级别低级！”测验魔石碑之旁，一位中年男子，看了一眼碑上所显示出来的信息，语气漠然的将之公布了出来…\n" +
            "\n" +
            "中年男子话刚刚脱口，便是不出意外的在人头汹涌的广场上带起了一阵嘲讽的搔动。\n" +
            "\n" +
            "“三段？嘿嘿，果然不出我所料，这个“天才”这一年又是在原地踏步！”\n" +
            "\n" +
            "“哎，这废物真是把家族的脸都给丢光了。”\n" +
            "\n" +
            "“要不是族长是他的父亲，这种废物，早就被驱赶出家族，任其自生自灭了，哪还有机会待在家族中白吃白喝。”\n" +
            "\n" +
            "“唉，昔年那名闻乌坦城的天才少年，如今怎么落魄成这般模样了啊？”\n" +
            "\n" +
            "“谁知道呢，或许做了什么亏心事，惹得神灵降怒了吧…”\n" +
            "\n" +
            "周围传来的不屑嘲笑以及惋惜轻叹，落在那如木桩待在原地的少年耳中，恍如一根根利刺狠狠的扎在心脏一般，让得少年呼吸微微急促。\n" +
            "\n" +
            "少年缓缓抬起头来，露出一张有些清秀的稚嫩脸庞，漆黑的眸子木然的在周围那些嘲讽的同龄人身上扫过，少年嘴角的自嘲，似乎变得更加苦涩了。\n" +
            "\n" +
            "“这些人，都如此刻薄势力吗？或许是因为三年前他们曾经在自己面前露出过最谦卑的笑容，所以，如今想要讨还回去吧…”苦涩的一笑，萧炎落寞的转身，安静的回到了队伍的最后一排，孤单的身影，与周围的世界，有些格格不入。\n" +
            "\n" +
            "“下一个，萧媚！”\n" +
            "\n" +
            "听着测验人的喊声，一名少女快速的人群中跑出，少女刚刚出场，附近的议论声便是小了许多，一双双略微火热的目光，牢牢的锁定着少女的脸颊…\n" +
            "\n" +
            "少女年龄不过十四左右，虽然并算不上绝色，不过那张稚气未脱的小脸，却是蕴含着淡淡的妩媚，清纯与妩媚，矛盾的集合，让得她成功的成为了全场瞩目的焦点…\n" +
            "\n" +
            "少女快步上前，小手轻车熟路的触摸着漆黑的魔石碑，然后缓缓闭上眼睛…\n" +
            "\n" +
            "在少女闭眼片刻之后，漆黑的魔石碑之上再次亮起了光芒…\n" +
            "\n" +
            "“斗之气七段！”\n" +
            "\n" +
            "“萧媚，斗之气七段！级别:高级！”\n" +
            "\n" +
            "“耶！”听着测验员所喊出的成绩，少女脸颊扬起了得意的笑容…\n" +
            "\n" +
            "“啧啧，七段斗之气，真了不起，按这进度，恐怕顶多只需要三年时间，她就能称为一名真正的斗者了吧…”\n" +
            "\n" +
            "“不愧是家族中种子级别的人物啊…”\n" +
            "\n" +
            "听着人群中传来的一阵阵羡慕声，少女脸颊上的笑容更是多了几分，虚荣心，这是很多女孩都无法抗拒的诱惑…\n" +
            "\n" +
            "与平曰里的几个姐妹互相笑谈着，萧媚的视线，忽然的透过周围的人群，停在了人群外的那一道孤单身影上…\n" +
            "\n" +
            "皱眉思虑了瞬间，萧媚还是打消了过去的念头，现在的两人，已经不在同一个阶层之上，以萧炎最近几年的表现，成年后，顶多只能作为家族中的下层人员，而天赋优秀的她，则将会成为家族重点培养的强者，前途可以说是不可限量。\n" +
            "\n" +
            "“唉…”莫名的轻叹了一口气，萧媚脑中忽然浮现出三年前那意气风发的少年，四岁练气，十岁拥有九段斗之气，十一岁突破十段斗之气，成功凝聚斗之气旋，一跃成为家族百年之内最年轻的斗者！\n" +
            "\n" +
            "当初的少年，自信而且潜力无可估量，不知让得多少少女对其春心荡漾，当然，这也包括以前的萧媚。\n" +
            "\n" +
            "然而天才的道路，貌似总是曲折的，三年之前，这名声望达到巅峰的天才少年，却是突兀的接受到了有生以来最残酷的打击，不仅辛辛苦苦修炼十数载方才凝聚的斗之气旋，一夜之间，化为乌有，而且体内的斗之气，也是随着时间的流逝，变得诡异的越来越少。\n" +
            "\n" +
            "斗之气消失的直接结果，便是导致其实力不断的后退。\n" +
            "\n" +
            "从天才的神坛，一夜跌落到了连普通人都不如的地步，这种打击，让得少年从此失魂落魄，天才之名，也是逐渐的被不屑与嘲讽所替代。",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 2,
          editor: "yiyi",
          mood: 'Sunrise',
          color: '#8340e2',
          image: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 3,
          editor: "yiyi",
          mood: 'Moon',
          color: '#c73697',
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 4,
          editor: "yiyi",
          mood: 'MoonNight',
          // color: '#9ee8d1',
          content: "<h1>今天是很开心的一天</h1>",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 5,
          editor: "yiyi",
          mood: 'MoreFilled',
          // color: '#38b7f1',
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 6,
          editor: "yiyi",
          mood: 'NoSmoking',
          // color: '#27bfa8',
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        },
        {
          id: 7,
          editor: "yiyi",
          mood: 'Headset',
          color: '#4fc6a2',
          content: "今天是很开心的一天",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        }
      ]
    };
  },
  created(){
    let _this = this;
    window.onscroll = function(){
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
      //滚动条到底部的条件
      if(scrollTop+windowHeight==scrollHeight){
        //写后台加载数据的函数
        _this.notes.push({
          id: 1,
          editor: "yiyi",
          mood: 'Sunny',
          color: '#37cbcb ',
          image: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          title: "哈哈哈哈哈",
          content: "“斗之力，三段！”\n" +
            "\n" +
            "望着测验魔石碑上面闪亮得甚至有些刺眼的五个大字，少年面无表情，唇角有着一抹自嘲，紧握的手掌，因为大力，而导致略微尖锐的指甲深深的刺进了掌心之中，带来一阵阵钻心的疼痛…\n" +
            "\n" +
            "“萧炎，斗之力，三段！级别低级！”测验魔石碑之旁，一位中年男子，看了一眼碑上所显示出来的信息，语气漠然的将之公布了出来…\n" +
            "\n" +
            "中年男子话刚刚脱口，便是不出意外的在人头汹涌的广场上带起了一阵嘲讽的搔动。\n" +
            "\n" +
            "“三段？嘿嘿，果然不出我所料，这个“天才”这一年又是在原地踏步！”\n" +
            "\n" +
            "“哎，这废物真是把家族的脸都给丢光了。”\n" +
            "\n" +
            "“要不是族长是他的父亲，这种废物，早就被驱赶出家族，任其自生自灭了，哪还有机会待在家族中白吃白喝。”\n" +
            "\n" +
            "“唉，昔年那名闻乌坦城的天才少年，如今怎么落魄成这般模样了啊？”\n" +
            "\n" +
            "“谁知道呢，或许做了什么亏心事，惹得神灵降怒了吧…”\n" +
            "\n" +
            "周围传来的不屑嘲笑以及惋惜轻叹，落在那如木桩待在原地的少年耳中，恍如一根根利刺狠狠的扎在心脏一般，让得少年呼吸微微急促。\n" +
            "\n" +
            "少年缓缓抬起头来，露出一张有些清秀的稚嫩脸庞，漆黑的眸子木然的在周围那些嘲讽的同龄人身上扫过，少年嘴角的自嘲，似乎变得更加苦涩了。\n" +
            "\n" +
            "“这些人，都如此刻薄势力吗？或许是因为三年前他们曾经在自己面前露出过最谦卑的笑容，所以，如今想要讨还回去吧…”苦涩的一笑，萧炎落寞的转身，安静的回到了队伍的最后一排，孤单的身影，与周围的世界，有些格格不入。\n" +
            "\n" +
            "“下一个，萧媚！”\n" +
            "\n" +
            "听着测验人的喊声，一名少女快速的人群中跑出，少女刚刚出场，附近的议论声便是小了许多，一双双略微火热的目光，牢牢的锁定着少女的脸颊…\n" +
            "\n" +
            "少女年龄不过十四左右，虽然并算不上绝色，不过那张稚气未脱的小脸，却是蕴含着淡淡的妩媚，清纯与妩媚，矛盾的集合，让得她成功的成为了全场瞩目的焦点…\n" +
            "\n" +
            "少女快步上前，小手轻车熟路的触摸着漆黑的魔石碑，然后缓缓闭上眼睛…\n" +
            "\n" +
            "在少女闭眼片刻之后，漆黑的魔石碑之上再次亮起了光芒…\n" +
            "\n" +
            "“斗之气七段！”\n" +
            "\n" +
            "“萧媚，斗之气七段！级别:高级！”\n" +
            "\n" +
            "“耶！”听着测验员所喊出的成绩，少女脸颊扬起了得意的笑容…\n" +
            "\n" +
            "“啧啧，七段斗之气，真了不起，按这进度，恐怕顶多只需要三年时间，她就能称为一名真正的斗者了吧…”\n" +
            "\n" +
            "“不愧是家族中种子级别的人物啊…”\n" +
            "\n" +
            "听着人群中传来的一阵阵羡慕声，少女脸颊上的笑容更是多了几分，虚荣心，这是很多女孩都无法抗拒的诱惑…\n" +
            "\n" +
            "与平曰里的几个姐妹互相笑谈着，萧媚的视线，忽然的透过周围的人群，停在了人群外的那一道孤单身影上…\n" +
            "\n" +
            "皱眉思虑了瞬间，萧媚还是打消了过去的念头，现在的两人，已经不在同一个阶层之上，以萧炎最近几年的表现，成年后，顶多只能作为家族中的下层人员，而天赋优秀的她，则将会成为家族重点培养的强者，前途可以说是不可限量。\n" +
            "\n" +
            "“唉…”莫名的轻叹了一口气，萧媚脑中忽然浮现出三年前那意气风发的少年，四岁练气，十岁拥有九段斗之气，十一岁突破十段斗之气，成功凝聚斗之气旋，一跃成为家族百年之内最年轻的斗者！\n" +
            "\n" +
            "当初的少年，自信而且潜力无可估量，不知让得多少少女对其春心荡漾，当然，这也包括以前的萧媚。\n" +
            "\n" +
            "然而天才的道路，貌似总是曲折的，三年之前，这名声望达到巅峰的天才少年，却是突兀的接受到了有生以来最残酷的打击，不仅辛辛苦苦修炼十数载方才凝聚的斗之气旋，一夜之间，化为乌有，而且体内的斗之气，也是随着时间的流逝，变得诡异的越来越少。\n" +
            "\n" +
            "斗之气消失的直接结果，便是导致其实力不断的后退。\n" +
            "\n" +
            "从天才的神坛，一夜跌落到了连普通人都不如的地步，这种打击，让得少年从此失魂落魄，天才之名，也是逐渐的被不屑与嘲讽所替代。",
          timestamp: "2018/4/12",
          createTime: "2018/4/12 20:46",
        });
      }
    }
  },
  methods: {
    loadData(){

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
  width: 60vw;
  margin: 20px auto;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
}
.note_item {
  width: 100%;
}
.note_content {
  margin: 10px 0;
}
.image {
  width: 50%;
}
.image > .el-image {
  padding-right: 10px;
  padding-bottom: 10px;
}
.content {
  width: 50%;
  font-size: 1rem;
  color: #656565;
  font-family: 微软雅黑;
}
.timestamp,.mood {
  font-size: 0.666rem;
  color: #afadad;
}
.mood {
  margin-left: 2%;
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
