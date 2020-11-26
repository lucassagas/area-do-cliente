export const themes = {
  light: {
    background: '#FFFFFF',
    orange: '#FF4E00',
    orangeicons: '#e76126',
    text: '#212121',
    lighttext: '#ffff',
    icons: '#353535',
    lightgray: '#C8C8C8',
    error: '#c53030',
    purple: '#445495',
    green: '#44956A',
    greenopacity: 'rgba(69, 150, 107, 0.5)',
    backgroundcard: '#fafafa',
    backgroundmenu: '#cccc',
    whiteopacity: 'rgba(255, 255, 255, 0.5)',
    lightgreen: '#e6fffa',
    shimmerOne: '#e7edf1',
    shimmerTwo: '#f8f8f8',
  },

  dark: {
    background: '#212121',
    orange: '#FF4E00',
    orangeicons: '#e76126',
    text: '#FFFF',
    lighttext: '#ffff',
    icons: '#FFFF',
    lightgray: '#C8C8C8',
    error: '#c53030',
    purple: '#445495',
    green: '#44956A',
    greenopacity: 'rgba(69, 150, 107, 0.5)',
    backgroundcard: '#353535',
    backgroundmenu: '#cccc',
    whiteopacity: 'rgba(0, 0, 0, 0.5)',
    lightgreen: '#353535',
    shimmerOne: '#808080',
    shimmerTwo: '#BEBEBE',
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
