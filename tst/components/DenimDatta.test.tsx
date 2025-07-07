import {act, render, RenderResult} from '@testing-library/react'
import {describe, expect, it} from "vitest";
import DenimDatta from "../../src/components/DenimDatta";

describe('DenimDatta', () => {
	it('renders the DenimDatta component (Default)', () => {
		const renderResult = render(<DenimDatta/>);

		const scroll = renderResult.getByText("Scroll").parentElement;
		expect(scroll.outerHTML).toContain("animate-bounce");
		expect(scroll.outerHTML).not.toContain("animate-bounce hidden");
	});

	it('renders the DenimDatta component (Scroll)', () => {
		let renderResult: RenderResult;

		act(() => {
			renderResult = render(<DenimDatta/>);
		});

		// Initially the Scroll should be present
		const scroll = renderResult.getByText("Scroll").parentElement;
		expect(scroll.outerHTML).toContain("animate-bounce");
		expect(scroll.outerHTML).not.toContain("animate-bounce hidden");

		Object.defineProperty(window, 'scrollY', {value: 200});
		act(() => window.dispatchEvent(new Event('scroll')));

		// After scrolling beyond a threshold, Scroll should be hidden
		expect(scroll.outerHTML).toContain("animate-bounce hidden");
	});

	it('renders the DenimDatta component (Scroll Up/Down)', () => {
		let renderResult: RenderResult;

		act(() => {
			renderResult = render(<DenimDatta/>);
		});

		// Initially the Scroll should be present
		const scroll = renderResult.getByText("Scroll").parentElement;
		expect(scroll.outerHTML).toContain("animate-bounce");
		expect(scroll.outerHTML).not.toContain("animate-bounce hidden");

		// Scroll Down
		Object.defineProperty(window, 'scrollY', {value: 200});
		act(() => window.dispatchEvent(new Event('scroll')));

		// After scrolling down, Scroll should be hidden
		expect(scroll.outerHTML).toContain("animate-bounce hidden");

		// Scroll Up
		Object.defineProperty(window, 'scrollY', {value: 150});
		act(() => window.dispatchEvent(new Event('scroll')));

		// After scrolling up, Scroll should be visible
		expect(scroll.outerHTML).toContain("animate-bounce");
		expect(scroll.outerHTML).not.toContain("animate-bounce hidden");

		// Scroll Down
		Object.defineProperty(window, 'scrollY', {value: 151});
		act(() => window.dispatchEvent(new Event('scroll')));

		// After scrolling down, Scroll should be hidden
		expect(scroll.outerHTML).toContain("animate-bounce hidden");
	});
});
