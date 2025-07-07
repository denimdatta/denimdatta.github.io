import {render} from '@testing-library/react'
import {describe, expect, it} from "vitest";
import Footer from "../../src/components/Footer";

describe('Footer', () => {
	it('renders the Footer component (Default)', () => {
		const renderResult = render(<Footer/>)

		const date = new Date();
		const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const dateStr = date.toDateString().substring(4);
		const day = weekday[date.getDay()];

		expect(renderResult.baseElement.innerHTML).toContain(dateStr);
		expect(renderResult.baseElement.innerHTML).toContain("Denim Datta");
		expect(renderResult.baseElement.innerHTML).toContain(day);
	});
});
