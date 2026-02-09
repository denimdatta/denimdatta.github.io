import {act, render, screen} from '@testing-library/react'
import {afterEach, describe, expect, it} from "vitest";
import {userEvent} from "@testing-library/user-event";
import Home from "../../src/pages/Home";

describe('Home', () => {
	afterEach(() => {
		localStorage.clear();
	});

	it('renders the Home component (Default)', () => {
		const renderResult = render(<Home/>);
		const bgDark = renderResult.getByLabelText("animated-bg-dark");
		const bgLight = renderResult.getByLabelText("animated-bg-light");

		// Test that background is set to theme
		expect(bgDark.outerHTML).toContain("animated-bg-dark");
		expect(bgLight.outerHTML).toContain("animated-bg-light hidden");
		expect(bgDark.outerHTML).not.toContain("animated-bg-dark hidden");
	});

	it('renders the Home component (Toogle)', async () => {
		localStorage.setItem('themeMode', 'light');

		const ue = userEvent.setup();
		const renderResult = render(<Home/>);
		const bgDark = renderResult.getByLabelText("animated-bg-dark");
		const bgLight = renderResult.getByLabelText("animated-bg-light");

		// Test that background is set to theme
		expect(bgDark.outerHTML).toContain("animated-bg-dark hidden");
		expect(bgLight.outerHTML).toContain("animated-bg-light");
		expect(bgLight.outerHTML).not.toContain("animated-bg-light hidden");

		const toggleBtn = renderResult.getByText("Toggle Theme").parentElement?.firstElementChild;
		expect(toggleBtn).not.toBeNull();
		await ue.click(toggleBtn as HTMLElement);

		// Test that background is switched after toggle
		expect(bgDark.outerHTML).toContain("animated-bg-dark");
		expect(bgLight.outerHTML).toContain("animated-bg-light hidden");
		expect(bgDark.outerHTML).not.toContain("animated-bg-dark hidden");
	});

	it('renders the Home component (Resize)', () => {
		act(() => render(<Home/>));
		const bgDark = screen.getByLabelText("animated-bg-dark");
		const bgLight = screen.getByLabelText("animated-bg-light");

		// Test that background is set to theme
		expect(bgDark.outerHTML).toContain("animated-bg-dark");
		expect(bgLight.outerHTML).toContain("animated-bg-light hidden");
		expect(bgDark.outerHTML).not.toContain("animated-bg-dark hidden");

		// Simulate window resize
		Object.defineProperty(window, 'innerWidth', {writable: true, configurable: true, value: 750});
		Object.defineProperty(window, 'innerHeight', {writable: true, configurable: true, value: 500});
		act(() => window.dispatchEvent(new Event('resize')));

		// Test that background is still same
		expect(bgDark.outerHTML).toContain("animated-bg-dark");
		expect(bgLight.outerHTML).toContain("animated-bg-light hidden");
		expect(bgDark.outerHTML).not.toContain("animated-bg-dark hidden");
	});

	it('renders Skills component with initial "all" category', () => {
		const renderResult = render(<Home/>);
		const skillCards = renderResult.container.querySelectorAll('div[id^=SkillCard]');
		expect(skillCards.length).toBeGreaterThan(0);
	});

	it('filters Skills by category', async () => {
		const renderResult = render(<Home/>);
		const ue = userEvent.setup();

		const allCards = renderResult.container.querySelectorAll('div[id^=SkillCard]');

		await ue.click(renderResult.getByText('Backend'));

		const backendCards = renderResult.container.querySelectorAll('div[id^=SkillCard]');
		expect(backendCards.length).toBeLessThan(allCards.length);
	});

	it('sorts Skills by experience', () => {
		const renderResult = render(<Home/>);
		const skillCards = renderResult.container.querySelectorAll('div[id^=SkillCard]');

		const experienceValues = Array.from(skillCards).map(card => {
			const expText = card.querySelector('.text-sm')?.textContent;
			return parseFloat(expText?.replace('Y', '') || '0');
		});

		const isSorted = experienceValues.every((val, i) => i === 0 || val <= experienceValues[i - 1]);
		expect(isSorted).toBe(true);
	});
});
