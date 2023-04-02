import type { Actions, State } from "./types";

export const selectIsNavbarOpen = (state: State) => state.isNavbarOpen;
export const selectToggleNavbar = (state: Actions) => state.toggleNavbar;
