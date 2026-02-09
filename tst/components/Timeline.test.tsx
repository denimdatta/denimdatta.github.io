import {act, render} from '@testing-library/react'
import {describe, expect, it, vi} from "vitest";
import {FaBriefcase, FaMagnifyingGlass} from "react-icons/fa6";
import Timeline, {TimelineElement} from "../../src/components/Timeline";

describe('Timeline', () => {
	it('renders the Timeline component', () => {
		render(<Timeline/>);
	});

	it('builds icon symbols when no logo is provided', () => {
		const workEntry = new TimelineElement(
			"Work",
			"Test Company",
			"2020",
			"Remote",
			"Engineer",
			"Did things",
			""
		);
		expect(workEntry.symbol.type).toBe(FaBriefcase);

		const otherEntry = new TimelineElement(
			"Other",
			"Side Quest",
			"2021",
			"Remote",
			"Explorer",
			"Looked around",
			""
		);
		expect(otherEntry.symbol.type).toBe(FaMagnifyingGlass);
		expect(otherEntry.type).toBe("others");
	});

	it('updates visibility when entries intersect', () => {
		const originalObserver = globalThis.IntersectionObserver;
		const disconnect = vi.fn();
		const observe = vi.fn();
		const observerMock = vi.fn(function (this: IntersectionObserver, cb: IntersectionObserverCallback) {
			this.observe = observe;
			this.disconnect = disconnect;
			this.takeRecords = vi.fn();
			this.unobserve = vi.fn();
			(this as unknown as {__cb: IntersectionObserverCallback}).__cb = cb;
		});
		globalThis.IntersectionObserver = observerMock as unknown as typeof IntersectionObserver;

		const renderResult = render(<Timeline/>);
		const entry = renderResult.container.querySelector(".timlineBox");
		const instance = observerMock.mock.instances[0] as unknown as {__cb: IntersectionObserverCallback};
		act(() => instance.__cb([{isIntersecting: true} as IntersectionObserverEntry], observerMock as unknown as IntersectionObserver));

		expect(entry?.className).toContain("animate-appear-clear");

		globalThis.IntersectionObserver = originalObserver;
	});

	it('disconnects observer when ref is not attached', async () => {
		const originalObserver = globalThis.IntersectionObserver;
		const disconnect = vi.fn();
		const observe = vi.fn();
		const observerMock = vi.fn(function (this: IntersectionObserver) {
			this.observe = observe;
			this.disconnect = disconnect;
			this.takeRecords = vi.fn();
			this.unobserve = vi.fn();
		});
		globalThis.IntersectionObserver = observerMock as unknown as typeof IntersectionObserver;

		vi.resetModules();
		vi.doMock("react", async () => {
			const actual = await vi.importActual<typeof import("react")>("react");
			const lockedRef = {} as {current: HTMLDivElement | null};
			Object.defineProperty(lockedRef, "current", {
				get: () => null,
				set: () => {},
			});
			return {
				...actual,
				useRef: () => lockedRef,
			};
		});

		const {default: TimelineWithNullRef} = await import("../../src/components/Timeline");
		const {render: renderWithMock} = await import("@testing-library/react");
		const renderResult = renderWithMock(<TimelineWithNullRef/>);
		renderResult.unmount();

		expect(observe).not.toHaveBeenCalled();
		expect(disconnect).toHaveBeenCalled();

		vi.resetModules();
		vi.doUnmock("react");
		globalThis.IntersectionObserver = originalObserver;
	});
});
