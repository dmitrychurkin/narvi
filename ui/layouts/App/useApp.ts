import useGeneralStore from "@/feature/general/useStore";
import { selectIsNavbarOpen, selectToggleNavbar } from "@/feature/general/selectors";

export default function useApp() {
    const isNavbarOpen = useGeneralStore(selectIsNavbarOpen);
    const toggleNavbar = useGeneralStore(selectToggleNavbar);

    const onCloseNavbar = () => {
        toggleNavbar(false);
    };

    const onOpenNavbar = () => {
        toggleNavbar(true);
    };

    const onToggleNavbar = () => {
        toggleNavbar(!isNavbarOpen);
    };

    return {
        isNavbarOpen,
        onCloseNavbar,
        onOpenNavbar,
        onToggleNavbar
    };
};
