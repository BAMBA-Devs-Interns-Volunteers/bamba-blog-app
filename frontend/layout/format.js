import Header from "../components/header"
import Footer from "../components/footer"
import Head from "next/head"

export default function format( { children, posts, comments }){

    return (
        <>
            <Head>
                <title>Bamba community</title>
            </Head>

            <Header posts={posts}></Header>
            <main comment={comments}>{children}</main>
            <Footer></Footer>
        </>
    )
} 