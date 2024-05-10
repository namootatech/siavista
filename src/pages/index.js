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
      imageUrl: 'service3.png',
      title: 'Design Service',
      description: 'lighting design with architects we do appropriate electrical sketches for new buildings or those under renovation'
    },
    {
      imageUrl: 'electrician.jpg',
      title: 'Electric fence installation',
      description: 'We are accredited for electric fence installations. We have a certificate of compliance'
    },
    {
      imageUrl: 'service2.png',
      title: 'Field Service',
      description: 'Emergency services during non-standard hours, troubleshooting, on-site inspections, commissioning, investigations, and proactive maintenance.'
    },
    {
      imageUrl: 'service5.jpg',
      title: 'Access Control',
      description: 'We provide a variety of services for selective control surveillance, and access to locations or offices. '
    },
    {
      imageUrl: 'service6.jpg',
      title: 'Home Automation',
      description: 'Comprehensive automation solutions, such as curtain and lighting control, scene creation, and control through remote devices or touchscreen, whether you\'re nearby or far away.'
    },
    {
      imageUrl: 'service0.png',
      title: 'Load-shedding Solution',
      description: 'Green energy, Inverter installations as a backup system or with Solar panels Wind turbines Installations Generator Installations'
    }
  ];

  return (
    <Layout>
      <main>
        <Hero/>
        <About/>
        <div id="services">
          <Container>
            <h3 className="text-orange text-uppercase mb-3">What We Can Do for you!</h3>
          </Container>
          <Services services={servicesData} columnSize={4}/>
        </div>
      </main>
    </Layout>
  );
}