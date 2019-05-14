<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-koa-project
      </h1>
      <h2 class="subtitle">
        基于nuxt创建的VUE SSR渲染项目
      </h2>
      <div class="links">
        <nuxt-link to="/patent?id=2"><el-button type="primary">进入专栏页面</el-button></nuxt-link>
        <nuxt-link to="/subject?id=1"><el-button type="primary">进入专题页面</el-button></nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

// http://service.inswindows.com/html/head/subject?hs_id=1
// http://service.inswindows.com/html/head/patent?hp_id=2
export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
