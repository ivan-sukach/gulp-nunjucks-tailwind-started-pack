module.exports = {
  config: {
    tailwindjs: "./tailwind.config.js",
    port: 8799
  },
  paths: {
    root: "./",
    src: {
      base: "./src",
      scss: "./src/scss",
      js: "./src/js",
      img: "./src/img",
      video: "./src/video",
      fonts: "./src/fonts",
      models: "./src/models",
      json: "./src/json",
    },
    dist: {
      base: "./dist",
      css: "./dist/css",
      js: "./dist/js",
      img: "./dist/img",
      video: "./dist/video",
      fonts: "./dist/fonts",
      models: "./dist/models",
      json: "./dist/json",
    },
    build: {
      base: "./build",
      css: "./build/css",
      js: "./build/js",
      img: "./build/img",
      video: "./build/video",
      fonts: "./build/fonts",
      models: "./build/models",
      json: "./build/json",
    }
  }
}