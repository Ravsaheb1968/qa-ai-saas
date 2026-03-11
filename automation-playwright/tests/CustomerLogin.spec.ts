import { test } from "@playwright/test";
import { CustomerLoginPage } from "../pages/CustomerLoginPage";

test("Verify successful login with valid credentials", async ({ page }) => {
  const verifySuccessfulLoginWithValidCredentialsPage = new CustomerLoginPage(page);
  await verifySuccessfulLoginWithValidCredentialsPage.goto();
  await verifySuccessfulLoginWithValidCredentialsPage.verifySuccessfulLoginWithValidCredentials();
});

test("Verify login failure with invalid username", async ({ page }) => {
  const verifyLoginFailureWithInvalidUsernamePage = new CustomerLoginPage(page);
  await verifyLoginFailureWithInvalidUsernamePage.goto();
  await verifyLoginFailureWithInvalidUsernamePage.verifyLoginFailureWithInvalidUsername();
});

test("Verify login failure with invalid password", async ({ page }) => {
  const verifyLoginFailureWithInvalidPasswordPage = new CustomerLoginPage(page);
  await verifyLoginFailureWithInvalidPasswordPage.goto();
  await verifyLoginFailureWithInvalidPasswordPage.verifyLoginFailureWithInvalidPassword();
});

test("Verify login failure with empty username", async ({ page }) => {
  const verifyLoginFailureWithEmptyUsernamePage = new CustomerLoginPage(page);
  await verifyLoginFailureWithEmptyUsernamePage.goto();
  await verifyLoginFailureWithEmptyUsernamePage.verifyLoginFailureWithEmptyUsername();
});

test("Verify 'Forgot login info' link navigation", async ({ page }) => {
  const verifyForgotLoginInfoLinkNavigationPage = new CustomerLoginPage(page);
  await verifyForgotLoginInfoLinkNavigationPage.goto();
  await verifyForgotLoginInfoLinkNavigationPage.verifyForgotLoginInfoLinkNavigation();
});

test("Verify logout functionality", async ({ page }) => {
  const verifyLogoutFunctionalityPage = new CustomerLoginPage(page);
  await verifyLogoutFunctionalityPage.goto();
  await verifyLogoutFunctionalityPage.verifyLogoutFunctionality();
});
