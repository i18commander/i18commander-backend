import jestConfig from './jest.config';

/* eslint-disable */
export default {
  ...jestConfig,
  rootDir: './',
  // displayName: { name: 'e2e/translations-service', color: 'cyan' },
  testMatch: ['<rootDir>/e2e/?(*.)+(e2e-)(spec|test).[jt]s?(x)'],
};
