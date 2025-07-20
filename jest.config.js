import dotenv from "dotenv";

dotenv.config();

const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testTimeout: 30000,
  roots: ["<rootDir>/tests"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  verbose: true,
};

export default config;
