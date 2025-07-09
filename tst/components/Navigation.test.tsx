import {render} from '@testing-library/react'
import {describe, expect, it} from "vitest";
import {userEvent} from "@testing-library/user-event";
import Navigation from "../../src/components/Navigation";

describe('Navigation', () => {

	it('renders navigation links correctly', () => {
		const sections = ["Home", "About Me", "Timeline", "Career", "Skills", "Projects"];
		const types = ["Desktop", "Mobile"];

		const renderResult = render(<Navigation/>);

		sections.forEach((section) => {
			expect(renderResult.getAllByText(section).length).toEqual(2);
			types.forEach((type) => {
				expect(renderResult.getAllByLabelText(section + " " + type).length).toEqual(1);
			});
		});
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

	it('close mobile menu on menu option click', async () => {
		const ue = userEvent.setup();
		const renderResult = render(<Navigation/>);

		const mobileMenu = renderResult.getByLabelText("Mobile Menu");
		expect(mobileMenu.outerHTML).toContain("opacity-0");

		const btnMenuOpen = renderResult.getByRole('button', {name: 'Open Menu'});
		await ue.click(btnMenuOpen);

		expect(mobileMenu.outerHTML).toContain("opacity-100");

		const sectionLink = renderResult.getByLabelText("About Me Mobile");

		await ue.click(sectionLink);
		expect(mobileMenu.outerHTML).toContain("opacity-0");
	});
});
