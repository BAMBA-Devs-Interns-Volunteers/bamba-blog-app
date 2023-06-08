import Header from "../components/header"
import Footer from "../components/footer"
import Head from "next/head"

export default function format( { children}){

    return (
        <>
            <Head>
                <title>Bamba Community</title>
            </Head>

            <Header ></Header>
            <main >{children}</main>
            <Footer></Footer>
        </>
    )
} 