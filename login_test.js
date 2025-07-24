const { Builder, By } = require('selenium-webdriver');
const path = require('path');

(async function testLoginForm() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    const filePath = `file://${path.join(__dirname, 'login.html')}`;
    await driver.get(filePath);

    // Fill username and password
    await driver.findElement(By.id("username")).sendKeys("admin");
    await driver.findElement(By.id("password")).sendKeys("1234");

    // Click the login button
    await driver.findElement(By.css("button")).click();

    // Wait for result
    await driver.sleep(1000);

    // Get and print result message
    const message = await driver.findElement(By.id("message")).getText();
    console.log("Login Message:", message);

  } catch (err) {
    console.error("Error:", err);
  }

  // Keep browser open to verify manually
  await driver.sleep(300000); // 5 minutes
})();
