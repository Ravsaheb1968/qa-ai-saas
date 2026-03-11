import { test as base } from "@playwright/test";
import { testData } from "../utils/testData";

export const test = base.extend({
  baseUrl: [testData.baseUrl, { option: true }],
});
