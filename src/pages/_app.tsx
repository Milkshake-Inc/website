import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { Inter, Fredoka } from "next/font/google";
import { SiteLayout } from "@/components/SiteLayout";
import { HomeContent } from "@/components/HomeContent";
import { Modal } from "@/components/Modal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isModal =
    router.pathname.startsWith("/work/") || router.pathname.startsWith("/blog/");

  return (
    <>
      <Head>
        <title>Milkshake Games</title>
        <meta name="description" content="A two-person studio making silly, fun, party games for the web." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff8ee" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Milkshake Games" />
        <meta property="og:title" content="Milkshake Games" />
        <meta property="og:description" content="A two-person studio making silly, fun, party games for the web." />
        <meta property="og:url" content="https://milkshake.io" />
        <meta property="og:image" content="https://milkshake.io/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Milkshake Games — silly, fun, party games" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Milkshake Games" />
        <meta name="twitter:description" content="A two-person studio making silly, fun, party games for the web." />
        <meta name="twitter:image" content="https://milkshake.io/og.png" />
      </Head>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-fredoka: ${fredoka.style.fontFamily};
        }
      `}</style>
      <SiteLayout>
        {router.pathname === "/" || isModal ? (
          <HomeContent />
        ) : (
          <div key={router.asPath} className="page-transition">
            <Component {...pageProps} />
          </div>
        )}
        {isModal && (
          <Modal maxWidth={router.pathname.startsWith("/blog/") ? "max-w-5xl" : "max-w-3xl"}>
            <Component {...pageProps} />
          </Modal>
        )}
      </SiteLayout>
    </>
  );
}
