import { memo } from "react";
import TextField, { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from "@mui/material/MenuItem";

type TextFieldProps = Omit<MuiTextFieldProps, 'InputProps' | 'variant'>;

type Props = {
    readonly TextFieldProps: TextFieldProps,
    readonly SelectProps: TextFieldProps & {
        readonly options: Array<
            Readonly<{
                value: string;
                label: string;
            }>
        >;
    }
};

const TextFieldSelect = ({ TextFieldProps, SelectProps }: Props) => {
    const { options, ...restSelectProps } = SelectProps;

    return (
        <TextField
            {...TextFieldProps}
            InputProps={{
                disableUnderline: true,
                sx: {
                    pr: 0
                },
                endAdornment: (
                    <TextField
                        {...restSelectProps}
                        select
                        InputProps={{
                            disableUnderline: true
                        }}
                        SelectProps={{
                            IconComponent: KeyboardArrowDownIcon,
                            sx: {
                                '& > div': {
                                    height: '100%',
                                    display: 'flex',
                                    py: 1.5,
                                    ':focus': {
                                        backgroundColor: 'transparent'
                                    }
                                },
                                '& > svg': {
                                    transition: theme => theme.transitions.create('transform', {
                                        easing: theme.transitions.easing.easeInOut,
                                        duration: theme.transitions.duration.shortest
                                    })
                                }
                            },
                            ...(restSelectProps.SelectProps ?? {})
                        }}
                        sx={{
                            width: 'min-content',
                            minWidth: 78,
                            alignSelf: 'flex-end',
                            '& .MuiInputBase-root.MuiInputBase-formControl': {
                                borderWidth: 0
                            },
                            ...(restSelectProps.sx ?? {})
                        }}
                    >
                        {options.map(({ value, label }) => (
                            <MenuItem
                                key={value}
                                value={value}
                                sx={{
                                    justifyContent: 'center'
                                }}
                            >
                                {label}
                            </MenuItem>
                        ))}
                    </TextField>
                )
            }}
        />
    );
};

export default memo(TextFieldSelect);
