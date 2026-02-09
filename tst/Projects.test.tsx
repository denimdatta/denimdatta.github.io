import {render} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import Projects from "../src/components/Projects";

describe("Projects", () => {
	it("adds rel noopener for target blank links", () => {
		const {container} = render(<Projects/>);
		const links = Array.from(container.querySelectorAll('a[target="_blank"]'));

		expect(links.length).toBeGreaterThan(0);
		for (const link of links) {
			expect(link.getAttribute("rel")?.includes("noopener")).toBe(true);
		}
	});

	it("marks empty demo links as aria-disabled", () => {
		const {container} = render(<Projects/>);
		const disabledLinks = container.querySelectorAll('a[aria-disabled="true"]');

		expect(disabledLinks.length).toBe(2);
	});
});
