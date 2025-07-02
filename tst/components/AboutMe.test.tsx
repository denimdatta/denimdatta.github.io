import { render, screen } from '@testing-library/react'
import {describe, it} from "vitest";
import AboutMe from "../../src/components/AboutMe";

describe('AboutMe', () => {
    it('renders the AboutMe component', () => {
        render(<AboutMe/>)

        screen.debug(); // prints out the jsx in the App component unto the command line
    });
})