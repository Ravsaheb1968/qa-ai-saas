import { test } from "@playwright/test";
import { UserRegistrationPage } from "../pages/UserRegistrationPage";

test("Verify successful user registration with valid unique data", async ({ page }) => {
  const verifySuccessfulUserRegistrationWithValidUniqueDataPage = new UserRegistrationPage(page);
  await verifySuccessfulUserRegistrationWithValidUniqueDataPage.goto();
  await verifySuccessfulUserRegistrationWithValidUniqueDataPage.verifySuccessfulUserRegistrationWithValidUniqueData();
});

test("Verify registration failure with an existing username", async ({ page }) => {
  const verifyRegistrationFailureWithAnExistingUsernamePage = new UserRegistrationPage(page);
  await verifyRegistrationFailureWithAnExistingUsernamePage.goto();
  await verifyRegistrationFailureWithAnExistingUsernamePage.verifyRegistrationFailureWithAnExistingUsername();
});

test("Verify registration failure with mismatched passwords", async ({ page }) => {
  const verifyRegistrationFailureWithMismatchedPasswordsPage = new UserRegistrationPage(page);
  await verifyRegistrationFailureWithMismatchedPasswordsPage.goto();
  await verifyRegistrationFailureWithMismatchedPasswordsPage.verifyRegistrationFailureWithMismatchedPasswords();
});

test("Verify registration failure with empty mandatory fields", async ({ page }) => {
  const verifyRegistrationFailureWithEmptyMandatoryFieldsPage = new UserRegistrationPage(page);
  await verifyRegistrationFailureWithEmptyMandatoryFieldsPage.goto();
  await verifyRegistrationFailureWithEmptyMandatoryFieldsPage.verifyRegistrationFailureWithEmptyMandatoryFields();
});

test("Verify SSN field masking during registration", async ({ page }) => {
  const verifySsnFieldMaskingDuringRegistrationPage = new UserRegistrationPage(page);
  await verifySsnFieldMaskingDuringRegistrationPage.goto();
  await verifySsnFieldMaskingDuringRegistrationPage.verifySsnFieldMaskingDuringRegistration();
});
