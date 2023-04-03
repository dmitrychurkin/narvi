import { memo } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CallMadeIcon from '@mui/icons-material/CallMade';
import { FieldValues, SubmitHandler, useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { FormData, FormDefaults, FormFields } from "./FormData";
import useSchema, { validator } from "./useSchema";
import { Translations } from "@/config/i18n";
import { useTranslation } from "next-i18next";
import LabelledGroup from "@/ui/atoms/LabelledGroup/LabelledGroup";
import Box from "@mui/material/Box";
import AmountSelector from "@/ui/atoms/TextFieldSelect/TextFieldSelect";
import PaymentMethodSelector from "@/ui/molecules/PaymentMethodSelector";
import { PaymentMethod, paymentMethodToLogoMap } from "@/config/business";

const currencies = [
    {
        value: 'USD',
        label: 'USD',
    },
    {
        value: 'EUR',
        label: 'EUR',
    },
    {
        value: 'BTC',
        label: 'BTC',
    },
    {
        value: 'JPY',
        label: 'JPY',
    },
];

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
        <Box
            component="form"
            onSubmit={handleSubmit(onFormSubmit)}
        >
            <LabelledGroup
                label={t('form.heading1')}
            >
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
            <LabelledGroup
                label={t('form.heading2')}
                sx={{
                    mt: 5
                }}
            >
                <AmountSelector
                    TextFieldProps={{
                        label: t('form.formElements.amount'),
                        sx: {
                            mt: 2,
                            width: '100%'
                        }
                    }}
                    SelectProps={{
                        defaultValue: 'EUR',
                        options: currencies
                    }}
                />
            </LabelledGroup>
            <LabelledGroup
                label={t('form.heading3')}
                sx={{
                    mt: 5
                }}
            >
                <Controller
                    control={control}
                    name={FormFields.Iban}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            sx={{
                                mt: 2,
                                width: '100%'
                            }}
                            type={validator[FormFields.Iban].type}
                            label={t('form.formElements.iban')}
                        />
                    )}
                />
            </LabelledGroup>
            <LabelledGroup
                label={t('form.heading4')}
                sx={{
                    mt: 5
                }}
            >
                <PaymentMethodSelector
                    sx={{
                        mt: 2,
                    }}
                    value={PaymentMethod.Bancontact}
                    onChange={() => { }}
                    model={paymentMethodToLogoMap}
                />
            </LabelledGroup>
            {/* TODO: refactor into component */}
            <Button
                variant='contained'
                disableElevation
                // LinkComponent={Link}
                // href={Routes.TransferMoney}
                endIcon={<CallMadeIcon />}
                sx={{
                    mt: 5,
                    py: 3,
                    display: 'flex',
                    mx: 'auto',
                    backgroundColor: 'var(--macro-green-light)',
                    borderRadius: 3,
                    width: '100%',
                    maxWidth: 302,
                    color: 'var(--macro-blue-dark)',
                    fontWeight: 600,
                    fontSize: 20,
                    textTransform: 'capitalize',
                    ':hover': {
                        backgroundColor: 'var(--macro-green-light)'
                    }
                }}
            >
                {t('form.action')}
            </Button>
        </Box>
    );
};

export default memo(TransferMoney);
