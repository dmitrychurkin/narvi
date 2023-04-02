import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import App from '@/ui/layouts/App';
import withPage from '@/util/withPage';
import getStaticPropsWithI18n from '@/util/getStaticPropsWithI18n';
import { useTranslation } from 'next-i18next';
import { Translations } from '@/config/i18n';
import bg from '@/assets/homePageBg.svg';
import Link from 'next/link';
import Routes from '@/config/routes/web';

const Home = () => {
    const { t } = useTranslation(Translations.HomePage);

    return (
        <Box
            sx={{
                my: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box
                component="h1"
                sx={{
                    textAlign: 'center',
                    fontSize: 'var(--macro-font-size-h1)',
                    fontWeight: 'var(--macro-font-weight-h1)',
                    lineHeight: 'var(--macro-line-height-h1)',
                    color: 'var(--macro-blue-dark)',
                }}
            >
                {t('h1')}
            </Box>
            <Box
                sx={{
                    mt: 8,
                    backgroundImage: `url(${bg.src})`,
                    width: '100%',
                    height: '100%',
                    minHeight: 189,
                }}
            />
            <Box
                sx={{
                    mt: 8,
                    textAlign: 'center',
                    fontSize: 'var(--macro-font-size-regular)',
                    fontWeight: 'var(--macro-font-weight-regular)',
                    lineHeight: 'var(--macro-line-height-regular)',
                    color: 'var(--macro-blue-dark)',
                    px: '10%'
                }}
            >
                {t('h2')}
            </Box>
            <Button
                variant='contained'
                disableElevation
                LinkComponent={Link}
                href={Routes.TransferMoney}
                sx={{
                    mt: 8,
                    py: 3,
                    backgroundColor: 'var(--macro-green-light)',
                    borderRadius: 3,
                    width: '100%',
                    maxWidth: 302,
                    color: 'var(--macro-blue-dark)',
                    fontWeight: 600,
                    fontSize: 20,
                    textTransform: 'capitalize',
                    ':hover': {
                        backgroundColor: 'var(--macro-green-light)'
                    }
                }}
            >
                {t('action')}
            </Button>
            <Button
                variant='contained'
                disableElevation
                sx={{
                    mt: 2,
                    backgroundColor: 'var(--macro-grey-light)',
                    borderRadius: 3,
                    width: '100%',
                    maxWidth: 302,
                    color: 'var(--macro-blue-light)',
                    fontSize: 'var(--macro-font-size-regular)',
                    textTransform: 'capitalize',
                    ':hover': {
                        backgroundColor: 'var(--macro-grey-light)',
                    }
                }}
            >
                {t('contact-us')}
            </Button>
        </Box>
    );
};

export const getStaticProps = getStaticPropsWithI18n({
    namespacesRequired: [Translations.HomePage]
});

export default withPage(Home)({
    layout: App
});
