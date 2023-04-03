import Box, { BoxProps } from "@mui/material/Box";
import { PropsWithChildren, ReactNode, memo } from "react";

type Props = {
    readonly label: ReactNode;
    readonly sx?: BoxProps['sx'];
};

const LabelledGroup = ({ children, label, sx }: PropsWithChildren<Props>) => (
    <Box
        sx={sx}
    >
        <Box
            sx={{
                fontSize: 'var(--macro-font-size-labelled-group)',
                lineHeight: 'var(--macro-line-height-labelled-group)',
                fontWeight: 'var(--macro-font-weight-labelled-group)',
                color: 'var(--macro-color-labelled-group)'
            }}
        >
            {label}
        </Box>
        <Box>{children}</Box>
    </Box>
);

export default memo(LabelledGroup);
