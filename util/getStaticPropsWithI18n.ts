import { Locale } from "@/config/i18n";
import type { GetStaticProps } from "next";
import type { UserConfig } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type GetStaticPropsWithI18nArg = {
    readonly initialLocale?: string;
    readonly namespacesRequired?: string[];
    readonly configOverride?: UserConfig | null;
    readonly extraLocales?: false | string[];
};

export default function getStaticPropsWithI18n({
    extraLocales,
    initialLocale = Locale.EN,
    namespacesRequired = [],
    configOverride = null
}: GetStaticPropsWithI18nArg = {}) {
    const getDefaultStaticProps: GetStaticProps = async ({
        locale,
    }) => ({
        props: {
            ...(await serverSideTranslations(
                locale ?? initialLocale, [
                'common',
                ...namespacesRequired,
            ],
                configOverride,
                extraLocales
            )),
        },
    });

    return getDefaultStaticProps;
};
