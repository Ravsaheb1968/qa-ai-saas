import { test } from "@playwright/test";
import { AccountOverviewPage } from "../pages/AccountOverviewPage";

test("Verify display of all accounts, types, and balances", async ({ page }) => {
  const verifyDisplayOfAllAccountsTypesAndBalancesPage = new AccountOverviewPage(page);
  await verifyDisplayOfAllAccountsTypesAndBalancesPage.goto();
  await verifyDisplayOfAllAccountsTypesAndBalancesPage.verifyDisplayOfAllAccountsTypesAndBalances();
});

test("Verify total balance calculation", async ({ page }) => {
  const verifyTotalBalanceCalculationPage = new AccountOverviewPage(page);
  await verifyTotalBalanceCalculationPage.goto();
  await verifyTotalBalanceCalculationPage.verifyTotalBalanceCalculation();
});

test("Verify navigation to Account Activity page upon clicking account number", async ({ page }) => {
  const verifyNavigationToAccountActivityPageUponClickingAccountNumberPage = new AccountOverviewPage(page);
  await verifyNavigationToAccountActivityPageUponClickingAccountNumberPage.goto();
  await verifyNavigationToAccountActivityPageUponClickingAccountNumberPage.verifyNavigationToAccountActivityPageUponClickingAccountNumber();
});

test("Verify unauthenticated access to Account Overview page", async ({ page }) => {
  const verifyUnauthenticatedAccessToAccountOverviewPagePage = new AccountOverviewPage(page);
  await verifyUnauthenticatedAccessToAccountOverviewPagePage.goto();
  await verifyUnauthenticatedAccessToAccountOverviewPagePage.verifyUnauthenticatedAccessToAccountOverviewPage();
});
