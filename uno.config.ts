import { defineConfig, definePreset, presetUno } from 'unocss'

const SANS = 'ui-sans-serif, system-ui, sans-serif'
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace'

const presetCore = definePreset({
  name: 'preset-core',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      sans: SANS,
      mono: MONO,
    },
    fontSize: {
      display: ['64px', { 'line-height': '72px', 'font-family': SANS }],
      h1: ['200px', { 'line-height': '204px', 'font-family': SANS }],
      h2: ['150px', { 'line-height': '154px', 'font-family': SANS }],
      h3: ['120px', { 'line-height': '126px', 'font-family': SANS }],
      h4: ['72px', { 'line-height': '74px', 'font-family': SANS }],
      h5: ['46px', { 'line-height': '48.4px', 'font-family': SANS }],
      sh1: ['32px', { 'line-height': '36.4px', 'font-family': SANS }],
      sh2: ['22px', { 'line-height': '26px', 'font-family': SANS, 'letter-spacing': '0.04em' }],
      'body-large': ['18px', { 'line-height': '25.2px', 'font-family': SANS }],
      'body-small': ['14px', { 'line-height': '19px', 'font-family': SANS }],
      eyebrow: ['12px', { 'line-height': '17px', 'font-family': MONO }],
      'body-links': ['16px', { 'line-height': '19px', 'font-family': SANS }],
      'links-mono': ['12px', { 'line-height': '17px', 'font-family': MONO }],
      'h1-sm': ['72px', { 'line-height': '77px', 'font-family': SANS }],
      'h2-sm': ['65px', { 'line-height': '70px', 'font-family': SANS }],
      'h3-sm': ['56px', { 'line-height': '61px', 'font-family': SANS }],
      'h4-sm': ['42px', { 'line-height': '48.2px', 'font-family': SANS }],
      'h5-sm': ['30px', { 'line-height': '35.4px', 'font-family': SANS }],
      'sh1-sm': ['24px', { 'line-height': '30.4px', 'font-family': SANS }],
      'sh2-sm': ['18px', { 'line-height': '24px', 'font-family': SANS }],
      'links-large-sm': ['18px', { 'line-height': '18px', 'font-family': SANS }],
      'body-large-sm': ['16px', { 'line-height': '23.2px', 'font-family': SANS }],
      'body-small-sm': ['14px', { 'line-height': '19px', 'font-family': SANS }],
    },
    zIndex: {
      background: '-10',
      base: '0',
      content: '10',
      header: '20',
      dialog: '30',
    },
    colors: {
      white: '#FFFFFF',
      grey: {
        light: '#F4F4F4',
        medium: '#D9D9D9',
        dark: '#888A8B',
      },
      black: '#000000',
    },
  },
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'flex-vertical-center': 'flex flex-col justify-center items-center',
  },
})

export default defineConfig({
  presets: [
    presetUno(),
    presetCore,
  ],
})
