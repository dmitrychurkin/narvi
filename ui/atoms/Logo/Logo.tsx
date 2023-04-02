import Link from "next/link";
import { memo } from "react";
import Routes from "@/config/routes/web";
import Box from "@mui/material/Box";

const Logo = () => (
    <Link href={Routes.Home}>
        <Box
            component='span'
            sx={{
                color: theme => theme.palette.common.white
            }}
        >
            narvi
        </Box>
        <Box
            component='span'
            sx={{
                color: 'var(--macro-green-light)'
            }}
        >
            .systems
        </Box>
    </Link>
);

export default memo(Logo);
