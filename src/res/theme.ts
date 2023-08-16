import {DefaultTheme} from '@react-navigation/native';

const theme = {
  light: {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      // Default background color, prevents flickering

      background: '#EAF0F0',
      brandPrimary: '#015bfe',
    },
  },
  dark: {
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      // Default background color, prevents flickering

      background: '#EAF0F0',
      brandPrimary: '#015bfe',
    },
  },
};

export type TTheme = typeof theme.light & typeof theme.dark;
export type TThemeColors = typeof theme.light.colors & typeof theme.dark.colors;

export default theme;
