<template>
  <div class="subject-wrap">
    <div class="head">
      <div class="img-wrap"><img alt="pic"
             :src="renderData.subjectinfo.hs_bgurl"
             class="column-bg"></div>
      <section class="content">
        <h1>{{renderData.subjectinfo.hs_name}}</h1>
        <p>{{renderData.subjectinfo.hs_describe}}</p>
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
      window.location.href = "detail?id=" + item.ha_id
    },
  loadMore () {
      this.loading = true;
      this.$axios.get(`/api/head/head/subjectDetail`, { params: {
          hs_id: this.pageId,
          page: this.page
        }})
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
  asyncData ({ $axios, query }) {//请求
    return $axios.get(`/api/head/head/subjectDetail`, {
      params: {
        hs_id: query.id || 2
      }
    })
      .then((response) => {
        return { renderData: response.data.data , pageId: query.id || 2};
      })
  },
}
</script>
<style lang="less">
.subject-wrap {
  background-color: #fff;

  .img-wrap {
    width: 100%;
    height: 145px;
    overflow: hidden;
    position: relative;
  }

  .content {
    padding: 12px 18px;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;

    h1 {
      height: 50px;
      line-height: 50px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: #353535;
      font-size: 20px;
      font-weight: 700;
    }

    p {
      line-height: 24px;
      color: #959595;
      overflow: hidden;
    }
  }


  .art-list {
    h4 {
      height: 44px;
      line-height: 44px;
      padding-left: 26px;
      border-bottom: 1px solid #e5e5e5;
      position: relative;
      background-color: #fff;
      -moz-box-sizing: border-box;
      box-sizing: border-box;

      span {
        font-size: 14px;
      }

      &:after {
        content: "";
        position: absolute;
        height: 14px;
        width: 3px;
        background-color: #4396f4;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 15px;
        border-radius: 2px;
      }
    }
  }


  .page-infinite-loading {
    text-align: center;
    height: 20px;
    line-height: 20px;
    color: #7e7e7e;
  }

  .page-infinite-loading div {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }
}
.finish-tips {
  text-align: center;
  height: 20px;
  line-height: 20px;
  color: #7e7e7e;
}
</style>
