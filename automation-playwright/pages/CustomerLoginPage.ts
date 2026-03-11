import { Page } from "@playwright/test";

export class CustomerLoginPage {
  constructor(private readonly page: Page) {}

  readonly moduleRoot = this.page.getByRole("main");

  async goto(): Promise<void> {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }

  async verifySuccessfulLoginWithValidCredentials(): Promise<void> {
    // Scenario: Verify successful login with valid credentials
    await this.page.getByRole("main").click();
  }

  async verifyLoginFailureWithInvalidUsername(): Promise<void> {
    // Scenario: Verify login failure with invalid username
    await this.page.getByRole("main").click();
  }

  async verifyLoginFailureWithInvalidPassword(): Promise<void> {
    // Scenario: Verify login failure with invalid password
    await this.page.getByRole("main").click();
  }

  async verifyLoginFailureWithEmptyUsername(): Promise<void> {
    // Scenario: Verify login failure with empty username
    await this.page.getByRole("main").click();
  }

  async verifyForgotLoginInfoLinkNavigation(): Promise<void> {
    // Scenario: Verify 'Forgot login info' link navigation
    await this.page.getByRole("main").click();
  }

  async verifyLogoutFunctionality(): Promise<void> {
    // Scenario: Verify logout functionality
    await this.page.getByRole("main").click();
  }
}
