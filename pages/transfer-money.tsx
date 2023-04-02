import { Translations } from "@/config/i18n";
import App from "@/ui/layouts/App";
import getStaticPropsWithI18n from "@/util/getStaticPropsWithI18n";
import withPage from "@/util/withPage";
import Box from "@mui/material/Box";
import TransferMoneyForm from "@/ui/forms/TransferMoney";

const namespacesRequired = [Translations.TransferMoney];

const TransferMoney = () => {
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <Box
            sx={{
                my: 4,
                px: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <TransferMoneyForm
                onSubmit={onSubmit}
                translations={namespacesRequired}
            />
        </Box>
    );
};

export const getStaticProps = getStaticPropsWithI18n({
    namespacesRequired
});

export default withPage(TransferMoney)({
    layout: App
});
