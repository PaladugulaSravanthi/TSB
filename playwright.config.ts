// @ts-check
//import  devices  from "@playwright/test";

import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: './tests',
  workers: 1,
  //testMatch: ["tests/sample.spec.ts"],
  timeout: 300000,
  reporter: "html",
  use: {
    headless: true,
  },
  globalSetup: "utils/globalSetup.ts"
};

export default config;

// const config = {
//   testDir: './tests',
//   workers: 6,
//   /* Maximum time one test can run for. */
//   timeout: 80 * 1000,
//   expect: {
//     timeout: 8000
//   },
//   //globalSetup:"utils/globalSetup.ts",
//   reporter: 'html',
//   use: {
//     //baseURL: process.env.URL,
//       // baseURL: 'https://tsb-m-web-elb.dev.hdinternal.co.uk/',
//     browserName : 'chromium',
//     headless : false,
//   },

  // projects : [
  //   {
  //     name : 'safari',
  //     use: {
  //       browserName : 'webkit',
  //       headless : true,
  //       screenshot : 'off',
  //       trace : 'off',//off,on 
  //       video: 'retain-on-failure',
  //        //...devices['iPhone 11'],    
  //     }
  //   },
  //   {
  //     name : 'chrome',
  //     use: {
  //       browserName : 'chromium',
  //       headless : false,
  //       screenshot : 'off',
  //      // video: 'retain-on-failure',
  //       //ignoreHttpsErrors:true,
  //       trace : 'off',//off,on
  //     }
  //   }
  // ]

      
//module.exports = config;
