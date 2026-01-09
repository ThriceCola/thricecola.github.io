import { ref, watch } from 'vue';
import { themes } from '@/themes';

export type OptTheme = 'system' | Theme

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

const currentTheme = ref(localStorage.getItem('theme') as OptTheme | null || 'system'); // 默认 light，或从 localStorage 读取

export function useTheme() {
  const systemTheme = () => {
    // 监听系统 prefers-color-scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    currentTheme.value = "system";
    localStorage.setItem('theme', "system");

    // 设置为 system 模式
    currentTheme.value = 'system';
    localStorage.setItem('theme', 'system');

    // 立即切换到当前系统主题
    realSwitchTheme(prefersDark.matches ? Theme.Dark : Theme.Light);

    prefersDark.addEventListener(
      "change",
      (e) => {
        console.log("watch!!!")
        realSwitchTheme(e.matches ? Theme.Dark : Theme.Light);
      }
    )
  }

  const switchTheme = (themeName: OptTheme) => {
    if (themeName === "system") {
      systemTheme();
      return;
    }

    if (!themes[themeName]) return;
    currentTheme.value = themeName;
    localStorage.setItem('theme', themeName);

    // 动态设置 CSS
    realSwitchTheme(themeName);
  };

  const realSwitchTheme = (themeName: Theme) => {
    if (!themes[themeName]) return;

    // 动态设置 CSS
    const root = document.documentElement;
    Object.entries(themes[themeName]).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };

  // 初始化时应用
  switchTheme(currentTheme.value);

  const resThemes = Object.keys(themes);

  const _ = resThemes.push("system");

  return { currentTheme, switchTheme, themes: resThemes };
}
