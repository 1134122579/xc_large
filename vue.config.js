"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
const name = "天空之橙大屏导览"; // page title

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
