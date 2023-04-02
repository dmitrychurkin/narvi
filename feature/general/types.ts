export type State = {
    isNavbarOpen: boolean;
};

export type Actions = {
    readonly toggleNavbar: (isOpen: boolean) => void;
};

export type Repository = State & Actions;
