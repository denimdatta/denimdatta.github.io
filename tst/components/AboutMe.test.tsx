import {render} from '@testing-library/react'
import {describe, expect, it} from "vitest";
import AboutMe from "../../src/components/AboutMe";

describe('AboutMe', () => {
	it('renders the AboutMe component', () => {
		render(<AboutMe/>);

		const renderBody = document.querySelector("body");

		expect(renderBody.innerHTML).toContain("Software Development Engineer");
		expect(renderBody.innerHTML).toContain("Download Resume");
		expect(renderBody.innerHTML).toContain("Resume.pdf");
		expect(renderBody.innerHTML).toContain("DenimDatta_Resume");

		expect(renderBody.innerHTML).toContain("Programmer");
		expect(renderBody.innerHTML).toContain("Software Developer");
		expect(renderBody.innerHTML).toContain("Computer Science");
	});
});
