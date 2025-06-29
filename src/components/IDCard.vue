<script setup lang="ts">
</script>

<template>
  <div class="title center-element left-align">
    <img src="@/assets/img/512.jpg" alt="头像" class="titleimg">
    <h2>ThriceCola</h2>
    <h1>三瓶可乐不过岗</h1>
    <p class="email">thricecola@hotmail.com</p>
  </div>
</template>

<style scoped>
h1 {
  font-size: 26px;
}

.titleimg {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.20);
  width: 35%;
  border-radius: 50%;
}

.title {
  width: 220px;
  height: 220px;
}

@media (max-width: 768px) {
  .titleimg {
    width: 35%;
  }

  .title {
    text-align: center;
  }
}

@media (min-width: 768px) {
  .titleimg {
    width: 50%;
  }

  .title {
    text-align: left;
  }
}
</style>
