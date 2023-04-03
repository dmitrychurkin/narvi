import { memo, MouseEvent } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import Box, { BoxProps } from '@mui/material/Box';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { PaymentMethod } from "@/config/business";
import type { StaticImageData } from "next/image";

type Props = {
    readonly value: PaymentMethod;
    readonly onChange: (value: PaymentMethod) => void;
    readonly model: Map<PaymentMethod, StaticImageData>;
    readonly sx?: BoxProps['sx'];
};

const PaymentMethodSelector = ({ value, onChange, model, sx = {} }: Props) => {
    const handleChange = (_: MouseEvent<HTMLElement>, value: PaymentMethod) => {
        onChange(value);
    };

    return (
        <ToggleButtonGroup
            value={value}
            exclusive
            onChange={handleChange}
            aria-label="payment method"
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, auto)',
                gap: 1.5,
                ...sx
            }}
        >
            {Array.from(model.entries()).map(([key, value]) => (
                <ToggleButton
                    key={key}
                    value={key}
                    aria-label={key}
                    sx={{
                        border: 'none',
                        borderRadius: '8px !important',
                        boxShadow: 'inset 0px 0px 0px 1px var(--macro-input-border-color)',
                    }}
                >
                    <Box
                        sx={{
                            backgroundImage: `url(${value.src})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            width: 88,
                            height: 55
                        }}
                    />
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};

export default memo(PaymentMethodSelector);
