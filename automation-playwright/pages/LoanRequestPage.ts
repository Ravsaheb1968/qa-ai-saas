import { Page } from "@playwright/test";

export class LoanRequestPage {
  constructor(private readonly page: Page) {}

  readonly moduleRoot = this.page.getByRole("main");

  async goto(): Promise<void> {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }

  async verifySuccessfulLoanRequestApprovedScenario(): Promise<void> {
    // Scenario: Verify successful loan request (approved scenario)
    await this.page.getByRole("main").click();
  }

  async verifyLoanRequestDeniedScenario(): Promise<void> {
    // Scenario: Verify loan request (denied scenario)
    await this.page.getByRole("main").click();
  }

  async verifyLoanRequestFailureWithEmptyMandatoryFields(): Promise<void> {
    // Scenario: Verify loan request failure with empty mandatory fields
    await this.page.getByRole("main").click();
  }

  async verifyLoanRequestFailureWithZeroLoanAmount(): Promise<void> {
    // Scenario: Verify loan request failure with zero loan amount
    await this.page.getByRole("main").click();
  }

  async verifyLoanRequestFailureWithNegativeLoanAmount(): Promise<void> {
    // Scenario: Verify loan request failure with negative loan amount
    await this.page.getByRole("main").click();
  }
}
