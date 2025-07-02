import { render, screen } from '@testing-library/react'
import {describe, it} from "vitest";
import DenimDatta from "../../src/components/DenimDatta";

describe('DenimDatta', () => {
    it('renders the DenimDatta component', () => {
        render(<DenimDatta/>)

        screen.debug(); // prints out the jsx in the App component unto the command line
    });
})