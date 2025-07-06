import {twMerge} from "tailwind-merge";
import {clsx} from "clsx";

export const CN = (...inputs: string[]) => {
    return twMerge(clsx(inputs));
}

export const GetDayOfWeek = (date: Date) => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = date.getDay();
    return isNaN(dayOfWeek) ? null : weekdays[date.getDay()];
}
