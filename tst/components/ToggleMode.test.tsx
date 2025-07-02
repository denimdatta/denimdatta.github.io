import { render, screen } from '@testing-library/react'
import {describe, it} from "vitest";
import ToggleMode from "../../src/components/ToggleMode";

describe('ToggleMode', () => {
    it('renders the ToggleMode component', () => {
        render(<ToggleMode/>)

        screen.debug(); // prints out the jsx in the App component unto the command line
    });
})