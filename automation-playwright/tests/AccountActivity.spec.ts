import { test } from "@playwright/test";
import { AccountActivityPage } from "../pages/AccountActivityPage";

test("Verify display of account details and transaction history", async ({ page }) => {
  const verifyDisplayOfAccountDetailsAndTransactionHistoryPage = new AccountActivityPage(page);
  await verifyDisplayOfAccountDetailsAndTransactionHistoryPage.goto();
  await verifyDisplayOfAccountDetailsAndTransactionHistoryPage.verifyDisplayOfAccountDetailsAndTransactionHistory();
});

test("Verify filtering transactions by 'Credit' type", async ({ page }) => {
  const verifyFilteringTransactionsByCreditTypePage = new AccountActivityPage(page);
  await verifyFilteringTransactionsByCreditTypePage.goto();
  await verifyFilteringTransactionsByCreditTypePage.verifyFilteringTransactionsByCreditType();
});

test("Verify filtering transactions by 'Debit' type", async ({ page }) => {
  const verifyFilteringTransactionsByDebitTypePage = new AccountActivityPage(page);
  await verifyFilteringTransactionsByDebitTypePage.goto();
  await verifyFilteringTransactionsByDebitTypePage.verifyFilteringTransactionsByDebitType();
});

test("Verify filtering transactions by date range", async ({ page }) => {
  const verifyFilteringTransactionsByDateRangePage = new AccountActivityPage(page);
  await verifyFilteringTransactionsByDateRangePage.goto();
  await verifyFilteringTransactionsByDateRangePage.verifyFilteringTransactionsByDateRange();
});

test("Verify navigation to transaction detail page", async ({ page }) => {
  const verifyNavigationToTransactionDetailPagePage = new AccountActivityPage(page);
  await verifyNavigationToTransactionDetailPagePage.goto();
  await verifyNavigationToTransactionDetailPagePage.verifyNavigationToTransactionDetailPage();
});

test("Verify message for an account with no transactions", async ({ page }) => {
  const verifyMessageForAnAccountWithNoTransactionsPage = new AccountActivityPage(page);
  await verifyMessageForAnAccountWithNoTransactionsPage.goto();
  await verifyMessageForAnAccountWithNoTransactionsPage.verifyMessageForAnAccountWithNoTransactions();
});
