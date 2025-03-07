enum Timing {
    Morning = "morning",
    Afternoon = "afternoon",
}
enum City {
    Chakwal = "Chakwal",
    Dhudial = "Dhudial",
    Jatli = "Jatli",
    Mandra = "Mandra",
    Rawat = "Rawat",
    Gulberg = "Gulberg",
    Faizabad = "Faizabad",
}

enum ActionType {
    TOGGLE_THEME = "TOGGLE_THEME",
    UPDATE_FORM = "UPDATE_FORM",
    SET_ERROR = "SET_ERROR",
    CLEAR_ERROR = "CLEAR_ERROR"
}

enum ThemeMode {
    Dark = "dark",
    Light = "light"
}

export { Timing, City, ActionType, ThemeMode }