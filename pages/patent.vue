<template>
<div class="column-wrap">
  <div class="head">
    <div class="head-bg"><img alt="pic" src="//cdn.inswindows.com////oss/Msg/img/1513927594.jpg" class="column-bg">
    </div>
    <section class="content-wrap">
      <div class="inner-wrap">
        <div class="avatar"><img alt="pic" src="//cdn.inswindows.com///oss/Msg/img/1513927799.jpg"></div>
        <div class="content">
          <h1>我身边的代理人</h1>
          <p>何必仰望名师大咖，你的人生也很精彩！来自五湖四海的保险业同胞们，一起来分享我们的故事，聆听别样的人生</p>
        </div>
      </div>
    </section>
  </div>
  <div class="art-list">
    <h4><span>相关文章</span></h4>
    <ul class="article-list-wrap">
      <li class="article-list-item">
        <div class="cont">
          <p>做保险她坚持一个真理：赢得客户的信任比业绩更重要！——张辰辰</p>
          <ul class="tag-btm">
            <div class="nums"><b><em class="tag">保险展业</em> <em class="read">阅读 1056</em></b> <em class="time">09-17
              </em></div>
          </ul>
        </div>
        <div class="pic"><img data-src="//cdn.inswindows.com//oss/Msg/img/1537153609.jpg"
            src="//cdn.inswindows.com//oss/Msg/img/1537153609.jpg" lazy="loaded"></div>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import Vue from "vue";
export default {
  data(){
    return {
        title:"我是专题页"
    }
  },
  asyncData ({ params }) {//请求
	return Vue.http.get(`/api/head/head/patentDetail?hp_id=2`)
	.then(function (response) {
            // console.log(response.data)
            return { renderData: response.data};
        })
  },
}
</script>
<style lang="less">
.column-wrap {
    background-color: #f2f2f2
}

.column-wrap .head {
    background-color: #fff;
    margin-bottom: 10px
}

.column-wrap .head-bg {
    height: 103px;
    width: 100%;
    overflow: hidden;
    position: relative
}

.column-wrap .head-bg:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0,0,0,.4);
    height: 103px;
    display: block;
    z-index: 1
}

.column-wrap .content-wrap {
    position: relative;
    height: 55px
}

.column-wrap .inner-wrap {
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
    overflow: hidden
}

.column-wrap .avatar {
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
    border: 1px solid #f2f2f2
}

.column-wrap .avatar,.column-wrap .avatar img {
    height: 50px;
    width: 50px
}

.column-wrap .column-bg {
    width: 100%;
    height: auto;
    left: 50%;
    top: -50%;
    position: relative;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
}

.column-wrap .content {
    margin-right: 15px;
    width: 100%
}

.column-wrap .content h1 {
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    margin-top: 27px;
    margin-bottom: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.column-wrap .content p {
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /*! autoprefixer: on */
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: #959595;
    font-size: 12px
}

.column-wrap .art-list h4 {
    height: 44px;
    line-height: 44px;
    padding-left: 20px;
    border-bottom: 1px solid #e5e5e5;
    position: relative;
    background-color: #fff;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.column-wrap .art-list h4:after {
    content: "";
    position: absolute;
    height: 14px;
    width: 3px;
    background-color: #4396f4;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: .4rem;
    border-radius: 2px
}

.column-wrap .art-list h4 span {
    font-size: 14px
}

.article-list-item {
    padding: 20px 16px 18px 16px;
    background-color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden;
    position: relative
}

.article-list-item:after {
    content: "";
    position: absolute;
    width: 9.14667rem;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 1px;
    background-color: #eee
}

.article-list-item .cont {
    min-width: 172px;
    height: 78px;
    width: 100%;
}

.article-list-item .pic {
    min-width: 98px;
    width: 108px;
    height: auto;
    overflow: hidden;
    margin-left: 10px;
}

.article-list-item .pic img {
    width: 100%;
    height: 78px;
    display: block
}

.article-list-item .cont p {
    color: #353535;
    font-size: 16px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /*! autoprefixer: on */
    -webkit-line-clamp: 2;
    height: 44px;
    margin-top: -4px
}

.article-list-item .tag-btm {
    margin-top: 24px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    height: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
}

.article-list-item .tag-btm li {
    font-size: 10px;
    height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.article-list-item .tag-btm .nums {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%
}
.article-list-item .tag-btm .nums,.article-list-item .tag-btm b {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    height: 18px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.article-list-item .tag-btm b {
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -moz-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.article-list-item .tag-btm em.tag {
    margin-right: 10px
}

.article-list-item .tag-btm em.read {
    // width: 16px
}

.article-list-item .tag-btm em {
    color: #999;
    font-size: 12px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis
}

.article-list-item:last-of-type:after {
    display: none
}

</style>


