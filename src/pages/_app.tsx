import Layout from "@/component/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  const { session } = pageProps;
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </SessionProvider>
  );
}
