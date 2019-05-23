<template>
  <div class="video__container">
    <ul class="video__ul-size">
      <!-- <li v-for="item of recommondList"
        :key="item.aid">
        <img :src="item.pic"
          class="video__img">
        <img class="video__play"
          src="../../animation/assets/bofang.svg" />
        <p class="video__play-Num">{{item.play}}</p>
        <img class="video__barrage"
          src="../../animation/assets/danmu.svg" />
        <p class="video__barrage-Num">{{item.review}}</p>
        <p class="video__title">{{item.title}}</p>
      </li> -->
      <li v-for="item of videoLists"
        :key="item.id">
        <img :src="item.src"
          class="video__img">
        <img class="video__play"
          src="../../animation/assets/bofang.svg" />
        <p class="video__play-Num">{{item.playDescribe}}</p>
        <img class="video__barrage"
          src="../../animation/assets/danmu.svg" />
        <p class="video__barrage-Num">{{item.barrageDescribe}}</p>
        <p class="video__title">{{item.describe}}</p>
      </li>
    </ul>
    <ul class="video__ul-size-right">
      <li v-for="item of videoLists"
        :key="item.id">
        <img :src="item.src"
          class="video__img">
        <img class="video__play"
          src="../../animation/assets/bofang.svg" />
        <p class="video__play-Num">{{item.playDescribe}}</p>
        <img class="video__barrage"
          src="../../animation/assets/danmu.svg" />
        <p class="video__barrage-Num">{{item.barrageDescribe}}</p>
        <p class="video__title">{{item.describe}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoLists: [
        {
          id: '01',
          src: '/static/1.jpg',
          playDescribe: '158.2万',
          barrageDescribe: '71万',
          describe: '【鬼畜动画】德丽莎的卖萌话'
        },
        {
          id: '02',
          src: '/static/2.jpg',
          playNumSrc: '../../animation/assets/bofangshu.svg',
          playDescribe: '16.1万',
          barrageSrc: '../../animation/assets/danmushu.svg',
          barrageDescribe: '5.6万',
          describe: '【狂三AWSL】人参赢家：只要胆量大，女王抢回家！'
        }
      ]
    }
  }
  // created() {
  //   this.axios.get('/api/recommond-list').then(res => {
  //     this.$store.state.recommondList = res.data.list
  //   })
  // },
  // computed: {
  //   recommondList() {
  //     return this.$store.state.recommondList
  //   }
  // },
  // methods: {
  //   playDetail(aid) {
  //     this.$router.push({ name: 'recommondPlay', params: { aid: aid } })
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.video__ {
  &barrage-Num {
    color: white;
    position: absolute;
    margin-top: -38px;
    font-size: 11px;
    width: 30px;
    margin-left: 140px;
    z-index: 100;
  }
  &play-Num {
    color: white;
    position: relative;
    margin-top: -35px;
    font-size: 12px;
    margin-left: -75px;
    z-index: 100;
  }
  &img {
    position: relative;
    margin-left: 0px;
    width: 187.13px;
    height: 116.95px;
    margin: 0px;
    padding: 0px;
    top: 9.5px;
    border-radius: 8px;
  }
  &barrage {
    width: 18px;
    height: 18px;
    z-index: 800;
    margin: 0px;
    padding: 0px;
    position: relative;
    top: -16px;
    margin-left: 60px;
  }
  &play {
    width: 18px;
    height: 18px;
    z-index: 800;
    margin: 0px;
    padding: 0px;
    position: relative;
    top: -14px;
    margin-left: -150px;
  }
  &danMu {
    width: 18px;
    height: 18px;
    z-index: 800;
    margin: 0px;
    padding: 0px;
    position: absolute;
    top: 107px;
    margin-left: 75px;
  }
  &title {
    position: relative;
    width: 187.13px;
    height: 34px;
    margin: 0px;
    padding: 3px;
    top: -19px;
    margin-left: 0px;
    font-size: 14.5px;
    text-align: left;
  }
  &container {
    display: flex;
    position: relative;
    margin: 0px;
    padding: 0px;
    top: 16px;
    width: 200.39px;
    height: 152.84px;
    margin-left: 13px;
    z-index: 100;
    li {
      margin: 0px;
      padding: 0px;
      height: 175px;
    }
  }
  &ul-size-right {
    width: 187.13px;
    height: 117.31px;
    margin-left: 0px;
    margin: 0px;
    padding: 0px;
    margin-right: 0px;
    list-style: none;
    margin-left: 14px;
  }
  &ul-size {
    width: 187.13px;
    height: 117.31px;
    margin-left: 0px;
    margin: 0px;
    padding: 0px;
    margin-right: 0px;
    list-style: none;
  }
  &lisize {
    display: flex;
    list-style: none;
  }
}
</style>
