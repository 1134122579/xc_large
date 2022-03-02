"use strict";

import { app, protocol, BrowserWindow, ipcMain } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS_DEVTOOLS } from "electron-devtools-installer";
const isDevelopment = process.env.NODE_ENV !== "production";

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1280,
    height: 1024,
    frame: false, //是否用无边窗口，
    backgroundColor: "#2e2c29",
    // transparent设置为true是使用窗口的透明效果。
    webPreferences: {
      javascript: true,
      plugins: true,
      nodeIntegration: true,
      enableRemoteModule: true, // 打开remote  模块
      contextIsolation: false,
      // preload: __dirname + "/preload.js",
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      // nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      // contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
    },
  });
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS);
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}

// 窗口 控制
// win.on('resize', updateReply)          // 跟踪大小变化的回调
// win.on('move', updateReply)            // 跟踪移动的回调
// win.on('focus', hideFocusBtn)          // 跟踪获得焦点的回调
// win.on('blur', showFocusBtn)           // 跟踪失去焦点的回调
// win.focus()                            // 使窗口获得焦点
// win.maximize()                         // 最大化
// win.unmaximize()                       // 取消最大化
// win.isMaximized()                      // 是否最大化
// win.minimize()                         // 最小化
// win.restore()                          // 还原
// win.isMinimized()                      // 是否最小化
// 1. 窗口 最小化
// ipcMain.on("window-min", function () {
//   // 收到渲染进程的窗口最小化操作的通知，并调用窗口最小化函数，执行该操作
//   win.minimize();
// });
// // 2. 窗口 最大化、恢复
// ipcMain.on("window-max", function () {
//   if (win.isMaximized()) {
//     // 为true表示窗口已最大化
//     win.restore(); // 将窗口恢复为之前的状态.
//   } else {
//     win.maximize();
//   }
// });
// // 3. 关闭窗口
// ipcMain.on("window-close", function () {
//   win.close();
// });
let win_list = []; //存储打开的窗口
//主进程监听创建窗口事件
ipcMain.on("createWindow", function (event, infor) {
  const currentWindow = BrowserWindow.getFocusedWindow(); //获取当前活动的浏览器窗口。
  if (currentWindow) {
    //如果上一步中有活动窗口，则根据当前活动窗口的右下方设置下一个窗口的坐标
    const [currentWindowX, currentWindowY] = currentWindow.getPosition();
    x = currentWindowX + 20;
  }
  let oldWin = null;
  for (const item of win_list) {
    //判断要创建的窗口是否已经打开，如果已经打开取出窗口
    if (item.url == infor.url) {
      oldWin = item.mwin;
      break;
    }
  }

  if (oldWin) {
    //窗口存在直接打开
    oldWin.show();
  } else {
    //否则创建新窗口
    Menu.setApplicationMenu(null);
    let newwin = new BrowserWindow({
      x,
      titleBarStyle: "hidden",
      minWidth: 1024,
      minHeight: 768,
      // parent: win, //win是主窗口
    });
    // newwin.webContents.openDevTools();
    if (infor.type == 1) {
      newwin.loadURL(path.join("file:", __dirname, infor.url));
    } else {
      newwin.loadURL(infor.url);
    }
    newwin.on("closed", () => {
      //窗口关闭。删除win_list存储的数据
      for (let [index, item] of win_list.entries()) {
        if (item.mwin == newwin) {
          win_list.splice(index, 1);
          newwin = null;
          break;
        }
      }
    });
    win_list.push({ url: infor.url, mwin: newwin });
  }
});
