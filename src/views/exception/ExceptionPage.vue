<template>
  <div class="exception">
    <div class="image">
      <img :src="title === '500'?'/static/image/500.png':'/static/image/404.png'" width="252"/>
    </div>
    <div class="title">{{ title }}</div>
    <div class="subTitle">{{ config[title].desc }}</div>
    <div class="extra">
      <el-button color="#000" style="color: #fff" @click="handleToHome">返回首页</el-button>
    </div>
  </div>
</template>

<script>
import types from './type'

export default {
  name: 'Exception',
  props: {
    title: {
      type: String,
      default: '404'
    }
  },
  data() {
    return {
      config: types
    }
  },
  methods: {
    handleToHome() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style scoped>
  .image {
    margin-top: 10rem;
    text-align: center;
  }
  .title {
    margin-top: 50px;
    text-align: center;
    font-size: 30px;
  }
  .subTitle {
    margin-top: 20px;
    text-align: center;
    font-size: 15px;
    color: #b6b2b2;
  }
  .extra {
    margin-top: 50px;
    text-align: center;
  }
</style>
