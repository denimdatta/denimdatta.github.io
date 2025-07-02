import { render, screen } from '@testing-library/react'
import {describe, it} from "vitest";
import WorkExperience from "../../src/components/WorkExperience";

describe('WorkExperience', () => {
    it('renders the WorkExperience component', () => {
        render(<WorkExperience/>)

        screen.debug(); // prints out the jsx in the App component unto the command line
    });
})