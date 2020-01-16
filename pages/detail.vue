<template>
  <div class="detail-outer-wrap">
    <div class="detail-inner-wrap">
      <div class="article-wrap">
        <h2>{{renderData.title}}</h2>
        <p class="article-info"><span class="time">{{renderData.detail.time}}</span> <span>阅读<i>{{renderData.detail.ha_readNum}}</i></span> <span>赞<i>{{renderData.detail.ha_upNum}}</i></span></p>
        <div class="content-wrap">
          <div class="content ql-editor"
               v-html="renderData.detail.ha_content"></div>
        </div>
        <p class="article-info"><span>小编：<i>{{renderData.detail.ha_author}}</i></span> <span>文章来源：<i>{{renderData.detail.ha_source}}</i></span></p>
      </div>
      <div class="recom-more">
        <h4 class="detail-com-title"><em>相关推荐</em></h4>
        <ul class="article-list-wrap">
          <li class="article-list-item"
              v-for="(item,index) in renderData.recommendList"
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
        </ul>
      </div>
    </div>
    <div style="height:20px"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  asyncData ({ $axios, query }) {//请求
    return $axios.get('/api/head/head/detail', {params: {
        ha_id: query.id
      }})
      .then((response) => {
        return {
          renderData: response.data.data && response.data.data.detail ? response.data.data : {
            detail: {},
            title: ""
          }
        };
      })
  },
  methods: {
    handleJump (item) {
      window.location.href = "detail?id=" + item.ha_id
    }
  }
}
</script>

<style lang="less">
.detail-com-title {
  text-align: center;
  margin-bottom: 8px;
  position: relative;

  em {
    font-size: 18px;
    font-weight: 400;
    color: #353535;
    text-align: center;
    font-weight: 700;
    font-weight: 600;
    color: #333;
    padding: 0 2px;
    background: -webkit-linear-gradient(
      top,
      hsla(0, 0%, 100%, 0.1) 50%,
      rgba(163, 201, 255, 0.35) 0
    );
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(50%, hsla(0, 0%, 100%, 0.1)),
      color-stop(50%, rgba(163, 201, 255, 0.35))
    );
    background: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0.1) 50%,
      rgba(163, 201, 255, 0.35) 0
    );
  }
}

.recom-more {
  background-color: #fff;
}

.recom-more .article-list-item:last-child {
  border-bottom: 0;
}

.article-wrap {
  background-color: #fff;
  padding: 15px;
  padding-bottom: 0;

  h2 {
    font-size: 20px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    /*! autoprefixer: ignore next */
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: rgba(17, 23, 29, 0.86);
    line-height: 30px;
  }

  .article-info {
    font-size: 12px;
    font-weight: 400;
    color: #999;
    line-height: 20px;
    margin: 32px 0;

    i {
      margin-left: 5px;
    }

    span {
      margin-right: 8px;
    }
  }

  .content {
    line-height: 30px;

    img {
      display: block;
      margin: 0 auto;
    }

    p {
      font-size: 14px;
      color: #555;
      line-height: 28px;
    }
  }
}
</style>
