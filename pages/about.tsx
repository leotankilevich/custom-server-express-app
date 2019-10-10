import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About Next.js 👋</h1>
      <p>
        <Link href="/home">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
