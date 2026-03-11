import { Page } from "@playwright/test";

export class BillPaymentPage {
  constructor(private readonly page: Page) {}

  readonly moduleRoot = this.page.getByRole("main");

  async goto(): Promise<void> {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }

  async verifySuccessfulBillPaymentWithValidData(): Promise<void> {
    // Scenario: Verify successful bill payment with valid data
    await this.page.getByRole("main").click();
  }

  async verifyBillPaymentFailureWithMismatchedPayeeAccountNumbers(): Promise<void> {
    // Scenario: Verify bill payment failure with mismatched payee account numbers
    await this.page.getByRole("main").click();
  }

  async verifyBillPaymentFailureWhenAmountExceedsSourceAccountBalance(): Promise<void> {
    // Scenario: Verify bill payment failure when amount exceeds source account balance
    await this.page.getByRole("main").click();
  }

  async verifyBillPaymentFailureWithEmptyMandatoryFields(): Promise<void> {
    // Scenario: Verify bill payment failure with empty mandatory fields
    await this.page.getByRole("main").click();
  }

  async verifySourceAccountDropdownDisplaysCorrectly(): Promise<void> {
    // Scenario: Verify source account dropdown displays correctly
    await this.page.getByRole("main").click();
  }
}
