import Box from "@mui/material/Box";
import { PropsWithChildren, ReactNode, memo } from "react";

type Props = {
    readonly label: ReactNode;
};

const LabelledGroup = ({ children, label }: PropsWithChildren<Props>) => (
    <Box>
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
