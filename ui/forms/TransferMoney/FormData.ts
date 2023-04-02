export const enum FormFields {
    FirstName = 'firstName',
    LastName = 'lastName',
    Email = 'email',
    Phone = 'phone',
    Amount = 'amount',
    Currency = 'currency',
    Iban = 'iban'
};

export type FormData = {
    readonly [FormFields.FirstName]: string;
    readonly [FormFields.LastName]: string;
    readonly [FormFields.Email]: string;
    readonly [FormFields.Phone]: string;
    readonly [FormFields.Amount]: string;
    readonly [FormFields.Currency]: string;
    readonly [FormFields.Iban]: string;
};

export const FormDefaults: FormData = {
    [FormFields.FirstName]: '',
    [FormFields.LastName]: '',
    [FormFields.Email]: '',
    [FormFields.Phone]: '',
    [FormFields.Amount]: '',
    [FormFields.Currency]: '',
    [FormFields.Iban]: ''
};
