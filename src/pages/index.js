import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/layout';
const inter = Inter({ subsets: ['latin'] });
import { Container } from 'react-bootstrap';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';


export default function Home() {

  const servicesData = [
    {
      imageUrl: 'electrician.jpg',
      title: 'Electric fence installation',
      description: 'We are accredited for electric fence installations. We have a certificate of compliance'
    },
    {
      imageUrl: 'electrician.jpg',
      title: 'Field Service',
      description: 'Emergency services during non-standard hours, troubleshooting, on-site inspections, commissioning, investigations, and proactive maintenance.'
    },
    {
      imageUrl: 'electrician.jpg',
      title: 'Design Service',
      description: 'lighting design with architects we do appropriate electrical sketches for new buildings or those under renovation'
    }
  ];

  return (
    <Layout>
      <main>
        <Hero className="mb-5"/>
        <div className="mt-5">
        </div>
        <About className="mt-5"/>
        <div id="services">
          <Services services={servicesData}/>
        </div>
      </main>
    </Layout>
  );
}