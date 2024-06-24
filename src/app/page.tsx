import Head from "next/head";
import Parent from "../components/Pocket_Money/Parent";
import Colour_Palate from "../components/colour_palate/colour";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Money Management</title>
        <meta name="description" content="A simple money management app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Parent />
        <Colour_Palate />
      </main>
    </div>
  );
};

export default Home;
