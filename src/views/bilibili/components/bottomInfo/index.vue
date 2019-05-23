<template>
  <div class="footer-bar__container">
    <div class="footer-bar__internet-content-provider">
      <p class="footer-bar__patternp"> 哔哩哔哩 沪ICP备13002172号-3</p>
    </div>
    <div class="footer-bar__license">
      <p class="footer-bar__patternp"> 信息网络传播视听节目许可证：0910417</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer-bar__ {
  &container {
    position: relative;
    margin-bottom: 10px;
    top: 342.05px;
    width: 414px;
    height: 78px;
  }
  &internet-content-provider {
    position: relative;
    margin: -8px;
    padding: 0px;
    width: 414px;
    height: 35px;
    top: 10px;
    text-align: center;
  }
  &license {
    position: relative;
    top: 2px;
    width: 414px;
    height: 35px;
    margin: -5px;
    padding: 0px;
    text-align: center;
  }
  &patternp {
    color: #999;
    font-size: 15px;
  }
}
</style>
