import {render} from '@testing-library/react'
import {describe, it} from "vitest";
import Home from "../../src/pages/Home";

describe('Home', () => {
    it('renders the Home component', () => {
        render(<Home/>)

        screen.debug(); // prints out the jsx in the App component unto the command line
    });
})