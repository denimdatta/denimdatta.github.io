import "@testing-library/jest-dom/vitest"
import "@testing-library/jest-dom"
import {afterAll, afterEach, beforeAll, vi} from 'vitest'
import {cleanup} from '@testing-library/react'

// create global stubs before all tests
beforeAll(() => {
	const IntersectionObserverMock = vi.fn(() => ({
		disconnect: vi.fn(),
		observe: vi.fn(),
		takeRecords: vi.fn(),
		unobserve: vi.fn(),
	}));

	vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
})

// Clear stubs after all tests
afterAll(() => {
	vi.unstubAllGlobals();
})

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
	cleanup();
})