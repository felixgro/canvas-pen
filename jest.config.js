/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testMatch: ['**/?(*.)+(spec|test).js?(x)'],
	setupFiles: ['jest-canvas-mock'],
};
