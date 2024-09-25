/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

import { resolve } from 'path';
const root = resolve(__dirname, '..');

const rootConfig = require(`${root}/jest.config.ts`);

  const config: Config = {
    ...rootConfig, ...{
      rootDir: root,
      displayName: "end2end-tests",
      setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"],
      testMatch: ["<rootDir>/test/**/*.test.ts"],
    }
};

module.exports = config;