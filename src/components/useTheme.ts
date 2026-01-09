import { ref, watch } from 'vue';
import { themes } from '@/themes';

const currentTheme = ref(localStorage.getItem('theme') || 'light'); // 默认 light，或从 localStorage 读取

export function useTheme() {
  const switchTheme = (themeName: string) => {
    if (!themes[themeName]) return;
    currentTheme.value = themeName;
    localStorage.setItem('theme', themeName);

    // 动态设置 CSS
    const root = document.documentElement;
    Object.entries(themes[themeName]).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };

  // 初始化时应用
  switchTheme(currentTheme.value);

  // 监听系统 prefers-color-scheme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  watch(prefersDark, (e) => { if (!localStorage.getItem('theme')) switchTheme(e.matches ? 'dark' : 'light'); });

  return { currentTheme, switchTheme, themes: Object.keys(themes) };
}
