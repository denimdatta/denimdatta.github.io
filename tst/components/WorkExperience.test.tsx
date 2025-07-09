import {render} from '@testing-library/react'
import {describe, expect, it} from "vitest";
import WorkExperience from "../../src/components/WorkExperience";

describe('WorkExperience', () => {
	it('displays the work experience section title', () => {
		const renderResult = render(<WorkExperience/>);

		expect(renderResult.getByText((_, element) => element.textContent === 'Work Experience')).toBeInTheDocument();
	});

	it('displays company name and position', () => {
		const renderResult = render(<WorkExperience/>);

		expect(renderResult.getByText("Amazon")).toBeInTheDocument();
		expect(renderResult.getByText("Software Development Engineer")).toBeInTheDocument();

		expect(renderResult.getByText("Aricent")).toBeInTheDocument();
		expect(renderResult.getByText("Senior Software Engineer")).toBeInTheDocument();

		expect(renderResult.getByText("Microsoft (R&D)")).toBeInTheDocument();
		expect(renderResult.getByText("Intern - SDET")).toBeInTheDocument();
	});

});
