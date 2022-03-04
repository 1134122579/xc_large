"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
const name = "天空之橙"; // page title

const port = 9527; // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  // publicPath: "/",
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: port, //端口号
    open: false, //是否自动启动
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: "http://show.skyoranges.com/api/v1/",
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: "",
        },
      },
    },
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      // electron 打包参数配置
      builderOptions: {
        appId: "com.xclove.app",
        productName: "天空之橙", //项目名，也是生成的安装文件名，
        copyright: "Copyright © 2022", //版权信息
        directories: {
          output: "./dist", //输出文件路径
        },
        win: {
          //win相关配置
          icon: "./public/logo.ico", //图标，当前图标在根目录下，注意这里有两个坑
          target: [
            {
              target: "nsis", //利用nsis制作安装程序
              arch: [
                "x64", //64位
                // "ia32", //32位
              ],
            },
          ],
        },
        nsis: {
          oneClick: false, // 是否一键安装
          allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          installerIcon: "./public/logo.ico", // 安装图标
          uninstallerIcon: "./public/logo.ico", //卸载图标
          installerHeaderIcon: "./public/logo.ico", // 安装时头部图标
          createDesktopShortcut: true, // 创建桌面图标
          createStartMenuShortcut: true, // 创建开始菜单图标
          shortcutName: "天空之橙", // 图标名称
        },
      },
    },
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
};
