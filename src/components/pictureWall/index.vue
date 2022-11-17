<template>
  <div class="box" v-for="item in pictures" :key="item.url">
    <div class="image-wrap">
      <div class="image" v-bind:style="{backgroundImage: 'url('+item.url+')'}"></div>
    </div>
    <div class="border"></div>
    <div class="text">
      <span>{{ item.content }}</span>
    </div>
  </div>
</template>

<script>
import { pictureWall } from '@/assets/js/pictureWall'
export default {
  name: 'pictureWall',
  data () {
    return {
      pictures: [
        {
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201905%2F29%2F20190529213011_sgnsg.thumb.400_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671103964&t=b76ab493a01d563f99543f82254ad7c0',
          content: '一日不见如隔三秋'
        },
        {
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201905%2F29%2F20190529213011_sgnsg.thumb.400_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671103964&t=b76ab493a01d563f99543f82254ad7c0',
          content: 'No better'
        },
        {
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201905%2F29%2F20190529213011_sgnsg.thumb.400_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671103964&t=b76ab493a01d563f99543f82254ad7c0',
          content: 'No better'
        },
        {
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201905%2F29%2F20190529213011_sgnsg.thumb.400_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671103964&t=b76ab493a01d563f99543f82254ad7c0',
          content: 'No better'
        },
        {
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201905%2F29%2F20190529213011_sgnsg.thumb.400_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671103964&t=b76ab493a01d563f99543f82254ad7c0',
          content: 'No better'
        },
        {
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201905%2F29%2F20190529213011_sgnsg.thumb.400_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671103964&t=b76ab493a01d563f99543f82254ad7c0',
          content: 'No better'
        },
        {
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201905%2F29%2F20190529213011_sgnsg.thumb.400_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671103964&t=b76ab493a01d563f99543f82254ad7c0',
          content: 'No better'
        },
        {
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201905%2F29%2F20190529213011_sgnsg.thumb.400_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671103964&t=b76ab493a01d563f99543f82254ad7c0',
          content: 'No better'
        }
      ]
    }
  },
  created () {
    pictureWall()
  },
  mounted () {
    pictureWall()
  }
}
</script>

<style scoped>
html,
body {
  width: 99.8%;
}

.box {
  font-size: 40px;
  font-family :'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: #000;
  background: #000;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  float: left;
  padding-top: 6rem;
}

.box:hover .border {
  -webkit-transform: scale(0.94);
  transform: scale(0.94);
  -webkit-transition-duration: 140ms;
  transition-duration: 140ms;
}

.box:hover .text {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transition-duration: 140ms;
  transition-duration: 140ms;
}

.box:hover .image-wrap {
  -webkit-transform: scale(1);
  transform: scale(1);
  opacity: 1;
  -webkit-transition-duration: 140ms;
  transition-duration: 140ms;
}

.border,
.text,
.image {
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
}

.image-wrap {
  position: absolute;
  width: 130%;
  height: 130%;
  left: -15%;
  top: -15%;
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
  -webkit-transition: 280ms ease-out;
  transition: 280ms ease-out;
  pointer-events: none;
  opacity: 0.74;
}

.border {
  left: -30px;
  top: -30px;
  border: 30px solid #222;
  box-sizing: content-box;
  -webkit-transition: 360ms ease-in-out;
  transition: 360ms ease-in-out;
}

.text {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  opacity: 0;
  -webkit-transform: translate3d(0, -4%, 0);
  transform: translate3d(0, -4%, 0);
  -webkit-transition: 280ms ease-out;
  transition: 280ms ease-out;
  text-align: center;
}

.image {
  background-size: cover;
}

/* box sizing */
.box {
  width: 100%;
  height: 100vw;
  float: left;
}

@media (min-width: 500px) {
  .box {
    width: 50%;
    height: 50vw;
  }
}

@media (min-width: 800px) {
  .box {
    width: 33.333333%;
    height: 33.33333vw;
  }
}

@media (min-width: 1200px) {
  .box {
    width: 25%;
    height: 18vw;
  }
}
</style>
