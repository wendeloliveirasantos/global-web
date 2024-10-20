import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dobyseg.app',
  appName: 'dobyseg',
  webDir: 'out',
  server: {
    androidScheme: 'http'
  }
};

export default config;
