import type { AppProps as NextAppProps } from 'next/app';
import createEmotionCache from '@/util/createEmotionCache';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

export type NextPageWithLayout<TProps = {}, TInitialProps = TProps> = NextPage<TProps, TInitialProps> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

export type AppProps = NextAppProps & {
    readonly emotionCache?: ReturnType<typeof createEmotionCache>;
    readonly Component: NextPageWithLayout;
};
