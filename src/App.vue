<script setup lang="ts">
import ShadowBox from './components/ShadowBox.vue';
import IntroView from './components/IntroView.vue'
import IDCard from './components/IDCard.vue'
import NoticeBoard from './components/NoticeBoard.vue'
import { useTheme } from '@/components/useTheme';

const { currentTheme, switchTheme, themes } = useTheme();
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


  <div>
    <select v-model="currentTheme" @change="switchTheme(currentTheme)">
      <option v-for="t in themes" :key="t" :value="t">{{ t }}</option>
    </select>
  </div>
</template>

<style scoped>
@media (min-width: 1349px) {

  /* 外层：只负责定位 */
  .id-card {
    position: absolute;
    top: 50%;
    left: 37%;
    transform: translate(-50%, -60%);
  }

  /* 内层：负责左右并排（ShadowBox 内部 wrapper） */
  .id-card :deep(.shadow-box__content) {
    display: flex;
    align-items: center;
  }

  .notice-board {
    position: absolute;
    top: 53%;
    right: 32%;
    transform: translate(50%, -60%);
  }
}

@media (max-width: 1350px) {

  /* 外层：只负责定位 */
  .id-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);

    text-align: center;
  }

  /* 内层：负责上下排列（ShadowBox 内部 wrapper） */
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

  /* 外层：只负责定位 */
  .id-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);

    text-align: center;
  }

  /* 内层：负责上下排列（ShadowBox 内部 wrapper） */
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
