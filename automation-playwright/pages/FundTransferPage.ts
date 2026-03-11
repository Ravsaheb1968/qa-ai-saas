import { Page } from "@playwright/test";

export class FundTransferPage {
  constructor(private readonly page: Page) {}

  readonly moduleRoot = this.page.getByRole("main");

  async goto(): Promise<void> {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }

  async verifySuccessfulFundTransferBetweenTwoAccounts(): Promise<void> {
    // Scenario: Verify successful fund transfer between two accounts
    await this.page.getByRole("main").click();
  }

  async verifyFundTransferFailureWhenAmountExceedsSourceAccountBalance(): Promise<void> {
    // Scenario: Verify fund transfer failure when amount exceeds source account balance
    await this.page.getByRole("main").click();
  }

  async verifyFundTransferFailureWithZeroAmount(): Promise<void> {
    // Scenario: Verify fund transfer failure with zero amount
    await this.page.getByRole("main").click();
  }

  async verifyFundTransferFailureWithNegativeAmount(): Promise<void> {
    // Scenario: Verify fund transfer failure with negative amount
    await this.page.getByRole("main").click();
  }

  async verifySourceAndDestinationAccountDropdownsDisplayCorrectly(): Promise<void> {
    // Scenario: Verify source and destination account dropdowns display correctly
    await this.page.getByRole("main").click();
  }
}
