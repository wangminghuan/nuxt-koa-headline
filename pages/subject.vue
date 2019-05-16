<template>
  <div class="subject-wrap">
    <div class="head">
      <div class="img-wrap"><img alt="pic" :src="renderData.subjectinfo.hs_bgurl" class="column-bg"></div>
      <section class="content">
        <h1>{{renderData.subjectinfo.hs_name}}</h1>
        <p>{{renderData.subjectinfo.hs_describe}}</p>
      </section>
    </div>
    <div class="art-list">
      <h4><span>相关文章</span></h4>
       <ul class="article-list-wrap">
      <li class="article-list-item" v-for="(item,index) in renderData.articlelist" :key="index" @click="handleJump(item)">
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
</template>
<script>
import Vue from "vue";
export default {
  data(){
    return {
    }
  },
  methods:{
    handleJump(item){
        window.location.href="detail?id="+item.ha_id
    }
  },
  asyncData (params) {//请求
	return Vue.http.post(`/api/head/head/subjectDetail`,{
      hs_id:params.query.id || 2
  })
	.then(function (response) {
            // console.log(response.data)
            return { renderData: response.data.data};
        })
  },
}
</script>
<style lang="less">
@import url("../assets/item.css");
.subject-wrap {
    background-color: #fff
}

.subject-wrap .img-wrap {
    width: 100%;
    height: 145px;
    overflow: hidden;
    position: relative
}

.subject-wrap .content {
    padding: 12px 18px;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5
}

.subject-wrap .content h1 {
    height: 50px;
    line-height: 50px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #353535;
    font-size: 20px;
    font-weight: 700
}

.subject-wrap .content p {
    line-height: 24px;
    color: #959595;
    overflow: hidden
}

.subject-wrap .art-list h4 {
    height: 44px;
    line-height: 44px;
    padding-left: 26px;
    border-bottom: 1px solid #e5e5e5;
    position: relative;
    background-color: #fff;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.subject-wrap .art-list h4:after {
    content: "";
    position: absolute;
    height: 14px;
    width: 3px;
    background-color: #4396f4;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 15px;
    border-radius: 2px
}

.subject-wrap .art-list h4 span {
    font-size: 14px
}

.subject-wrap .page-infinite-loading {
    text-align: center;
    height: 20px;
    line-height: 20px;
    color: #7e7e7e
}

.subject-wrap .page-infinite-loading div {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px
}

</style>
