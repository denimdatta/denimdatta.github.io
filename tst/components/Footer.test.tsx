import {render} from '@testing-library/react'
import {describe, it} from "vitest";
import Footer from "../../src/components/Footer";

describe('Footer', () => {
    it('renders the Footer component', () => {
        render(<Footer/>)

        screen.debug(); // prints out the jsx in the App component unto the command line
    });
})