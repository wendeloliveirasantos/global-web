import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dobyseg.app',
  appName: 'dobyseg',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
