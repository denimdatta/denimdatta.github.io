import {render, screen} from '@testing-library/react'
import {describe, expect, it} from "vitest";
import Projects from "../../src/components/Projects";

describe('Projects', () => {
	it('renders projects section correctly', () => {
		render(<Projects/>);
		expect(screen.getByText('Featured')).toBeInTheDocument();
		expect(screen.getByText('Projects')).toBeInTheDocument();
	});

	it('displays project cards', () => {
		render(<Projects/>);
		expect(screen.getByText('Protfolio Website')).toBeInTheDocument();
		expect(screen.getByText('Malware Family Analysis')).toBeInTheDocument();
		expect(screen.getByText('Secure Banking System')).toBeInTheDocument();
	});

	it('renders project tags', () => {
		render(<Projects/>);
		["React", "Tailwind CSS", "TypeScript", "Java"].forEach((tag) => {
			const tagElems = screen.getAllByText(tag);
			expect(tagElems.length).to.be.greaterThanOrEqual(1);
			tagElems.forEach((elem) => {
				expect(elem).toBeInTheDocument();
			});
		});
	});

	it('renders github and demo links correctly', () => {
		render(<Projects/>);
		const githubLinks = screen.getAllByRole('link');
		expect(githubLinks).toHaveLength(5); // 3 github links + 1 demo link + 1 check github link
		expect(githubLinks[0]).toHaveAttribute('href', 'https://github.com/denimdatta/denimdatta.github.io');
		expect(githubLinks[1]).toHaveAttribute('href', 'https://denimdatta.github.io');
	});
});
