<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useTheme, type OptTheme } from '@/components/useTheme';

const { currentTheme, switchTheme } = useTheme();

const pills = ref<HTMLElement | null>(null);
const ready = ref(false);

const pillDefs = [
  { theme: 'light' as OptTheme, label: '亮色主题', icon: 'sun' },
  { theme: 'dark' as OptTheme, label: '暗色主题', icon: 'moon' },
  { theme: 'system' as OptTheme, label: '跟随系统', icon: 'monitor' },
];

const activeIndex = computed(() => {
  const idx = pillDefs.findIndex(p => p.theme === currentTheme.value);
  return idx === -1 ? 2 : idx; // default to system
});

onMounted(() => {
  // Enable slider transition after first paint (no initial slide animation)
  requestAnimationFrame(() => {
    ready.value = true;
  });
});
</script>

<template>
  <div ref="pills" class="theme-pills" :class="{ 'theme-pills--ready': ready }"
    :style="{ '--active-index': activeIndex }" role="radiogroup" aria-label="主题切换">
    <button v-for="(p, i) in pillDefs" :key="p.theme" class="theme-pill" :class="{ active: i === activeIndex }"
      :aria-label="p.label" :aria-checked="i === activeIndex" role="radio" @click="switchTheme(p.theme)">
      <!-- sun -->
      <svg v-if="p.icon === 'sun'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      <!-- moon -->
      <svg v-if="p.icon === 'moon'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <!-- monitor -->
      <svg v-if="p.icon === 'monitor'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    </button>
    <div class="theme-pills__slider"></div>
  </div>
</template>

<style scoped>
.theme-pills {
  position: fixed;
  bottom: 1.5em;
  right: 1.5em;
  z-index: 100;

  display: inline-flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 100px;
  padding: 3px;
  gap: 0;
  flex-shrink: 0;
  transition: background 1s;
}

.theme-pill {
  position: relative;
  z-index: 1;
  width: 32px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--semi-accent-color);
  cursor: pointer;
  border-radius: 100px;
  transition: color 0.3s;
  padding: 0;
}

.theme-pill:hover {
  color: var(--normal-text-color);
}

.theme-pill.active {
  color: #fff;
}

.theme-pills__slider {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 32px;
  height: 28px;
  border-radius: 100px;
  background: var(--accent-color);
  /* Disabled initially to prevent slide-on-mount; re-enabled by .theme-pills--ready */
  transition: none;
  transform: translateX(calc(var(--active-index) * 100%));
}

.theme-pills--ready .theme-pills__slider {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
