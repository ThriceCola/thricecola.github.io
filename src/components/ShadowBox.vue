<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

const boxRef = ref<HTMLElement | null>(null);

let resizeObserver: ResizeObserver;

onMounted(() => {
  nextTick(() => {
    if (boxRef.value) {
      resizeObserver = new ResizeObserver(() => {
        if (boxRef.value) {
          boxRef.value.style.height = `${boxRef.value.scrollHeight}px`;
        }
      });
      resizeObserver.observe(boxRef.value);
    }
  });
});

onBeforeUnmount(() => {
  if (resizeObserver && boxRef.value) {
    resizeObserver.unobserve(boxRef.value);
  }
});
</script>

<template>
  <div ref="boxRef" class="shadow-box">
    <slot />
  </div>
</template>

<style scoped>
.shadow-box {
  border: 1px solid #8aafa9;
  box-shadow: -12px 14px 2px 1px #8aafa960;
  background-color: #f8f8f5;
  display: inline-block;
  padding: 22px 36px;
  /* transition: all 0.25s; */
  overflow: hidden;
}
</style>
