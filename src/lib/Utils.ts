import {twMerge} from "tailwind-merge";
import {clsx} from "clsx";

export const CN = (...inputs: string[]) => {
    return twMerge(clsx(inputs));
}