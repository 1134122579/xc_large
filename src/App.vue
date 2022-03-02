<template>
  <div id="app">
    <div class="headerWin">
      <div class="icon" @click="minimizeWin">
        <img src="./assets/closeIcon/zuixiaohua.png" alt="" />
      </div>
      <div class="icon expand" @click="maximizeWin">
        <img src="./assets/closeIcon/expand.png" alt="" />
      </div>
      <div class="icon" @click="closeWin">
        <img src="./assets/closeIcon/guanbi4.png" alt="" />
      </div>
    </div>
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
import { remote } from "electron";
export default {
  created() {
    // console.log(electron);
  },
  methods: {
    minimizeWin() {
      remote.getCurrentWindow().minimize();
      // ipcRenderer.send("window-min"); // 通知主进程我要进行窗口最小化操作
    },
    maximizeWin() {
      const win = remote.getCurrentWindow();
      console.log("maximizeWin", win);

      if (win.isMaximized()) {
        // 判断 窗口是否已最大化
        win.restore(); // 恢复原窗口大小
      } else {
        win.maximize(); //最大化窗口
      }
    },
    closeWin() {
      remote.getCurrentWindow().close(); // 关闭窗口，也结束了所有进程
    },
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
  .headerWin {
    position: absolute;
    top: 0;
    width: 100%;
    min-height: 40px;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 12;
    &:hover .icon {
      display: block;
    }
    .icon {
      display: none;
      width: 40px;
      margin-right: 18px;
      cursor: pointer;
      &:hover {
        animation: swing;
        animation-duration: 1.2s;
      }
      img {
        width: 100%;
      }
    }
    .expand {
      width: 30px;
    }
  }
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
  background: #333;
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
