import {render} from '@testing-library/react'
import {describe, it} from "vitest";
import Timeline from "../../src/components/Timeline";

describe('Timeline', () => {
	it('renders the Timeline component', () => {
		render(<Timeline/>);
	});
});
