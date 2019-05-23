<template>
  <div class="bottom-open__container"
    v-if="show">
    <div class="bottom-open__close-icon"
      @click="show=!show"><img class="bottom-open__close-icon-img"
        src="../../assets/close_bottom.png"></div>
    <div class="bottom-open__logo-bottom"><img class="bottom-open__logo-bottom-img"
        src="../../assets/logo_bottom.png" /></div>
    <div class="bottom-open__client">
      <p class="bottom-open__client-text">上bilibili客户端</p>
    </div>
    <div class="bottom-open__advertise">
      <p class="bottom-open__advertise-text">高清视频 新番电影一览无余</p>
    </div>
    <div><button class="bottom-open__download-btn">
        <p class="bottom-open__download-btn-text">立即体验</p>
      </button></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-open__ {
  &download-btn {
    display: block;
    margin: 0px auto;
    margin-top: 17px;
    margin-left: 78px;
    width: 78px;
    height: 32px;
    background-color: #fb7299;
    border: 0px;
    border-radius: 5px;
    &-text {
      font-size: 15.5px;
      font-weight: 500;
      color: white;
    }
  }
  &advertise {
    margin: 0px;
    padding: 0px;
    margin-top: 35px;
    margin-left: -102px;
    &-text {
      color: #999;
      font-size: 13px;
    }
  }
  &client {
    margin: 0px;
    padding: 0px;
    margin-top: 14px;
    margin-left: 5px;
    &-text {
      color: white;
      font-size: 16px;
    }
  }
  &logo-bottom {
    margin-top: 15px;
    margin-left: 18px;
    &-img {
      width: 35.3px;
      height: 35.3px;
    }
  }
  &close-icon {
    margin-top: 25px;
    margin-left: 14px;
    &-img {
      width: 11px;
      height: 11px;
    }
  }
  &container {
    position: fixed;
    display: flex;
    width: 414px;
    height: 66.5px;
    background-color: #000;
    opacity: 0.8;
    margin: 0px;
    padding: 0px;
    margin-top: 310px;
    z-index: 990;
  }
}
</style>
