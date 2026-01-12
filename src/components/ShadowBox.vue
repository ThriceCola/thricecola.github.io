<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

const boxRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);

let resizeObserver: ResizeObserver | undefined;

function updateSize() {
  const box = boxRef.value;
  const content = contentRef.value;
  if (!box || !content) return;

  // 关键点：
  // - 外层 box 用 px 宽高做动画（可插值）
  // - 目标尺寸用内层 content 来测量（避免外层 overflow/当前宽高影响测量）
  const nextW = content.scrollWidth;
  const nextH = content.scrollHeight;

  box.style.width = `${nextW}px`;
  box.style.height = `${nextH}px`;
}

onMounted(() => {
  nextTick(() => {
    if (!boxRef.value || !contentRef.value) return;

    // 初次设置
    updateSize();

    resizeObserver = new ResizeObserver(() => {
      updateSize();
    });

    // 观察内容层的尺寸变化（slot 内容变化会反映到这里）
    resizeObserver.observe(contentRef.value);
  });
});

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});
</script>

<template>
  <div ref="boxRef" class="shadow-box">
    <div ref="contentRef" class="shadow-box__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.shadow-box {
  border: 1px solid var(--semi-accent-color);
  box-shadow: -12px 14px 2px 1px var(--shadow-color);
  background-color: var(--background-color);

  /* 外层负责“动画尺寸” */
  display: inline-block;

  /* padding 放到内层，避免你测量宽高时还要手动加 padding */
  transition:
    width 0.5s,
    height 0.5s,
    color 1s,
    background-color 1s,
    box-shadow 1s;

  /* 动画过程中多出来的内容先裁掉，这是实现“容器逐渐变大”的必要条件 */
  overflow: hidden;
}

.shadow-box__content {
  /* 内层负责“自然尺寸”与测量 */
  display: inline-block;
  padding: 22px 36px;
  /* 避免内层被外层 width 影响换行导致测量不准（按需保留/删除） */
  width: max-content;
}
</style>
