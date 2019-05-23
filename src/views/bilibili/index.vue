<template>
  <div>
    <!--导航栏-->
    <headerActionBar></headerActionBar>
    <!--主页推荐-->
    <router-view />

    <bottomInfo></bottomInfo>
  </div>
</template>

<script>
import headerActionBar from './components/headerActionBar'
import bottomInfo from './components/bottomInfo'
export default {
  components: {
    headerActionBar,
    bottomInfo
  }
}
</script>

<style lang="scss" scoped>
</style>
