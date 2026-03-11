import { test } from "@playwright/test";
import { BillPaymentPage } from "../pages/BillPaymentPage";

test("Verify successful bill payment with valid data", async ({ page }) => {
  const verifySuccessfulBillPaymentWithValidDataPage = new BillPaymentPage(page);
  await verifySuccessfulBillPaymentWithValidDataPage.goto();
  await verifySuccessfulBillPaymentWithValidDataPage.verifySuccessfulBillPaymentWithValidData();
});

test("Verify bill payment failure with mismatched payee account numbers", async ({ page }) => {
  const verifyBillPaymentFailureWithMismatchedPayeeAccountNumbersPage = new BillPaymentPage(page);
  await verifyBillPaymentFailureWithMismatchedPayeeAccountNumbersPage.goto();
  await verifyBillPaymentFailureWithMismatchedPayeeAccountNumbersPage.verifyBillPaymentFailureWithMismatchedPayeeAccountNumbers();
});

test("Verify bill payment failure when amount exceeds source account balance", async ({ page }) => {
  const verifyBillPaymentFailureWhenAmountExceedsSourceAccountBalancePage = new BillPaymentPage(page);
  await verifyBillPaymentFailureWhenAmountExceedsSourceAccountBalancePage.goto();
  await verifyBillPaymentFailureWhenAmountExceedsSourceAccountBalancePage.verifyBillPaymentFailureWhenAmountExceedsSourceAccountBalance();
});

test("Verify bill payment failure with empty mandatory fields", async ({ page }) => {
  const verifyBillPaymentFailureWithEmptyMandatoryFieldsPage = new BillPaymentPage(page);
  await verifyBillPaymentFailureWithEmptyMandatoryFieldsPage.goto();
  await verifyBillPaymentFailureWithEmptyMandatoryFieldsPage.verifyBillPaymentFailureWithEmptyMandatoryFields();
});

test("Verify source account dropdown displays correctly", async ({ page }) => {
  const verifySourceAccountDropdownDisplaysCorrectlyPage = new BillPaymentPage(page);
  await verifySourceAccountDropdownDisplaysCorrectlyPage.goto();
  await verifySourceAccountDropdownDisplaysCorrectlyPage.verifySourceAccountDropdownDisplaysCorrectly();
});
