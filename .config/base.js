import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import VuePlugin from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';

const envHotType = process.env.HOT_TYPE;

export const baseConfig = {
  input: 'src/common/index.ts',
  plugins: [
    replace({
      'hot-alias': envHotType === 'pro' ? 'handsontable-pro' : 'handsontable',
    }),
    VuePlugin({
      defaultLang: {
        script: 'ts'
      },
      template: {
        isProduction: true
      }
    }),
    typescript(),
    nodeResolve(),
  ],
  external: [
    (envHotType === 'ce' ? 'handsontable' : 'handsontable-pro'),
    'vue',
    'vue-class-component',
    'handsontable',
    'handsontable-pro'
  ]
};

