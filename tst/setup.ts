import "@testing-library/jest-dom/vitest"
import "@testing-library/jest-dom"
import {afterEach} from 'vitest'
import {cleanup} from '@testing-library/react'

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
	cleanup();
})