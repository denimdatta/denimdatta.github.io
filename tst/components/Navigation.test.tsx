import { render, screen } from '@testing-library/react'
import {describe, it} from "vitest";
import Navigation from "../../src/components/Navigation";

describe('Navigation', () => {
    it('renders the Navigation component', () => {
        render(<Navigation/>)

        screen.debug(); // prints out the jsx in the App component unto the command line
    });
})