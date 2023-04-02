import type { NextPageWithLayout } from "@/interface/app";
import type { ComponentType, ReactNode } from "react";

type PageProps = {
    readonly layout: ComponentType<{
        readonly children: ReactNode;
    }>;
};

function withPage<TProps = {}, TInitialProps = TProps>(Component: ComponentType) {
    const Page: ComponentType & NextPageWithLayout<TProps, TInitialProps> = (props: any) => {
        return (
            <Component {...props} />
        );
    };

    return ({ layout: LayoutComponent }: PageProps) => {
        Page.getLayout = page => (
            <LayoutComponent>
                {page}
            </LayoutComponent>
        );

        return Page;
    };
};

export default withPage;
