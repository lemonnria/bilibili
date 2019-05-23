<template>
  <div>
    <swiper :options="swiperOption"
      ref="swiper"
      class="swiper__container">
      <swiper-slide v-for="item of pictureList"
        :key="item.id">
        <img :src="item.imgUrl"
          class="swiper__img">
      </swiper-slide>
      <div class="swiper__pagination"
        slot="pagination"></div>
    </swiper>
    <div class="video__play"> <Video></Video></div>
    <bottomOpen></bottomOpen>
  </div>
</template>

<script>
import bottomOpen from './../components/bottomOpen'
import Video from './../components/video'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'index',
  components: {
    swiper,
    swiperSlide,
    Video,
    bottomOpen
  },
  data() {
    return {
      pictureList: [
        {
          id: '01',
          imgUrl: '/static/wheelPic/1.jpg'
        },
        {
          id: '02',
          imgUrl: '/static/wheelPic/2.jpg'
        },
        {
          id: '03',
          imgUrl: '/static/wheelPic/3.jpg'
        },
        {
          id: '04',
          imgUrl: '/static/wheelPic/4.jpg'
        },
        {
          id: '05',
          imgUrl: '/static/wheelPic/6.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.video__play {
  position: relative;
  margin-top: 85px;
}
.swiper__img {
  width: 100%;
  height: 100%;
  border-radius: 4%;
  z-index: 500;
}
.swiper__container {
  position: relative;
  top: 97px;
  width: 387.53px;
  height: 121.64px;
  z-index: 500;
}
</style>
