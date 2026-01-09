export const themes: Record<string, Record<string, string>> = {
  light: {
    '--background-color': '#f8f8f5',
    '--normal-text-color': '#2F3F3A',
    '--accent-color': '#178760',
    '--semi-accent-color': '#8aafa9',
    '--highlight-color': '#9bdacf',
    '--shadow-color': '#8aafa960',
  },
  dark: {
    '--background-color': '#121917',
    '--normal-text-color': '#d6e2dd',
    '--accent-color': '#3fbf9a',
    '--semi-accent-color': '#2f6f63',
    '--highlight-color': '#5fd3ba',
    '--shadow-color': '#3fbf9a33',
  },
  // 可以轻松加更多主题，比如 'blue', 'purple' 等
  // blue: { ... }
};
