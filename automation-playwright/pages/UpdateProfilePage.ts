import { Page } from "@playwright/test";

export class UpdateProfilePage {
  constructor(private readonly page: Page) {}

  readonly moduleRoot = this.page.getByRole("main");

  async goto(): Promise<void> {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }

  async verifySuccessfulUpdateOfAllEditableProfileFields(): Promise<void> {
    // Scenario: Verify successful update of all editable profile fields
    await this.page.getByRole("main").click();
  }

  async verifyPrePopulationOfExistingCustomerData(): Promise<void> {
    // Scenario: Verify pre-population of existing customer data
    await this.page.getByRole("main").click();
  }

  async verifyUpdateFailureWithEmptyMandatoryFields(): Promise<void> {
    // Scenario: Verify update failure with empty mandatory fields
    await this.page.getByRole("main").click();
  }

  async verifyUpdateOfASingleProfileField(): Promise<void> {
    // Scenario: Verify update of a single profile field
    await this.page.getByRole("main").click();
  }
}
