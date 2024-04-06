import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { BentoGridThirdDemo } from "@/components/ui/DemoBentoGrid";

const Homepage: NextPage = () => {
  return (
    <div className="flex flex-col h-full overflow-auto">
      <Head>
        <title>elitecode</title>
      </Head>
      <main className="flex-1 bg-white p-8">
        <BentoGridThirdDemo></BentoGridThirdDemo>
      </main>
    </div>
  );
};

export default Homepage;
