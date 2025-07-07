import {render, screen} from '@testing-library/react'
import {describe, it} from "vitest";
import Timeline from "../../src/components/Timeline";

describe('Timeline', () => {
	it('renders the Timeline component', () => {
		render(<Timeline/>)

		screen.debug(); // prints out the jsx in the App component unto the command line
	});
})