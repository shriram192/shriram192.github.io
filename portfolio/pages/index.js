/** @format */

import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import TabsComponent from "../components/Tabs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>B SHRIRAM ATHREYA</title>
        <meta
          name="description"
          content="Final Year Computer Engineering Student with outstanding academic record. Successful project manager with relevant certifications who has leveraged latest technologies for driving business transformation."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box m="30px">
        <Intro />
        <TabsComponent />
      </Box>

      <Footer />
    </div>
  );
}
