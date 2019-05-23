<template>
  <div>
    <div>
      <div class="header-action-bar__container">
        <img class="header-action-bar__logo"
          src="../../assets/logo.svg">
        <img class="header-action-bar__search"
          src="../../assets/searches.png">
        <img class="header-action-bar__user"
          src="../../assets/userLogin.png">
        <button class="header-action-bar__download">
          <p class="header-action-bar__download-text">下载 App</p>
        </button>
      </div>
    </div>
    <div class="home-zone-all__normal">
      <div>
        <!--click 点击改变show值 -->
        <div class="header-action-bar__arrow-container"
          @click="showContent"><img class="header-action-bar__arrow-img"
            src="../../animation/assets/xiala.svg" /></div>
      </div>
      <div class="header-action-bar__guidebar">
        <div class="header-action-bar__guidebar-wrapper">
          <ul>
            <li v-for="item in selectList"
              :key="item.id"
              @click="selectPag(item.id, item.pathname)">
              <router-link :to="{name:item.pathname}"
                tag="span">
                <p :class="navIndex === item.id ? 'item-cn-active' : 'item-cn'">{{item.title}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 过渡动画 初始show为false不显示-->
    <transition name="slide-show">
      <div class="home-zone-all__show"
        v-if="show">
        <ul>
          <li v-for="item in selectList"
            :key="item.id"
            @click="selectPag(item.id, item.pathname)">
            <router-link :to="{name:item.pathname}"
              tag="span">
              <p :class="navIndex === item.id ? 'item-cn-active' : 'item-cn'">{{item.title}}</p>
            </router-link>
          </li>
        </ul>
        <!-- click点击改变show值 -->
        <div class="home-zone-all__arrow"
          @click="showContent"><img class="home-zone-all__collapse"
            src="../../animation/assets/shouqixiao.svg" /></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navIndex: 1,
      show: false,
      selectList: [
        {
          id: 1,
          pathname: 'bilibilihomePage',
          title: '首页'
        },
        {
          id: 2,
          pathname: 'bilibiliAnimation',
          title: '动画'
        },
        {
          id: 3,
          title: '番剧'
        },
        {
          id: 4,
          title: '国创'
        },
        {
          id: 5,
          title: '音乐'
        },
        {
          id: 6,
          title: '舞蹈'
        },
        {
          id: 7,
          title: '科技'
        },
        {
          id: 8,
          title: '数码'
        },
        {
          id: 9,
          title: '游戏'
        },
        {
          id: 10,
          title: '娱乐'
        },
        {
          id: 11,
          title: '鬼畜'
        },
        {
          id: 12,
          title: '电影'
        },
        {
          id: 13,
          title: '电视剧'
        },
        {
          id: 14,
          title: '纪录片'
        },
        {
          id: 15,
          title: '影视'
        },
        {
          id: 16,
          title: '时尚'
        },
        {
          id: 17,
          title: '生活'
        },
        {
          id: 18,
          title: '广告'
        },
        {
          id: 19,
          title: '直播'
        },
        {
          id: 20,
          title: '相簿'
        }
      ],
      // 没啥用
      // methods: {
      //   selectNav(title) {
      //     this.isSelect = this.$route.name
      //     switch (title) {
      //       case '首页':
      //         this.$router.push('./index.vue')
      //         break
      //       case '动画':
      //         this.$router.push('./../../animation')
      //         break
      //       default:
      //         break
      //     }
      //   }
      // },
      selectPag(index, path) {
        // 点击哪个路由就赋值给自定义的下标
        this.navIndex = index
      }
    }
  },
  methods: {
    showContent: function() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-show-enter-active,
.slide-show-leave-active {
  transition: all 0.3s linear;
}
.slide-show-enter,
.slide-show-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
.item-cn {
  color: #757575;
}
.item-cn-active {
  color: #fb7299;
  font-weight: 800;
  border-bottom: 3px solid #fb7299;
}
.home-zone-all__ {
  &normal {
    position: fixed;
    margin-top: 48.5px;
    background-color: #fff;
    z-index: 998;
    height: 44px;
  }
  &show {
    position: fixed;
    background-color: #fff;
    z-index: 998;
    width: 414px;
    margin-left: 0px;
    top: 40px;
    ul {
      margin-top: 0px;
      height: 100%;
      margin-left: 12px;
      text-align: left;
    }
    li {
      margin-top: 30px;
      margin-left: 7px;
      display: inline-block;
      height: 100%;
      position: relative;
      list-style: none;
      text-align: center;
      color: #757575;
      margin-right: 14px;
      width: 45px;
      font-size: 15px;
    }
  }

  &collapse {
    width: 30px;
    height: 20px;
  }
}
.header-action-bar__ {
  &container {
    position: fixed;
    width: 414px;
    height: 48.56px;
    margin: 0px;
    padding: 0px;
    margin-top: 0px;
    margin-left: 1px;
    background-color: #fff;
    z-index: 999;
  }
  &logo {
    position: relative;
    float: left;
    margin-left: 19px;
    width: 68.44px;
    height: 30.91px;
    top: 7px;
  }
  &search {
    position: relative;
    margin-left: 223px;
    top: 11px;
    display: block;
    width: 23.17px;
    height: 23.17px;
  }
  &arrow {
    &-container {
      position: absolute;
      width: 35.88px;
      height: 37px;
      background-color: white;
      margin-left: 360px;
      margin-top: -3px;
      z-index: 600;
    }
    &-img {
      position: absolute;
      width: 20px;
      height: 20px;
      margin-left: 2px;
      top: 15px;
      z-index: 700;
    }
  }
  &user {
    position: absolute;
    margin-left: 268px;
    top: 6px;
    display: block;
    width: 33px;
    height: 33px;
    border-radius: 50%;
  }
  &download {
    display: block;
    margin: 0px auto;
    position: absolute;
    margin-left: 312px;
    top: 9px;
    width: 88.5px;
    height: 27px;
    background-color: #fb7299;
    border: 0px;
    border-radius: 3px;
  }
  &download-text {
    position: relative;
    font-size: 13.5px;
    color: white;
    font-weight: 600;
    vertical-align: middle;
    margin-left: -1px;
    line-height: 1px;
  }
  &guidebar {
    position: relative;
    margin: 0px;
    padding: 0px;
    width: 414px;
    height: 35.2px;
    font-size: 15px;

    &-wrapper {
      padding-top: -5px;
      margin: 0 30px;
      overflow-x: auto;
      overflow-y: hidden;
      height: 100%;
      ul {
        margin-top: 10px;
        height: 100%;
        white-space: nowrap;
      }
      li {
        margin-top: 4px;
        display: inline-block;
        height: 100%;
        position: relative;
        list-style: none;
        text-align: center;
        color: #757575;
        margin-right: 37px;
        width: 36px;
        font-size: 16px;
      }
    }
  }
}
</style>
