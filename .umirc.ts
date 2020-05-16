import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        { path: '/json-view', component: '@/pages/jsonView' },
        { path: '/encry-decry', component: '@/pages/encryDecry' },
        { path: '/base64-img', component: '@/pages/base64Img' },
      ],
    },
  ],
});
