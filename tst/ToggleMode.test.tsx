import {render, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {beforeEach, describe, expect, it} from "vitest";
import ToggleMode from "../src/components/ToggleMode";

describe("ToggleMode", () => {
	beforeEach(() => {
		localStorage.clear();
		document.documentElement.classList.remove("dark");
	});

	it("respects stored light mode", async () => {
		localStorage.setItem("themeMode", "light");
		render(<ToggleMode/>);

		await waitFor(() => {
			expect(document.documentElement.classList.contains("dark")).toBe(false);
		});
		expect(localStorage.getItem("themeMode")).toBe("light");
	});

	it("toggles to dark mode on click", async () => {
		localStorage.setItem("themeMode", "light");
		const {getByRole} = render(<ToggleMode/>);
		const user = userEvent.setup();

		await user.click(getByRole("button"));

		await waitFor(() => {
			expect(document.documentElement.classList.contains("dark")).toBe(true);
		});
		expect(localStorage.getItem("themeMode")).toBe("dark");
	});
});
