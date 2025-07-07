import {render, screen} from '@testing-library/react'
import {describe, it} from "vitest";
import Projects from "../../src/components/Projects";

describe('Projects', () => {
	it('renders the Projects component', () => {
		render(<Projects/>)

		screen.debug(); // prints out the jsx in the App component unto the command line
	});
})