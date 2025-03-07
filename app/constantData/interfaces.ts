import type { City, ThemeMode, Timing } from "../constantData/enums";

export interface ThemeState {
    theme: ThemeMode
}

export interface FormState {
    timing: Timing,
    from: City,
    to: City,
    date: string,
    email: string,
}
