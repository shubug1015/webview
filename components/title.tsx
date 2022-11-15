import Head from "next/head";

export default function Title({ title }: any) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
