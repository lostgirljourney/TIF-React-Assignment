import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  xsm: '0',
  sm: '30em',
  md: '48em',
  lg: '62em',
  lgBy2: '71em',
  xl: '80em',
  '2xl': '96em'
};

const colors = {
  brand: {
    bodyPrimary: '#666870',
    bodySecondary: '#444957',
    bgPrimary: '#F0F1F7',
    primary: '#0E2368',
    red: '#E23744'
  }
};

const components = {
  Button: {
    sizes: {
      xsm: {
        h: '16px'
      }
    }
  }
};

export const theme = extendTheme({ breakpoints, colors, components });
