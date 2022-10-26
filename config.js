module.exports = {
  config: {
    tailwindjs: "./tailwind.config.js",
    port: 8799
  },
  paths: {
    root: "./",
    src: {
      base: "./src",
      css: "./src/css",
      js: "./src/js",
      img: "./src/img",
      video: "./src/video",
      fonts: "./src/fonts",
    },
    dist: {
      base: "./dist",
      css: "./dist/css",
      js: "./dist/js",
      img: "./dist/img",
      video: "./dist/video",
      fonts: "./dist/fonts",
    },
    build: {
      base: "./build",
      css: "./build/css",
      js: "./build/js",
      img: "./build/img",
      video: "./build/video",
      fonts: "./build/fonts",
    }
  }
}