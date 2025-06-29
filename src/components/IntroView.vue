<script setup lang="ts">
</script>

<template>
  <div class="txt">
    <p>目前正在开发 <a href="https://github.com/ThriceCola/Kovi" target="_blank">Kovi</a> 框架。</p>
    <p>会一点Rust，会一点node.js，总之就是会一点😣。</p>
    <p>会打游戏，会吃饭，会小学算术。</p>
    <p>你是怎么找到我的主页的呢，交个朋友吧。</p>
    <p>写文章的地方：<a href="https://xlog.thricecola.com" target="_blank">xLog</a></p>
    <!-- <p>或许<a href="https://xlog.thricecola.com" target="_blank">xLog</a>还没有什么文章，你可以看看我的<a
        href="https://www.coolapk.com/u/3227002" target="_blank">酷安</a>主页。</p> -->

    <p>更多链接？：<a href="https://github.com/thricecola" target="_blank">GitHub</a>、
      <a href="https://space.bilibili.com/182754936" target="_blank">BiliBili</a>、
      <a href="https://www.pixiv.net/users/41822781" target="_blank">Pixiv</a>
    </p>

    <!-- <p id="like" :class="{ 'fade-out': !isLikeVisible, 'fade-in': isLikeVisible }" v-html="likeWithLinks"></p> -->

  </div>
</template>

<style scoped>
.txt {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 300px;
}

@media (max-width: 1349px) {
  .txt {
    text-align: center;
  }
}

@media (min-width: 1350px) {
  .txt {
    text-align: left;
  }
}
</style>
