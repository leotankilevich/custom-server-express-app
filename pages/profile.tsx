import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import { NextPage } from "next";

const ProfilePage: NextPage = () => {
  return (
    <Layout title="Profile | Next.js + TypeScript Example">
      <h1>Profile</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default ProfilePage;
