import {render, screen} from '@testing-library/react'
import {afterEach, describe, expect, it} from "vitest";
import {userEvent} from "@testing-library/user-event";
import ToggleMode from "../../src/components/ToggleMode";

describe('ToggleMode', () => {
	afterEach(() => {
		localStorage.clear();
	});

	it('renders the ToggleMode component default', () => {
		const renderResult = render(<ToggleMode/>);
		const btn = renderResult.getByRole('button');

		// Defaults to Dark mode
		// Sun symbol should be present (text-yellow-300)
		// Moon symbol should be absent (text-blue-900)
		expect(btn.innerHTML).toContain("text-yellow-300");
		expect(btn.innerHTML).not.toContain("text-blue-900");
	});

	it('renders the ToggleMode component with localStorage set to dark', () => {
		localStorage.setItem('themeMode', 'dark');
		const renderResult = render(<ToggleMode/>);
		const btn = renderResult.getByRole('button');

		// Dark mode from LocalStorage
		// Sun symbol should be present (text-yellow-300)
		// Moon symbol should be absent (text-blue-900)
		expect(btn.innerHTML).toContain("text-yellow-300");
		expect(btn.innerHTML).not.toContain("text-blue-900");
	});

	it('renders the ToggleMode component with localStorage set to light', () => {
		localStorage.setItem('themeMode', 'light');
		const renderResult = render(<ToggleMode/>);
		const btn = renderResult.getByRole('button');

		// Light mode from LocalStorage
		// Moon symbol should be present (text-blue-900)
		// Sun symbol should be absent (text-yellow-300)
		expect(btn.innerHTML).not.toContain("text-yellow-300");
		expect(btn.innerHTML).toContain("text-blue-900");
	});

	it('renders the ToggleMode component with button click to light mode', async () => {
		const ue = userEvent.setup();
		const renderResult = render(<ToggleMode/>);
		const btn = renderResult.getByRole('button');

		// Initially for Dark mode
		// Sun symbol should be present (text-yellow-300)
		// Moon symbol should be absent (text-blue-900)
		expect(btn.innerHTML).toContain("text-yellow-300");
		expect(btn.innerHTML).not.toContain("text-blue-900");
		await ue.click(btn);

		// Switched to light mode
		// Moon symbol should be present (text-blue-900)
		// Sun symbol should be absent (text-yellow-300)
		expect(btn.innerHTML).toContain("text-blue-900");
		expect(btn.innerHTML).not.toContain("text-yellow-300");
	});

	it('renders the ToggleMode component with button click to dark mode', async () => {
		const ue = userEvent.setup();
		localStorage.setItem('themeMode', 'light');
		const renderResult = render(<ToggleMode/>);
		const btn = renderResult.getByRole('button');

		// Light mode from LocalStorage
		// Moon symbol should be present (text-blue-900)
		// Sun symbol should be absent (text-yellow-300)
		expect(btn.innerHTML).toContain("text-blue-900");
		expect(btn.innerHTML).not.toContain("text-yellow-300");

		// Toggle Mode
		await ue.click(btn);

		// Switched to Dark mode
		// Sun symbol should be present (text-yellow-300)
		// Moon symbol should be absent (text-blue-900)
		expect(btn.innerHTML).toContain("text-yellow-300");
		expect(btn.innerHTML).not.toContain("text-blue-900");
	});

	it('renders the ToggleMode component with button click to multiple mode switch', async () => {
		const ue = userEvent.setup();
		const renderResult = render(<ToggleMode/>);
		const btn = renderResult.getByRole('button');

		// Initially for Dark mode
		// Sun symbol should be present (text-yellow-300)
		// Moon symbol should be absent (text-blue-900)
		expect(btn.innerHTML).toContain("text-yellow-300");
		expect(btn.innerHTML).not.toContain("text-blue-900");
		await ue.click(btn);

		// Switched to light mode
		// Moon symbol should be present (text-blue-900)
		// Sun symbol should be absent (text-yellow-300)
		expect(btn.innerHTML).toContain("text-blue-900");
		expect(btn.innerHTML).not.toContain("text-yellow-300");
		await ue.click(btn);

		// Switched back to Dark mode
		// Sun symbol should be present (text-yellow-300)
		// Moon symbol should be absent (text-blue-900)
		expect(btn.innerHTML).toContain("text-yellow-300");
		expect(btn.innerHTML).not.toContain("text-blue-900");
	});
});
