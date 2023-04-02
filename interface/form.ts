export type FormValidator = {
    readonly required: boolean;
    readonly type?: HTMLInputElement['type'];
    readonly minLength?: number;
    readonly maxLength?: number;
    readonly min?: number;
    readonly max?: number;
};
