import { TOOLBAR_HEIGHT } from '@/config/ui';
import { styled } from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    [theme.breakpoints.down('md')]: {
        minHeight: TOOLBAR_HEIGHT,
    }
}));

export default Toolbar;
