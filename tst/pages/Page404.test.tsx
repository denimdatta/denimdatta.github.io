import { render, screen } from '@testing-library/react'
import {describe, it} from "vitest";
import Page404 from "../../src/pages/Page404";

describe('Page404', () => {
    it('renders the Page404 component', () => {
        render(<Page404/>)

        screen.debug(); // prints out the jsx in the App component unto the command line
    });
})