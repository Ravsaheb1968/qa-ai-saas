import { Page } from "@playwright/test";

export class AccountActivityPage {
  constructor(private readonly page: Page) {}

  readonly moduleRoot = this.page.getByRole("main");

  async goto(): Promise<void> {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }

  async verifyDisplayOfAccountDetailsAndTransactionHistory(): Promise<void> {
    // Scenario: Verify display of account details and transaction history
    await this.page.getByRole("main").click();
  }

  async verifyFilteringTransactionsByCreditType(): Promise<void> {
    // Scenario: Verify filtering transactions by 'Credit' type
    await this.page.getByRole("main").click();
  }

  async verifyFilteringTransactionsByDebitType(): Promise<void> {
    // Scenario: Verify filtering transactions by 'Debit' type
    await this.page.getByRole("main").click();
  }

  async verifyFilteringTransactionsByDateRange(): Promise<void> {
    // Scenario: Verify filtering transactions by date range
    await this.page.getByRole("main").click();
  }

  async verifyNavigationToTransactionDetailPage(): Promise<void> {
    // Scenario: Verify navigation to transaction detail page
    await this.page.getByRole("main").click();
  }

  async verifyMessageForAnAccountWithNoTransactions(): Promise<void> {
    // Scenario: Verify message for an account with no transactions
    await this.page.getByRole("main").click();
  }
}
