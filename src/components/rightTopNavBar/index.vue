<template>
  <div>
    <!--右上导航栏-->
    <div class="div_js index_dh">
      <img src="../../assets/image/menu.png" width="50" height="25" />
    </div>

    <!--右上导航栏页面-->
    <div class="div_js_txt">
      <div class="div_js_bg">
        <div class="div_js_close"><img src="../../assets/image/close.png" /></div>
        <div class="div_js_lf lf">
          <div class="tag_right">
            <ul class="nav-menu clearfix unstyled">
              <li v-for="item in menuPages" :key="item.index">
                <a href="javascript:void(0)" @click="jumpToPage(item.target)" class="three-d">
                 <span class="three-d-box">
                    <span class="front">- {{item.alias}}</span>
                    <span class="back">- {{item.name}}</span>
                 </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rightTopNavBar",
  props: ['menuPages'],
  data() {
    return {

    };
  },
  methods:{
    // 页面跳转
    jumpToPage(target){
      this.$router.push(target);
    }
  }
};
</script>
