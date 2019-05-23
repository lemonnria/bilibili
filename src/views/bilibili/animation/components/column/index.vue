<template>
  <div class="page__stamp">
    <div class="column-bar__container">
      <div class="column-bar__guidebar-wrapper">
        <ul>
          <li v-for="item in selectLists"
            :key="item.id"
            @click="selectPag(item.id, item.pathname)">
            <router-link :to="
            {name:item.name}"
              tag="span">
              <p :class="navIndex===item.id ? 'item-cn-active'
                : 'item-cn'">{{item.title}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="
                column-bar__command">
      <div class="column-bar__pattern">
        <div class="column-bar__hot-recommand">热门推荐</div>
        <div class="column-bar__right-logo">
          <img class="column__logo"
            src="../../assets/rank.svg" />
          <p class="column-bar__rankText">排行榜</p>
          <img class="column__load-more"
            src="../../assets/gengduo.svg" />
        </div>
      </div>
    </div>
    <div class="show__video"><Video></Video></div>
    <div class="mad__show">
      <div class="mad__show-amd">MAD·AMV</div>
      <div class="mad__show-find">查看更多</div>
      <img class="mad__show-more"
        src="../../assets/gengduo.svg" />
    </div>
    <div class="mad__video"><Video></Video></div>
  </div>
</template>

<script>
import Video from './../../../components/video'

export default {
  components: {
    Video
  },
  data() {
    return {
      navIndex: 1,
      selectLists: [
        {
          id: 1,
          title: '推荐'
        },
        {
          id: 2,
          title: 'MAD·AMD'
        },
        {
          id: 3,
          title: 'MMD·3D'
        },
        {
          id: 4,
          title: '短片·手书·配音'
        },
        {
          id: 5,
          title: '综合'
        }
      ],
      methods: {
        selectPag(index, path) {
          // 点击哪个路由就赋值给自定义的下标
          this.navIndex = index
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item-cn {
  color: #757575;
}
.item-cn-active {
  color: #fb7299;
  font-weight: 800;
  border-bottom: 3px solid #fb7299;
}
.column-bar__pattern {
  border-top: solid 1px;
  border-color: #cccccc;
}
.page__stamp {
  background-color: #f9f9f9;
}
.mad__video {
  position: relative;
  margin-top: 200px;
}
.mad__show {
  position: absolute;
  margin-top: 170px;
  display: flex;
  &-amd {
    margin-top: 20px;
    margin-left: 12.5px;
    font-size: 19px;
  }
  &-find {
    position: absolute;
    margin-left: 307px;
    margin-top: 20px;
    font-size: 15px;
    width: 80px;
  }
  &-more {
    margin-top: 20px;
    margin-left: 284px;
    width: 14px;
    height: 20px;
    z-index: 100;
  }
}
.show__video {
  position: relative;
  background-color: #f9f9f9;
  height: 200px;
  margin-top: 120px;
}
.column__ {
  &load-more {
    position: absolute;
    margin-left: 47px;
    top: 5px;
    width: 14px;
    height: 20px;
    z-index: 100;
  }
  &logo {
    position: absolute;
    margin-left: -50px;
    width: 38px;
    height: 25px;
    z-index: 100;
  }
}
.column-bar__ {
  &right-logo {
    position: absolute;
    margin-left: 300px;
    top: 165px;
    z-index: 100;
  }
  &rankText {
    position: relative;
    margin-left: 33px;
    top: 3px;
    font-size: 15px;
    color: #ffcc00;
    z-index: 100;
  }
  &container {
    position: fixed;
    width: 414px;
    height: 135px;
    margin: 0px;
    padding: 0px;
    top: 13px;
    margin-left: 0px;
    overflow: hidden;
    background-color: #f9f9f9;
    border-bottom: solid 1px;
    border-color: #cccccc;
    z-index: 950;
  }
  &commandNav {
    list-style: none;
    float: left;
  }
  &hot-recommand {
    display: block;
    position: absolute;
    top: 150px;
    font-size: 18px;
    margin: 15px;
    margin-left: 23px;
    padding: 0px;
    z-index: 100;
  }
  &command {
    width: 414px;
    height: 58px;
    margin: 0px;
    padding: 0px;
    margin-left: 0px;
    background-color: #f9f9f9;
    z-index: 800;
  }
  &guidebar {
    position: fixed;
    margin: 0px;
    padding: 0px;
    width: 414px;
    height: 35.2px;
    font-size: 15px;
    z-index: 800;
    &-wrapper {
      padding-top: -5px;
      margin: 0 0px;
      overflow-x: auto;
      overflow-y: hidden;
      height: 100%;
      ul {
        margin-top: 95px;
        height: 100%;
        white-space: nowrap;
      }
      li {
        margin-top: 5px;
        display: inline-block;
        height: 100%;
        position: relative;
        list-style: none;
        text-align: center;
        color: #757575;
        margin-right: 15px;
        margin-left: 10px;
        width: 70px;
        font-size: 15px;
      }
    }
  }
}
</style>
