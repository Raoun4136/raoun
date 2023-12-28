import { FlattenObjectKeys } from '../../utils';

export const primary = {
  10: '#ecebff',
  20: '#c4c0ff',
  30: '#a8a1ff',
  40: '#8076ff',
  50: '#685cff',
  60: '#4233ff',
  70: '#3c2ee8',
  80: '#2f24b5',
  90: '#241c8c',
  100: '#1c156b',
} as const;

export const red = {
  10: '#fcecea',
  20: '#f7c3bd',
  30: '#f3a69d',
  40: '#ee7e70',
  50: '#ea6555',
  60: '#e53e2a',
  70: '#d03826',
  80: '#a32c1e',
  90: '#7e2217',
  100: '#601a12',
} as const;

export const orange = {
  10: '#fef4e6',
  20: '#fbddb0',
  30: '#f9cc8a',
  40: '#f6b554',
  50: '#f4a733',
  60: '#f19100',
  70: '#db8400',
  80: '#ab6700',
  90: '#855000',
  100: '#653d00',
} as const;

export const yellow = {
  10: '#fefce6',
  20: '#fcf5b0',
  30: '#fbf18a',
  40: '#f9ea54',
  50: '#f8e633',
  60: '#f6e000',
  70: '#e0cc00',
  80: '#af9f00',
  90: '#877b00',
  100: '#675e00',
} as const;

export const lightGreen = {
  10: '#f8fce6',
  20: '#e8f5b1',
  30: '#ddf08b',
  40: '#ceea55',
  50: '#c5e535',
  60: '#b6df02',
  70: '#a6cb02',
  80: '#819e01',
  90: '#647b01',
  100: '#4c5e01',
} as const;

export const green = {
  10: '#edf9ea',
  20: '#c6edbd',
  30: '#aae49d',
  40: '#83d870',
  50: '#6bd154',
  60: '#46c529',
  70: '#40b325',
  80: '#328c1d',
  90: '#276c17',
  100: '#1d5311',
};

export const deepGreen = {
  10: '#eaf5f0',
  20: '#bde0cf',
  30: '#9dd1b8',
  40: '#70bc98',
  50: '#55af84',
  60: '#2a9b65',
  70: '#268d5c',
  80: '#1e6e48',
  90: '#175538',
  100: '#12412a',
} as const;

export const teal = {
  10: '#ebf9f8',
  20: '#c2ebe9',
  30: '#a4e1de',
  40: '#7bd3cf',
  50: '#61cbc5',
  60: '#3abeb7',
  70: '#35ada7',
  80: '#298782',
  90: '#206965',
  100: '#18504d',
} as const;

export const lightBlue = {
  10: '#eefafd',
  20: '#caeff9',
  30: '#b0e7f7',
  40: '#8cdcf3',
  50: '#76d5f1',
  60: '#54cbed',
  70: '#4cb9d8',
  80: '#3c90a8',
  90: '#2e7082',
  100: '#235564',
} as const;

export const blue = {
  10: '#edf5fe',
  20: '#c8e0fd',
  30: '#aed1fc',
  40: '#89bbfb',
  50: '#72aefa',
  60: '#4f9af9',
  70: '#488ce3',
  80: '#386db1',
  90: '#2b5589',
  100: '#214169',
} as const;

export const indigo = {
  10: '#f1f1ff',
  20: '#d5d4fd',
  30: '#c0bffd',
  40: '#a4a2fc',
  50: '#9290fb',
  60: '#7774fa',
  70: '#6c6ae4',
  80: '#5452b2',
  90: '#41408a',
  100: '#323169',
} as const;

export const purple = {
  10: '#f4ebfd',
  20: '#ddc2fa',
  30: '#cca5f8',
  40: '#b57cf4',
  50: '#a762f2',
  60: '#913bef',
  70: '#8436d9',
  80: '#672aaa',
  90: '#502083',
  100: '#3d1964',
} as const;

export const magenta = {
  10: '#fceefd',
  20: '#f5ccf8',
  30: '#f0b3f5',
  40: '#e990f1',
  50: '#e57aee',
  60: '#de59ea',
  70: '#ca51d5',
  80: '#9e3fa6',
  90: '#7a3181',
  100: '#5d2562',
} as const;

export const pink = {
  10: '#fce6f0',
  20: '#f6b2d1',
  30: '#f28dba',
  40: '#ec599b',
  50: '#e93988',
  60: '#e3076a',
  70: '#cf0660',
  80: '#a1054b',
  90: '#7d043a',
  100: '#5f032d',
} as const;

export const neutralColor = {
  white: '#ffffff',
  black: '#000000',
  gray: {
    5: '#fafafa',
    10: '#f6f6f6',
    15: '#f0f0f0',
    20: '#ebebeb',
    30: '#e0e0e0',
    40: '#d2d2d2',
    50: '#bdbdbd',
    60: '#707070',
    70: '#616161',
    80: '#424242',
    90: '#242424',
  },
} as const;

export const colors = {
  primary,
  red,
  orange,
  yellow,
  lightGreen,
  green,
  deepGreen,
  teal,
  lightBlue,
  blue,
  indigo,
  purple,
  magenta,
  pink,
  ...neutralColor,
};

export type Colors = FlattenObjectKeys<typeof colors>;
