/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testMatch: ['**/test/**/*.(test|spec).js?(x)', '**/?(*.)+(spec|test).js?(x)'],
	setupFiles: ['jest-canvas-mock'],
};
