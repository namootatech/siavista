import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/layout';
const inter = Inter({ subsets: ['latin'] });
import Hero from '@/components/hero';
import About from '@/components/about';
export default function Home() {
  return (
    <Layout>
      <main
        // className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
      >
        <Hero className="mb-5"/>
        <div className="mt-5">
        </div>
        <About className="mt-5"/>
      </main>
    </Layout>
  );
}