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
        <title>Milkshake</title>
        <meta name="description" content="Games by Milkshake" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-fredoka: ${fredoka.style.fontFamily};
        }
      `}</style>
      <SiteLayout>
        {isModal ? (
          <>
            <HomeContent />
            <Modal>
              <Component {...pageProps} />
            </Modal>
          </>
        ) : (
          <div key={router.asPath} className="page-transition">
            <Component {...pageProps} />
          </div>
        )}
      </SiteLayout>
    </>
  );
}
