// import {GetStaticProps} from "next"
// import Link from 'next/link'
// import Layout from '../components/Layout'

// const IndexPage = ({data}) =>
// {

//   console.log(data)

//   return (
//   <Layout title="Home | Next.js + TypeScript Example">
//     <h1 className="text-3xl font-bold underline text-red-600">
//       Hello world!
//     </h1>
//     <p>
//       <Link href="/about">
//         <a>About</a>
//       </Link>
//     </p>

//     <div className="flex sm:flex-row flex-col items-center justify-center flex-wrap p-3" >
//       {data.data.map(item => (

//         <div className="w-full sm:w-1/4 p-3 shadow flex flex-col items-center justify-center hover:bg-gray-700" key={item.mal_id}>
//           <img src={item.images.jpg.image_url} alt={item.name} className="rounded w-5/5 h-4/4" />
//           <Link href={item.url} target="_blank">
//           <a target="_blank" rel="noreferrer">
//           <div className="w-5/5">
//             <h3 className="text-xl text-center font-bold">{item.name}</h3>
//             <p className="text-sm">{item.about?.length > 120 && item.about.slice(0,120) + "..." }</p>
//             </div>
//             </a>
//             </Link>

//           </div>
//       ))}
//     </div>
//   </Layout>
// )
// }
// export const getStaticProps: GetStaticProps = async () => {
//   // Example for including static props in a Next.js function component page.
//   // Don't forget to include the respective types for any props passed into
//   // the component.
//   let url = 'https://api.jikan.moe/v4/characters?page=300'
//   let response = await fetch(url)
//   let data = await response.json()
//   return { props: { data } }
// }

// export default IndexPage shadow shadow-gray-600
import { ReactElement } from "react";
import Head from "next/head";

const Home = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Portfolio Home</title>
        <meta name="description" content="Kazuya Yuuki" />
        <meta property="og:title" content="Portfolio Home" />
        <meta property="og:description" content="Kazuya Yuuki" />
      </Head>
      <div className="container flex items-center justify-left h-screen bg-gray-900 text-red-500">
        <div className="border-1 rounded-lg  ml-3 p-[20px] w-full flex flex-col justify-center h-[300px]">
         
          <h1 className="md:text-9xl text-4xl font-semibold typing">
            <strong>K</strong>AZUY<strong>A</strong>
          </h1>
          <br />
          <p className="mt-3 font-thin none ">
            One Hell of a Developer, The world is build around trust and nothing
            is more trustworthy than me.
            <br />
            Contact me for all your needs.
            <br />
            <br />
            <span className="text-[12px]">
              Though i will overcharge, keep in mind that i am a Professional.
            </span>
          </p>
        </div>

        <div>
          <img src="../pu" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
