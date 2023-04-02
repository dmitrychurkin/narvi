import { PropsWithChildren, memo } from "react";
import Container from '@mui/material/Container';
import Header from "@/ui/molecules/Header";
import Logo from "@/ui/atoms/Logo";
import useApp from "./useApp";

const App = ({ children }: PropsWithChildren) => {
    const { isNavbarOpen, onToggleNavbar } = useApp();

    return (
        <>
            <Header
                open={isNavbarOpen}
                onClick={onToggleNavbar}
            >
                <Logo />
            </Header>
            <Container
                component='main'
                maxWidth="sm"
            >
                {children}
            </Container>
        </>
    );
}

export default memo(App);
