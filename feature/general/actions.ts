import type { State } from "./types";
import type { StateHandler } from "@/interface/store";

export const toggleNavbar = (set: StateHandler<State>) =>
    (isOpen: boolean) => set(state => {
        state.isNavbarOpen = isOpen;
    });
