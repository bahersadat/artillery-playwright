const { PlaywrightTestConfig } = require ('@playwright/test');

const config = {

    timeout:60000,
    retries:0,
    testDir: 'tests/parasoft-bank',
    use:{
        headless:true,
        viewport: {width:1280, height:720},
        actionTimeout:15000,
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'off',
    },
    projects: [
        {
            name:'chromium',
            use: {browserName:'chromium'}
        },
        {
            name: 'firefox',
            use: {browserName: 'firefox'}
        },
        {
            name: 'webkit',
            use: {browserName: 'webkit'}
        },
    ],

}
// export default config;
module.exports = { config };