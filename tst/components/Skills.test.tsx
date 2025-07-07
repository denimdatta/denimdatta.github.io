import {render, screen} from '@testing-library/react'
import {describe, it} from "vitest";
import Skills from "../../src/components/Skills";

describe('Skills', () => {
	it('renders the Skills component', () => {
		render(<Skills/>)

		screen.debug(); // prints out the jsx in the App component unto the command line
	});
})