import Head from 'next/head';
import { getEmojiList } from '../lib/sheets';

export default function IndexPage({ emojis }) {
  return (
    <>
      <Head>
        <title>Title - FrasNym</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      {/* {emojis} */}
    </>
  );
}

export async function getStaticProps(context) {
  const emojis = await getEmojiList();
  return {
    props: {
    //   emojis: emojis.slice(1, emojis.length), // remove sheet header
        emojis,
    },
    revalidate: 1, // In seconds
  };
}