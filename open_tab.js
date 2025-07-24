const { Builder } = require('selenium-webdriver');

(async function openChromeTab() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Open a new tab (about:blank is default)
        await driver.get('about:blank');

        // Now, keep the tab open (sleep for a long time)
        await driver.sleep(600000); // 10 minutes

    } catch (err) {
        console.error("Error:", err);
    }
    // No driver.quit() — browser stays open
})();
