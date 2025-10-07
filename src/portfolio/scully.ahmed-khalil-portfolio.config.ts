import { ScullyConfig, setPluginConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'ahmed-khalil-portfolio',
  outDir: './dist/static',
  distFolder: './dist/ahmed-khalil-portfolio',
  routes: {
    '/': {
      type: 'default'
    },
    '/resume': {
      type: 'default'
    }
  },
  defaultPostRenderers: [],
  puppeteerLaunchOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
};
