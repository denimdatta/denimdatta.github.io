import {act, render} from '@testing-library/react'
import {describe, expect, it} from "vitest";
import Background from "../../src/components/Background";

describe('Background', () => {
	it('renders the Background component', () => {
		const renderResult = render(<Background/>);

		// Check Dark Background
		const bgDark = renderResult.getByLabelText("animated-bg-dark");
		expect(bgDark.outerHTML).toContain("animated-bg-dark");
		expect(bgDark.outerHTML).not.toContain("animated-bg-dark hidden");

		// Star and Meteor count
		const expectedStarCount = Math.floor(window.innerWidth * window.innerHeight / 10000);

		expect(renderResult.getAllByLabelText("star").length).toEqual(expectedStarCount);
		expect(renderResult.getAllByLabelText("meteor").length).toEqual(5);

		// Test Light Background
		const bgLight = renderResult.getByLabelText("animated-bg-light");
		expect(bgLight.outerHTML).toContain("animated-bg-light hidden");

		// Sun and Cloud Count
		expect(renderResult.getAllByLabelText("sun").length).toEqual(1);
		expect(renderResult.getAllByLabelText("cloud").length).toEqual(1);
	});


	it('renders the Background component with resize', () => {
		let renderResult: RenderResult;
		act(() => renderResult = render(<Background/>));

		// Star and Meteor count
		const expectedStarCount = Math.floor(window.innerWidth * window.innerHeight / 10000);
		expect(renderResult.getAllByLabelText("star").length).toEqual(expectedStarCount);
		expect(renderResult.getAllByLabelText("meteor").length).toEqual(5);

		// Sun and Cloud Count
		expect(renderResult.getAllByLabelText("sun").length).toEqual(1);
		expect(renderResult.getAllByLabelText("cloud").length).toEqual(1);

		// Simulate window resize
		Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 750});
		Object.defineProperty(window, 'innerHeight', {writable: true, configurable: true, value: 500});
		act(() => window.dispatchEvent(new Event('resize')));

		// Star and Meteor count
		const expectedStarCountNew = Math.floor(window.innerWidth * window.innerHeight / 10000);
		expect(renderResult.getAllByLabelText("star").length).not.toEqual(expectedStarCount);
		expect(renderResult.getAllByLabelText("star").length).toEqual(expectedStarCountNew);
		expect(renderResult.getAllByLabelText("meteor").length).toEqual(5);

		// Sun and Cloud Count
		expect(renderResult.getAllByLabelText("sun").length).toEqual(1);
		expect(renderResult.getAllByLabelText("cloud").length).toEqual(1);

	});
});
