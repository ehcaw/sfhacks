import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Homepage } from "@/components/ui/Homepage";
import { Menu } from "@/components/Navbar";
import Recorder from "@/components/page/Recorder";
const LandingPage: NextPage = () => {
  return (
    <div className="flex flex-col h-full overflow-auto">
      <Head>
        <title>elitecode</title>
      </Head>
      <main className="flex-1 bg-white p-8">
        <Homepage />
      </main>
    </div>
  );
};

export default LandingPage;
