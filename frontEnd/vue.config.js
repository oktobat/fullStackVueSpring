const { defineConfig } = require("@vue/cli-service");
module.exports = {
  outputDir: "../backEnd/src/main/resources/static",
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:8090/',
        changeOrigin: true
      }
    }
  }
};

