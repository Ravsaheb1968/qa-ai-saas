import { test } from "@playwright/test";
import { OpenNewAccountPage } from "../pages/OpenNewAccountPage";

test("Verify successful creation of a new Checking account", async ({ page }) => {
  const verifySuccessfulCreationOfANewCheckingAccountPage = new OpenNewAccountPage(page);
  await verifySuccessfulCreationOfANewCheckingAccountPage.goto();
  await verifySuccessfulCreationOfANewCheckingAccountPage.verifySuccessfulCreationOfANewCheckingAccount();
});

test("Verify successful creation of a new Savings account", async ({ page }) => {
  const verifySuccessfulCreationOfANewSavingsAccountPage = new OpenNewAccountPage(page);
  await verifySuccessfulCreationOfANewSavingsAccountPage.goto();
  await verifySuccessfulCreationOfANewSavingsAccountPage.verifySuccessfulCreationOfANewSavingsAccount();
});

test("Verify new account number is displayed on success", async ({ page }) => {
  const verifyNewAccountNumberIsDisplayedOnSuccessPage = new OpenNewAccountPage(page);
  await verifyNewAccountNumberIsDisplayedOnSuccessPage.goto();
  await verifyNewAccountNumberIsDisplayedOnSuccessPage.verifyNewAccountNumberIsDisplayedOnSuccess();
});

test("Verify new account appears in Account Overview immediately", async ({ page }) => {
  const verifyNewAccountAppearsInAccountOverviewImmediatelyPage = new OpenNewAccountPage(page);
  await verifyNewAccountAppearsInAccountOverviewImmediatelyPage.goto();
  await verifyNewAccountAppearsInAccountOverviewImmediatelyPage.verifyNewAccountAppearsInAccountOverviewImmediately();
});
