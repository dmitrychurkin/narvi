import { PropsWithChildren, memo } from "react";
import { useTheme } from '@mui/material/styles';
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DRAWER_WIDTH, Direction } from "@/config/ui";
import DrawerHeader from "./DrawerHeader";
import { isBrowser } from "@/util/env";

type Props = DrawerProps & {
    readonly onClose: () => void;
};

const Drawer = ({ children, onClose, ...props }: PropsWithChildren<Props>) => {
    const theme = useTheme();

    const container = isBrowser()
        ? () => document.body
        : undefined;

    return (
        <MuiDrawer
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: {
                    xs: 'block',
                    sm: 'none'
                },
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: DRAWER_WIDTH
                },
            }}
            onClose={onClose}
            container={container}
            {...props}

        >
            <DrawerHeader>
                <IconButton
                    onClick={onClose}
                >
                    {theme.direction === Direction.LTR
                        ? <ChevronLeftIcon />
                        : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            {children}
        </MuiDrawer>
    );
};

export default memo(Drawer);
