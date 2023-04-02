import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '@/theme';
import createEmotionCache from '@/util/createEmotionCache';
import type { AppProps } from '@/interface/app';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const App = ({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache
}: AppProps) => {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <CssVarsProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
            </CssVarsProvider>
        </CacheProvider>
    );
};

export default appWithTranslation(App);
