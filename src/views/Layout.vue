<template>
  <!-- 顶部通栏 -->
  <AppNavBar />
  <!-- 头部组件 -->
  <AppHeader />
  <AppHeaderSticky />
  <!-- 内容容器 -->
  <div class="main">
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <AppFooter />
</template>

<script>
import AppNavBar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  components: {
    AppNavBar,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  name: 'Layout',
  setup () {
    const store = useStore()
    store.dispatch('category/getCateList')
  }
}
</script>

<style>

</style>
