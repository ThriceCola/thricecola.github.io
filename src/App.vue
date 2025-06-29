<script setup lang="ts">
import ShadowBox from './components/ShadowBox.vue';
import IntroView from './components/IntroView.vue'
import IDCard from './components/IDCard.vue'
import NoticeBoard from './components/NoticeBoard.vue'
</script>

<template>
  <main>
    <ShadowBox class="id-card inline">
      <IDCard />
      <IntroView />
    </ShadowBox>

    <ShadowBox class="notice-board">
      <NoticeBoard />
    </ShadowBox>
  </main>
</template>

<style scoped>
.id-card {
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-50%, -60%);
}

.notice-board {
  position: absolute;
  top: 48%;
  right: 35%;
  transform: translate(50%, -60%);
}

/* 元素左右并排 */
.inline {
  display: flex;
  align-items: center;
}
</style>
