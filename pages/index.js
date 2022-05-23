import Head from "next/head";
import Image from "next/image";
import HomePage from "../components/HomeLayout/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spect Algo</title>
        <meta name="description" content="SpectAlgo's trading with software" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  );
}
