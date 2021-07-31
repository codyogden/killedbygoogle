import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';

export default function ProductPage() {
    const router = useRouter()
    const { slug } = router.query
    return (
        <>
        <Head>
            <title>Google Bookmarks</title>
        </Head>
        <Header />
            Project page for {slug}.
        </>
    );
}
