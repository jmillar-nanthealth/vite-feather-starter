import { Given, When, Then } from "@wdio/cucumber-framework";

import HelloWorldPage from "../../helloworld.page";

const pages = {
  helloworld: HelloWorldPage,
};

// ---------------------------------------------------------------
Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I click the buttons$/, async () => {
  await HelloWorldPage.clickNormal();
  await HelloWorldPage.clickFeather();
});

Then(/^I should see the counters incremented$/, async () => {
  const result1 = await HelloWorldPage.result1.getText();
  const result2 = await HelloWorldPage.result2.getText();
  expect(result1).toBe("1");
  expect(result2).toBe("1");
});
