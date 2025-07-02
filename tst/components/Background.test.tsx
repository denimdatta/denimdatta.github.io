import { render, screen } from '@testing-library/react'
import {describe, it} from "vitest";
import Background from "../../src/components/Background";

describe('Background', () => {
    it('renders the Background component', () => {
        render(<Background/>)

        screen.debug(); // prints out the jsx in the App component unto the command line
    });
})