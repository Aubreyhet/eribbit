<template>
  <div class="container">
    <!-- 首页入口 -->
    <div class="home-entry">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
      <HomeBanner />
    </div>
  </div>
</template>

<script>
import HomeBanner from './components/home-banner.vue'
import HomeCategory from './components/home-category.vue'
export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    HomeBanner
  }
}
</script>

<style lang="less" scoped>
.container{
  .hoverShadow();
  color: @xtxColor;
}
</style>
