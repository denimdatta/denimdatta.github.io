import {act, render, RenderResult} from '@testing-library/react'
import {describe, expect, it} from "vitest";
import {userEvent} from "@testing-library/user-event";
import Navigation from "../../src/components/Navigation";

describe('Navigation', () => {

	it('renders navigation links correctly', () => {
		const renderResult = render(<Navigation/>);

		expect(renderResult.getAllByText("Home").length).toEqual(2);
		expect(renderResult.getAllByText("About Me").length).toEqual(2);
		expect(renderResult.getAllByText("Timeline").length).toEqual(2);
		expect(renderResult.getAllByText("Career").length).toEqual(2);
		expect(renderResult.getAllByText("Skills").length).toEqual(2);
		expect(renderResult.getAllByText("Projects").length).toEqual(2);
	});

	it('toggles mobile menu on button click', async () => {
		const ue = userEvent.setup();
		const renderResult = render(<Navigation/>);

		const mobileMenu = renderResult.getByLabelText("Mobile Menu");
		expect(mobileMenu.outerHTML).toContain("opacity-0");

		const btnMenuOpen = renderResult.getByRole('button', {name: 'Open Menu'});
		await ue.click(btnMenuOpen);

		expect(mobileMenu.outerHTML).toContain("opacity-100");

		const btnMenuClose = renderResult.getByRole('button', {name: 'Close Menu'});
		await ue.click(btnMenuClose);
		expect(mobileMenu.outerHTML).toContain("opacity-0");
	});
});
