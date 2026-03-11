export const environments = {
  staging: {
    baseUrl: "https://parabank.parasoft.com/parabank/index.htm",
    username: "ok652",
    password: "Surekha@123",
  },
  production: {
    baseUrl: process.env.PROD_BASE_URL || "",
    username: process.env.PROD_USER || "",
    password: process.env.PROD_PASS || "",
  },
};
