<script setup lang="ts">
import ShadowBox from './components/ShadowBox.vue';
import IntroView from './components/IntroView.vue'
import IDCard from './components/IDCard.vue'
import NoticeBoard from './components/NoticeBoard.vue'
import ThemePills from './components/ThemePills.vue';
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

  <ThemePills />
</template>

<style scoped>
/* ========== 桌面端：水平保持原位置，右卡靠上下偏移制造意外感 ========== */
@media (min-width: 1349px) {
  .id-card {
    position: absolute;
    top: 50%;
    left: 49%;
    transform: translate(-50%, -60%);
  }

  /* 左卡内部保留原始横向并排 */
  .id-card :deep(.shadow-box__content) {
    display: flex;
    align-items: center;
  }

  /* 右卡：水平回到原始位置（right: 32%），但大幅降低高度 */
  /* 意外感来自上下错位而非左右重叠 */
  .notice-board {
    position: absolute;
    top: 50%;
    right: 27%;
    transform: translate(50%, -60%);
  }
}

/* ========== 移动端：保持原有布局 ========== */
@media (max-width: 1350px) {
  .id-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);

    text-align: center;
  }

  .id-card :deep(.shadow-box__content) {
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

@media (max-width: 1350px) and (max-height: 768px) {
  .id-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);

    text-align: center;
  }

  .id-card :deep(.shadow-box__content) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 4px;
  }

  .notice-board {
    position: absolute;
    top: 90%;
    left: 62%;
    transform: translate(-50%, -60%);
  }
}
</style>
