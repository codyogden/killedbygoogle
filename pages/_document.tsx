import { AppType, ComponentsEnhancer, Enhancer } from 'next/dist/next-server/lib/utils';
import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        const enhanceApp: Enhancer<AppType> = (App) => (props) =>
            sheet.collectStyles(<App {...props} />)

        try {
            ctx.renderPage = () => originalRenderPage({ enhanceApp });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
}