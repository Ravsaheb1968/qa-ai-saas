import { test } from "@playwright/test";
import { LoanRequestPage } from "../pages/LoanRequestPage";

test("Verify successful loan request (approved scenario)", async ({ page }) => {
  const verifySuccessfulLoanRequestApprovedScenarioPage = new LoanRequestPage(page);
  await verifySuccessfulLoanRequestApprovedScenarioPage.goto();
  await verifySuccessfulLoanRequestApprovedScenarioPage.verifySuccessfulLoanRequestApprovedScenario();
});

test("Verify loan request (denied scenario)", async ({ page }) => {
  const verifyLoanRequestDeniedScenarioPage = new LoanRequestPage(page);
  await verifyLoanRequestDeniedScenarioPage.goto();
  await verifyLoanRequestDeniedScenarioPage.verifyLoanRequestDeniedScenario();
});

test("Verify loan request failure with empty mandatory fields", async ({ page }) => {
  const verifyLoanRequestFailureWithEmptyMandatoryFieldsPage = new LoanRequestPage(page);
  await verifyLoanRequestFailureWithEmptyMandatoryFieldsPage.goto();
  await verifyLoanRequestFailureWithEmptyMandatoryFieldsPage.verifyLoanRequestFailureWithEmptyMandatoryFields();
});

test("Verify loan request failure with zero loan amount", async ({ page }) => {
  const verifyLoanRequestFailureWithZeroLoanAmountPage = new LoanRequestPage(page);
  await verifyLoanRequestFailureWithZeroLoanAmountPage.goto();
  await verifyLoanRequestFailureWithZeroLoanAmountPage.verifyLoanRequestFailureWithZeroLoanAmount();
});

test("Verify loan request failure with negative loan amount", async ({ page }) => {
  const verifyLoanRequestFailureWithNegativeLoanAmountPage = new LoanRequestPage(page);
  await verifyLoanRequestFailureWithNegativeLoanAmountPage.goto();
  await verifyLoanRequestFailureWithNegativeLoanAmountPage.verifyLoanRequestFailureWithNegativeLoanAmount();
});
