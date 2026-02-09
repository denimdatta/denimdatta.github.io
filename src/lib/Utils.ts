import {twMerge} from "tailwind-merge";
import {clsx, type ClassValue} from "clsx";

export const CN = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
}

export const GetDayOfWeek = (date: Date) => {
	const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const dayOfWeek = date.getDay();
	return isNaN(dayOfWeek) ? null : weekdays[dayOfWeek];
}

export const IsNullOrEmpty = (value: string | null | undefined): boolean => {
	return value == null || (typeof value === 'string' && value.trim().length === 0);
}
