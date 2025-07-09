import {render} from '@testing-library/react'
import {describe, expect, it} from "vitest";
import Page404 from "../../src/pages/Page404";

describe('Page404', () => {
	it('renders the Page404 component', () => {
		const renderResult = render(<Page404/>);
		expect(renderResult.getAllByText("Page Not Found").length).toEqual(1);
	});
});
