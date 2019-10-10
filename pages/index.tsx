import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </p>
      <p>
        <Link href="/signup">
          <a>Sign up</a>
        </Link>
      </p>
      <h2>asda123123123sdasdsad</h2>
    </Layout>
  );
};

export default IndexPage;
