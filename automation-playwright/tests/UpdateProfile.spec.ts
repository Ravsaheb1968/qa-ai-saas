import { test } from "@playwright/test";
import { UpdateProfilePage } from "../pages/UpdateProfilePage";

test("Verify successful update of all editable profile fields", async ({ page }) => {
  const verifySuccessfulUpdateOfAllEditableProfileFieldsPage = new UpdateProfilePage(page);
  await verifySuccessfulUpdateOfAllEditableProfileFieldsPage.goto();
  await verifySuccessfulUpdateOfAllEditableProfileFieldsPage.verifySuccessfulUpdateOfAllEditableProfileFields();
});

test("Verify pre-population of existing customer data", async ({ page }) => {
  const verifyPrePopulationOfExistingCustomerDataPage = new UpdateProfilePage(page);
  await verifyPrePopulationOfExistingCustomerDataPage.goto();
  await verifyPrePopulationOfExistingCustomerDataPage.verifyPrePopulationOfExistingCustomerData();
});

test("Verify update failure with empty mandatory fields", async ({ page }) => {
  const verifyUpdateFailureWithEmptyMandatoryFieldsPage = new UpdateProfilePage(page);
  await verifyUpdateFailureWithEmptyMandatoryFieldsPage.goto();
  await verifyUpdateFailureWithEmptyMandatoryFieldsPage.verifyUpdateFailureWithEmptyMandatoryFields();
});

test("Verify update of a single profile field", async ({ page }) => {
  const verifyUpdateOfASingleProfileFieldPage = new UpdateProfilePage(page);
  await verifyUpdateOfASingleProfileFieldPage.goto();
  await verifyUpdateOfASingleProfileFieldPage.verifyUpdateOfASingleProfileField();
});
