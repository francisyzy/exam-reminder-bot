import * as dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT || "3000",
  DATABASE_URL: process.env.DATABASE_URL,
  API_TOKEN: process.env.API_TOKEN,
  LOG_GROUP_ID: process.env.LOG_GROUP_ID,
  URL: process.env.URL,
  ADMIN_TELE_ID: Number(process.env.ADMIN_TELE_ID) || 0,
  NOTIFY_PATH: process.env.NOTIFY_PATH || "",
};

export default config;
