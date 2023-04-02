import { PropsWithChildren, memo } from "react";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import type { AppBarProps } from "@/ui/atoms/AppBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@/ui/atoms/Toolbar";
import Box from "@mui/material/Box";
import Drawer from "@/ui/atoms/Drawer";
import Nav from "@/ui/molecules/Nav";

type Props = AppBarProps & {
    readonly onClick: () => void;
};

const Header = ({ children, open, onClick }: PropsWithChildren<Props>) => (
    <>
        <AppBar
            position="static"
            component='nav'
        >
            <Toolbar
                sx={{
                    display: 'grid',
                    flexDirection: 'column-reverse',
                }}
            >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onClick}
                    edge="start"
                    sx={{
                        justifySelf: 'flex-end'
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                        flexGrow: 1,
                        alignSelf: 'flex-end',
                        textAlign: 'center'
                    }}
                >
                    {children}
                </Typography>
            </Toolbar>
        </AppBar>
        <Box component='nav'>
            <Drawer
                open={open}
                onClose={onClick}
                variant="temporary"
                anchor="right"
            >
                <Nav />
            </Drawer>
        </Box>
    </>
);

export default memo(Header);
