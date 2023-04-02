import { styled } from '@mui/material/styles';
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiAppBar from '@mui/material/AppBar';

export type Props = MuiAppBarProps & {
    open?: boolean;
}

const AppBar = styled(MuiAppBar)<Props>(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
}));

export default AppBar;
