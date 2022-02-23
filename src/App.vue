<template>
  <div id="app">
    <div class="headerStyle">
      <HeaderNav />
    </div>
    <div class="contentstyle">
      <transition>
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav/index.vue";

export default {
  components: {
    HeaderNav,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #233344;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  .headerStyle {
    width: 100%;
    flex-shrink: 0;
  }
  .contentstyle {
    flex: 1;
    flex-shrink: 0;
    width: 100%;
    box-sizing: border-box;
    background: #fafafa;
    overflow: hidden;
  }
}
</style>
