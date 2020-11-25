export const themes = {
  light: {
    background: '#FFFFFF',
    orange: '#FF4E00',
    orangeicons: '#e76126',
    text: '#212121',
    icons: '#353535',
    lightgray: '#C8C8C8',
    error: '#c53030',
    purple: '#445495',
    green: '#44956A',
    greenopacity: 'rgba(69, 150, 107, 0.5)',
    backgroundcard: '#fafafa',
    backgroundmenu: '#cccc',
    whiteopacity: 'rgba(255, 255, 255, 0.5)',
  },

  dark: {
    background: '#212121',
    orange: '#FF4E00',
    orangeicons: '#e76126',
    text: '#FFFF',
    icons: '#353535',
    lightgray: '#C8C8C8',
    error: '#c53030',
    purple: '#445495',
    green: '#44956A',
    greenopacity: 'rgba(69, 150, 107, 0.5)',
    backgroundcard: '#fafafa',
    backgroundmenu: '#cccc',
    whiteopacity: 'rgba(255, 255, 255, 0.5)',
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
