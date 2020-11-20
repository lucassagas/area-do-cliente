export const themes = {
  light: {
    background: '#FFFFFF',
    orange: '#FF4E00',
    text: '#212121',
    icons: '#353535',
    lightgray: '#C8C8C8',
    error: '#c53030',
    purple: '#445495',
    green: '#44956A',
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light;
