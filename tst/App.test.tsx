import {render, screen} from '@testing-library/react'
import {describe, it} from "vitest";
import App from '../src/App'

describe('App', () => {
	it('renders the App component', () => {
		render(<App/>);
	});
});
