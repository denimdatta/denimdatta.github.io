import {describe, expect, it} from "vitest";
import {CN, GetDayOfWeek} from "../../src/lib/Utils";

describe('Utility Class', () => {
	it('Test Classname Merge', () => {
		const t1 = "Test";
		const t2 = "Hello World";

		const result = CN(t1, "twMerge", t2);
		expect(result).toBe("Test twMerge Hello World");
	});

	it('Test GetDayOfWeek', () => {
		const date = new Date();

		const result = GetDayOfWeek(date);
		expect(result).toContain(date.toDateString().substring(0, 3));
	});

	it('Test GetDayOfWeek Invalid', () => {
		const date = new Date("Invalid");

		const result = GetDayOfWeek(date);
		expect(result).toBe(null);
	});
});
