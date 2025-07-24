const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

async function loginTest() {
  // Launch Chrome browser
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Step 1: Open the login page
    await driver.get("http://results.mvsrec.edu.in/SBLogin.aspx");

    // Step 2: Enter credentials
    await driver.findElement(By.id("txtUserName")).sendKeys("245121737129");
    await driver.findElement(By.id("txtPassword")).sendKeys("245121737129");

    // Step 3: Submit form
    await driver.findElement(By.id("btnSubmit")).click();

    // Step 4: Wait until hallticket label is visible
    await driver.wait(until.elementLocated(By.id("lblHTNo")), 5000);
    const user = await driver.findElement(By.id("lblHTNo")).getText();

    // Step 5: Check login success
    assert.strictEqual(user, "245121737129");
    console.log("✅ Login success");

    // Step 6: Navigate to Marks Page
    await driver.findElement(By.id("Stud_cpModules_imgbtnExams")).click();
    await driver.findElement(By.id("cpBody_lnkSem")).click();

    // Step 7: Verify URL
    const ur = await driver.getCurrentUrl();
    assert.strictEqual(
      ur,
      "http://results.mvsrec.edu.in/STUDENTLOGIN/Frm_SemwiseStudMarks.aspx"
    );

    console.log("✅ Display marks success");

  } catch (err) {
    console.error("❌ Test failed:", err);
  } finally {
    // Step 8: Close browser
    await driver.quit();
  }
}

// Run the test
loginTest();
