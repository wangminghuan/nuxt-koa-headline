<template>
  <div class="column-wrap">
    <div class="art-list">
      <ul class="article-list-wrap"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
        <li class="article-list-item"
            v-for="(item,index) in list"
            :key="index"
            @click="handleJump(item)">
          <template v-if="item.image_list && item.image_list.length>0">
            <div class="cont">
              <p>{{item.title}}</p>
              <div class="img-arr">
                <div class="pic"
                     v-for="(sitem,sindex) in item.image_list"
                     :key="sindex"><img :src="sitem.url"></div>
              </div>
              <ul class="tag-btm">
                <div class="nums"><b><em class="tag">{{item.media_name}}</em><em class="read">评论 {{item.comment_count}}</em></b><em class="time">{{item.datetime}}</em></div>
              </ul>
            </div>
          </template>
          <template v-else>
            <div class="cont">
              <p>{{item.title}}</p>
              <ul class="tag-btm">
                <div class="nums"><b><em class="tag">{{item.media_name}}</em><em class="read">评论 {{item.comment_count}}</em></b> <em class="time">{{item.datetime}}</em></div>
              </ul>
            </div>
            <div class="pic"
                 v-if="item.large_image_url"><img :src="item.large_image_url"></div>
          </template>
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
      this.$router.push("/detail?id=" + item.item_id)
    },
    loadMore () {
      this.loading = true;
      const behot_time = this.list[this.list.length - 1] ? this.list[this.list.length - 1].behot_time : (new Date().getTime()-2*60*60*1000).toString().substring(0,10);
      this.$axios.get(`/api/list/`, {
        params: {
          tag: '__all__',
          ac: 'wap',
          count: '20',
          format: 'json_raw',
          as: 'A1750EBF6820180',
          cp: '5EF860E1D8F03E1',
          max_behot_time: behot_time,
          _signature: 'zzhYuAAAkcgoT6C-L.hV.s84WK',
          i: behot_time,
          page: this.page
        }})
        .then((res) => {
          const _data = res.data;
          if (_data.data && _data.has_more) {
            this.list = this.list.concat(_data.data);
            this.page++;
            this.loading = false;
          } else {
            this.loadOver = true;
          }
        })
    }
  },
  // 写法1 ：
  async asyncData ({$axios, query }) {
    const behot_time=(new Date().getTime()-2*60*60*1000).toString().substring(0,10);
    let response = await $axios.get(process.server?`/list/`:`/api/list/`, {
        params: {
          tag: '__all__',
          ac: 'wap',
          count: '20',
          format: 'json_raw',
          as: 'A1750EBF6820180',
          cp: '5EF860E1D8F03E1',
          max_behot_time: behot_time,
          _signature: 'zzhYuAAAkcgoT6C-L.hV.s84WK',
          i: behot_time,
          page: 1
        }});
    // console.log(response.config)
    return {
      list: response.data.data,
    }
  }
}
</script>
<style lang="less">
.mint-spinner-fading-circle {
  margin: 0 auto;
}

.column-wrap {
  // background-color: #f2f2f2;

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
  .img-arr {
    margin-top: 20px;
    .pic {
      width: 30%;
    }
    display: flex;
    justify-content: space-between;
  }
}
.finish-tips {
  text-align: center;
  height: 20px;
  line-height: 20px;
  color: #7e7e7e;
}
</style>

