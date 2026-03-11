import { Page } from "@playwright/test";

export class AccountOverviewPage {
  constructor(private readonly page: Page) {}

  readonly moduleRoot = this.page.getByRole("main");

  async goto(): Promise<void> {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }

  async verifyDisplayOfAllAccountsTypesAndBalances(): Promise<void> {
    // Scenario: Verify display of all accounts, types, and balances
    await this.page.getByRole("main").click();
  }

  async verifyTotalBalanceCalculation(): Promise<void> {
    // Scenario: Verify total balance calculation
    await this.page.getByRole("main").click();
  }

  async verifyNavigationToAccountActivityPageUponClickingAccountNumber(): Promise<void> {
    // Scenario: Verify navigation to Account Activity page upon clicking account number
    await this.page.getByRole("main").click();
  }

  async verifyUnauthenticatedAccessToAccountOverviewPage(): Promise<void> {
    // Scenario: Verify unauthenticated access to Account Overview page
    await this.page.getByRole("main").click();
  }
}
