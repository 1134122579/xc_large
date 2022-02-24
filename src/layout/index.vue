<template>
  <div class="layout">
    <el-container class="">
      <el-header height="100px"><HeaderNav /></el-header>
      <el-main>
        <transition name="el-zoom-in-top">
          <router-view />
        </transition>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import HeaderNav from "@/components/HeaderNav/index.vue";
export default {
  components: {
    HeaderNav,
  },
  data() {
    return {};
  },
};
</script>
<style lang="less">
.layout {
  width: 100%;
  height: 100%;
  .el-container {
    width: 100%;
    height: 100%;
    .el-header {
      height: auto;
    }
    .el-main {
      overflow: hidden;
    }
  }
}
</style>
