const setStorageThemeBySystemOne = (): void => {
  if (!localStorage.getItem('theme')) {
    const SYSTEM_THEME = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.setItem('theme', SYSTEM_THEME);
  }
};

const getStorageTheme = (): 'light' | 'dark' => {
  return localStorage.getItem('theme') as 'light' | 'dark' || 'light';
}

const toggleStorageTheme = (): void => {
  const CURRENT_THEME = getStorageTheme();
  const NEW_THEME = CURRENT_THEME === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', NEW_THEME);
  applyTheme();
}

const applyTheme = (): void => {
  const CURRENT_THEME = getStorageTheme();
  document.documentElement.setAttribute('data-theme', CURRENT_THEME);
  switchButtonIcon()
}

const toggleButton = (): void => {
  const BUTTON = document.querySelector('#theme') as HTMLElement | null;
  if (BUTTON) {
    BUTTON.addEventListener('click', (toggleStorageTheme));
  }
}

const switchButtonIcon = (): void => {
  const BUTTON = document.querySelector('#theme');
  if (!BUTTON) return;

  const CURRENT_THEME = getStorageTheme();
  BUTTON.classList.toggle('ri-moon-line', CURRENT_THEME === 'light');
  BUTTON.classList.toggle('ri-sun-line', CURRENT_THEME === 'dark');
}

const watchSystemTheme = (): void => {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', e.matches ? 'dark' : 'light');
      applyTheme();
    }
  });
}

export const handleTheme = (): void => {
  setStorageThemeBySystemOne();
  toggleButton();
  switchButtonIcon()
  watchSystemTheme();
};