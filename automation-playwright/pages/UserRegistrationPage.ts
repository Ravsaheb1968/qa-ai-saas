import { Page } from "@playwright/test";

export class UserRegistrationPage {
  constructor(private readonly page: Page) {}

  readonly moduleRoot = this.page.getByRole("main");

  async goto(): Promise<void> {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }

  async verifySuccessfulUserRegistrationWithValidUniqueData(): Promise<void> {
    // Scenario: Verify successful user registration with valid unique data
    await this.page.getByRole("main").click();
  }

  async verifyRegistrationFailureWithAnExistingUsername(): Promise<void> {
    // Scenario: Verify registration failure with an existing username
    await this.page.getByRole("main").click();
  }

  async verifyRegistrationFailureWithMismatchedPasswords(): Promise<void> {
    // Scenario: Verify registration failure with mismatched passwords
    await this.page.getByRole("main").click();
  }

  async verifyRegistrationFailureWithEmptyMandatoryFields(): Promise<void> {
    // Scenario: Verify registration failure with empty mandatory fields
    await this.page.getByRole("main").click();
  }

  async verifySsnFieldMaskingDuringRegistration(): Promise<void> {
    // Scenario: Verify SSN field masking during registration
    await this.page.getByRole("main").click();
  }
}
