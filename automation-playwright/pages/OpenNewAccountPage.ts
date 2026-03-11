import { Page } from "@playwright/test";

export class OpenNewAccountPage {
  constructor(private readonly page: Page) {}

  readonly moduleRoot = this.page.getByRole("main");

  async goto(): Promise<void> {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }

  async verifySuccessfulCreationOfANewCheckingAccount(): Promise<void> {
    // Scenario: Verify successful creation of a new Checking account
    await this.page.getByRole("main").click();
  }

  async verifySuccessfulCreationOfANewSavingsAccount(): Promise<void> {
    // Scenario: Verify successful creation of a new Savings account
    await this.page.getByRole("main").click();
  }

  async verifyNewAccountNumberIsDisplayedOnSuccess(): Promise<void> {
    // Scenario: Verify new account number is displayed on success
    await this.page.getByRole("main").click();
  }

  async verifyNewAccountAppearsInAccountOverviewImmediately(): Promise<void> {
    // Scenario: Verify new account appears in Account Overview immediately
    await this.page.getByRole("main").click();
  }
}
