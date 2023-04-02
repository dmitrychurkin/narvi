import { memo } from "react";
import TextField from "@mui/material/TextField";
import { FieldValues, SubmitHandler, useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { FormData, FormDefaults, FormFields } from "./FormData";
import useSchema, { validator } from "./useSchema";
import { Translations } from "@/config/i18n";
import { useTranslation } from "next-i18next";
import LabelledGroup from "@/ui/atoms/LabelledGroup/LabelledGroup";
import Box from "@mui/material/Box";

type Props<TForm = FormData> = {
    readonly translations: Array<Translations>;
    readonly onSubmit: (data: TForm) => void;
};

const TransferMoney = ({ translations, onSubmit }: Props) => {
    const { t } = useTranslation(translations);

    const schema = useSchema();

    const {
        control,
        handleSubmit
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: FormDefaults
    });

    const onFormSubmit: SubmitHandler<FieldValues> = data => {
        onSubmit(data as FormData);
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <LabelledGroup label={t('form.heading1')}>
                <Box
                    sx={{
                        mt: 1,
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        columnGap: 2
                    }}
                >
                    <Controller
                        control={control}
                        name={FormFields.FirstName}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label={t('form.formElements.firstName')}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name={FormFields.LastName}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label={t('form.formElements.lastName')}
                            />
                        )}
                    />
                </Box>
                <Controller
                    control={control}
                    name={FormFields.Email}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            sx={{
                                mt: 2,
                                width: '100%'
                            }}
                            type={validator[FormFields.Email].type}
                            label={t('form.formElements.email')}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name={FormFields.Phone}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            sx={{
                                mt: 2,
                                width: '100%'
                            }}
                            type={validator[FormFields.Phone].type}
                            label={t('form.formElements.phone')}
                        />
                    )}
                />
            </LabelledGroup>
        </form>
    );
};

export default memo(TransferMoney);
