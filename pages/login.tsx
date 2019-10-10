import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Login</h1>
      <p>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </p>
    </Layout>
  );
};

export default LoginPage;
