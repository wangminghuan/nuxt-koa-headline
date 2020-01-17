<template>
  <div class="column-wrap">
    <div class="head">
      <div class="head-bg"><img alt="pic"
             :src="renderData.patentinfo.hp_bgurl"
             class="column-bg">
      </div>
      <section class="content-wrap">
        <div class="inner-wrap">
          <div class="avatar"><img alt="pic"
                 :src="renderData.patentinfo.hp_headurl"></div>
          <div class="content">
            <h1>{{renderData.patentinfo.hp_name}}</h1>
            <p>{{renderData.patentinfo.hp_describe}}</p>
          </div>
        </div>
      </section>
    </div>
    <div class="art-list">
      <h4><span>相关文章</span></h4>
      <ul class="article-list-wrap"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
        <li class="article-list-item"
            v-for="(item,index) in renderData.articlelist"
            :key="index"
            @click="handleJump(item)">
          <div class="cont">
            <p>{{item.ha_title}}</p>
            <ul class="tag-btm">
              <div class="nums"><b><em class="tag">{{item.ha_tags}}</em><em class="read">阅读 {{item.ha_readNum}}</em></b> <em class="time">{{item.time}}
                </em></div>
            </ul>
          </div>
          <div class="pic"><img :src="item.ha_image"></div>
        </li>
        <mt-spinner v-show="loading && !loadOver"
                    type="fading-circle"
                    :size="20"></mt-spinner>
        <p class="finish-tips"
           v-show="loadOver">-- 已经到底了 --</p>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      page: 2,
      loadOver: false
    }
  },
  methods: {
    handleJump (item) {
      this.$router.push("/detail?id=" + item.ha_id)
    },
    loadMore () {
      this.loading = true;
      this.$axios.get(`/api/head/head/patentDetail`, {        params: {
          hp_id: this.pageId,
          page: this.page
        }      })
        .then((res) => {
          if (res.data.data && res.data.data.articlelist && res.data.data.articlelist instanceof Array && res.data.data.articlelist.length > 0) {
            this.renderData.articlelist = this.renderData.articlelist.concat(res.data.data.articlelist);
            this.page++;
            this.loading = false;
          } else {
            this.loadOver = true;
          }


        })
    }
  },
  // 写法1 ：
  async asyncData ({ $axios, query }) {
    let response = await $axios.get(`/api/head/head/patentDetail`, {      params: {
        hp_id: query.id || 2,
        page: 1
      }    })
    return {
      renderData: response.data.data,
      pageId: query.id || 2
    }
  }
  // 写法2：
  // asyncData (params) {//请求
  //   return Vue.http.post(`/api/head/head/patentDetail`, {
  //     hp_id: params.query.id || 2,
  //     page: 1
  //   })
  //     .then(function (response) {
  //       // console.log(response.data)
  //       return { 
  //         renderData: response.data.data,
  //         pageId:params.query.id || 2
  //          };
  //     })
  // },
}
</script>
<style lang="less">
.mint-spinner-fading-circle {
  margin: 0 auto;
}

.column-wrap {
  background-color: #f2f2f2;

  .head {
    background-color: #fff;
    margin-bottom: 10px;
  }

  .head-bg {
    height: 103px;
    width: 100%;
    overflow: hidden;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      height: 103px;
      display: block;
      z-index: 1;
    }
  }

  .content-wrap {
    position: relative;
    height: 55px;
  }

  .inner-wrap {
    position: absolute;
    top: -55px;
    left: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    color: #959595;
    font-size: 12px;
    z-index: 2;
    height: 110px;
    width: 100%;
    overflow: hidden;
  }

  .avatar {
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    margin-right: 10px;
    margin-left: 15px;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    border: 1px solid #f2f2f2;

    &,
    & img {
      height: 50px;
      width: 50px;
    }
  }

  .column-bg {
    width: 100%;
    height: auto;
    left: 50%;
    top: -50%;
    position: relative;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .content {
    margin-right: 15px;
    width: 100%;

    h1 {
      color: #fff;
      font-size: 15px;
      font-weight: 700;
      line-height: 20px;
      margin-top: 27px;
      margin-bottom: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p {
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      /*! autoprefixer: ignore next */
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: #959595;
      font-size: 12px;
    }
  }

  .art-list h4 {
    height: 44px;
    line-height: 44px;
    padding-left: 20px;
    border-bottom: 1px solid #e5e5e5;
    position: relative;
    background-color: #fff;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    &:after {
      content: "";
      position: absolute;
      height: 14px;
      width: 3px;
      background-color: #4396f4;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      left: 10px;
      border-radius: 2px;
    }

    span {
      font-size: 14px;
    }
  }
}
.finish-tips {
  text-align: center;
  height: 20px;
  line-height: 20px;
  color: #7e7e7e;
}
</style>

