<script setup lang="ts">
import ShadowBox from './components/ShadowBox.vue';
import IntroView from './components/IntroView.vue'
import IDCard from './components/IDCard.vue'
import NoticeBoard from './components/NoticeBoard.vue'
</script>

<template>
  <main>
    <ShadowBox class="id-card">
      <IDCard />
      <IntroView />
    </ShadowBox>

    <ShadowBox class="notice-board">
      <NoticeBoard />
    </ShadowBox>
  </main>
</template>

<style scoped>
@media (min-width: 1349px) {

  /* 元素左右并排 */
  .id-card {
    position: absolute;
    top: 50%;
    left: 37%;
    transform: translate(-50%, -60%);

    display: flex;
    align-items: center;
  }

  .notice-board {
    position: absolute;
    top: 48%;
    right: 32%;
    transform: translate(50%, -60%);
  }
}

@media (max-width: 1350px) {
  .id-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);

    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 4px;
  }

  .notice-board {
    position: absolute;
    top: 80%;
    left: 62%;
    transform: translate(-50%, -60%);
  }
}
</style>
