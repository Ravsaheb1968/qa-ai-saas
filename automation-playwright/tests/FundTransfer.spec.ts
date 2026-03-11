import { test } from "@playwright/test";
import { FundTransferPage } from "../pages/FundTransferPage";

test("Verify successful fund transfer between two accounts", async ({ page }) => {
  const verifySuccessfulFundTransferBetweenTwoAccountsPage = new FundTransferPage(page);
  await verifySuccessfulFundTransferBetweenTwoAccountsPage.goto();
  await verifySuccessfulFundTransferBetweenTwoAccountsPage.verifySuccessfulFundTransferBetweenTwoAccounts();
});

test("Verify fund transfer failure when amount exceeds source account balance", async ({ page }) => {
  const verifyFundTransferFailureWhenAmountExceedsSourceAccountBalancePage = new FundTransferPage(page);
  await verifyFundTransferFailureWhenAmountExceedsSourceAccountBalancePage.goto();
  await verifyFundTransferFailureWhenAmountExceedsSourceAccountBalancePage.verifyFundTransferFailureWhenAmountExceedsSourceAccountBalance();
});

test("Verify fund transfer failure with zero amount", async ({ page }) => {
  const verifyFundTransferFailureWithZeroAmountPage = new FundTransferPage(page);
  await verifyFundTransferFailureWithZeroAmountPage.goto();
  await verifyFundTransferFailureWithZeroAmountPage.verifyFundTransferFailureWithZeroAmount();
});

test("Verify fund transfer failure with negative amount", async ({ page }) => {
  const verifyFundTransferFailureWithNegativeAmountPage = new FundTransferPage(page);
  await verifyFundTransferFailureWithNegativeAmountPage.goto();
  await verifyFundTransferFailureWithNegativeAmountPage.verifyFundTransferFailureWithNegativeAmount();
});

test("Verify source and destination account dropdowns display correctly", async ({ page }) => {
  const verifySourceAndDestinationAccountDropdownsDisplayCorrectlyPage = new FundTransferPage(page);
  await verifySourceAndDestinationAccountDropdownsDisplayCorrectlyPage.goto();
  await verifySourceAndDestinationAccountDropdownsDisplayCorrectlyPage.verifySourceAndDestinationAccountDropdownsDisplayCorrectly();
});
