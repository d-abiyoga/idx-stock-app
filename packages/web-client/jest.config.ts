/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
/* module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
}; */
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}', '**/*.stories.{ts,tsx}'],
};
export default config;
