import { type NextPage } from "next";
import Head from "next/head";

import { ConnectWallet } from "../features/ConnectWallet";
import { Clerk } from "../features/Clerk";
import {Layout} from "../features/Layout";
import {ToggleTheme} from "../features/ToggleTheme";
import {SignIn} from "@clerk/nextjs";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Hackhaton starter</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              Hackathon<span className="text-accent">Starter</span> Kit
            </h1>
          </div>
          <ToggleTheme />
          <Clerk />
          <SignIn />
          <ConnectWallet />
      </Layout>
    </>
  );
};

export default Home;
