import type { FormValidator } from "@/interface/form";
import { FormData, FormFields } from "./FormData";
import { object, string, number } from "yup";

export const validator: Record<keyof FormData, FormValidator> = {
    [FormFields.FirstName]: {
        required: true,
        minLength: 2,
        maxLength: 50
    },
    [FormFields.LastName]: {
        required: true,
        minLength: 2,
        maxLength: 50
    },
    [FormFields.Email]: {
        type: 'email',
        required: true,
        maxLength: 200
    },
    [FormFields.Phone]: {
        type: 'tel',
        required: true,
        maxLength: 25
    },
    [FormFields.Amount]: {
        type: 'number',
        required: true,
        min: 0.01,
        max: 1000000
    },
    [FormFields.Currency]: {
        required: true
    },
    [FormFields.Iban]: {
        required: true,
        minLength: 2,
        maxLength: 10
    }
};

const useSchema = () =>
    object()
        .shape({
            firstName: string()
                .min(validator[FormFields.FirstName].minLength!)
                .max(validator[FormFields.FirstName].maxLength!)
                .required(),
            lastName: string()
                .min(validator[FormFields.LastName].minLength!)
                .max(validator[FormFields.LastName].maxLength!)
                .required(),
            email: string()
                .email()
                .max(validator[FormFields.Email].maxLength!)
                .required(),
            phone: string()
                .max(validator[FormFields.Phone].maxLength!)
                .required(),
            amount: number()
                .min(validator[FormFields.Amount].min!)
                .max(validator[FormFields.Amount].max!)
                .required(),
            currency: string()
                .required(),
            iban: string()
                .min(validator[FormFields.Iban].minLength!)
                .max(validator[FormFields.Iban].maxLength!)
                .required()
        });

export default useSchema;
