/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testMatch: ['**/test/**/*.(test|spec).ts?(x)'],
	setupFiles: ['jest-canvas-mock'],
};
