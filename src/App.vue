<template>
  <div id="app">
    <!-- <div class="headerStyle">
      <HeaderNav />
    </div>
    <div class="contentstyle">
      <transition> -->
    <router-view />
    <!-- </transition>
    </div> -->
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
  box-sizing: border-box;
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
.flexcontent {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flexcolumn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
/*修改某个div的滚动条样式*/
&::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  /**/
}
&::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 2px;
}
&::-webkit-scrollbar-thumb {
  background: #fdb732;
  border-radius: 10px;
}
&::-webkit-scrollbar-thumb:hover {
  background: #999;
}
&::-webkit-scrollbar-corner {
  background: #204754;
}
.ani {
  transition: all 0.5s ease-out;
  /* 过度 所有css属性 1秒过度 结束慢*/
  -moz-transition: all 0.5s ease-out;
  /* Firefox 4 */
  -webkit-transition: all 0.5s ease-out;
  /* Safari 和 Chrome */
  -o-transition: all 0.5s ease-out;
}
</style>
