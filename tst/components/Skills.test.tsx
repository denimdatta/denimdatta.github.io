import {render} from '@testing-library/react'
import {describe, expect, it} from "vitest";
import {userEvent} from "@testing-library/user-event";
import Skills from "../../src/components/Skills";

const categories = ['All', 'Backend', 'Aws', 'Frontend', 'Tools'];

describe('Skills', () => {
	it('renders all category buttons', () => {
		const renderResult = render(<Skills/>);

		categories.forEach(category => {
			expect(renderResult.getByText(category)).toBeInTheDocument();
		});
	});

	it('filters skills when category is selected', async () => {
		const renderResult = render(<Skills/>);
		const user = userEvent.setup();

		await user.click(renderResult.getByText('Backend'));
		expect(renderResult.getByText('Java')).toBeInTheDocument();
		expect(renderResult.getByText('Python')).toBeInTheDocument();
		expect(renderResult.queryByText('React')).not.toBeInTheDocument();
		expect(renderResult.queryByText('Git')).not.toBeInTheDocument();
	});

	it('displays skill cards with correct information', () => {
		const renderResult = render(<Skills/>);

		const javaSkill = renderResult.getByText('Java');
		const experienceYears = renderResult.getByText('10Y');

		expect(javaSkill).toBeInTheDocument();
		expect(experienceYears).toBeInTheDocument();
	});

	it('handles category button clicks', async () => {
		const renderResult = render(<Skills/>);
		const user = userEvent.setup();

		const frontendButton = renderResult.getByText('Frontend');
		await user.click(frontendButton);

		expect(frontendButton).toHaveClass('bg-primary');
		expect(renderResult.getByText('React')).toBeInTheDocument();
	});

	it('All category should have all cards', async () => {
		const renderResult = render(<Skills/>);
		const user = userEvent.setup();

		const allButton = renderResult.getByText('All');
		await user.click(allButton);

		const allSkills = renderResult.container.querySelectorAll('div[id^=SkillCard]');
		let indvSkillsCounter = 0;

		for (const category1 of categories.filter(category => category !== 'All')) {
			const skillButton = renderResult.getByText(`${category1}`);
			await user.click(skillButton);
			const curSkills = renderResult.container.querySelectorAll(`div[id^=SkillCard]`);
			expect(curSkills.length).not.toEqual(allSkills.length);
			indvSkillsCounter += curSkills.length;
		}

		expect(indvSkillsCounter).toEqual(allSkills.length);
	});
});
