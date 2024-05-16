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
      title: 'Design & Planning',
      description:
        'We work hand-in-hand with architects to create beautiful and functional lighting plans for new builds and renovations. Our electrical sketches ensure everything is strategically placed for optimal functionality and aesthetics.',
    },
    {
      imageUrl: 'electrician.jpg',
      title: 'Certified Electric Fence Installation',
      description:
        'Keep your property safe with our accredited electric fence installations. We prioritize safety and adhere to all compliance regulations, providing a certificate upon completion for your peace of mind.',
    },
    {
      imageUrl: 'service5.jpg',
      title: 'Advanced Access Control Systems',
      description:
        'We offer a variety of access control solutions to manage entry and surveillance for locations of all sizes, from offices to apartment buildings. Our systems provide selective control, allowing you to grant access to specific areas for authorized personnel.',
    },
    {
      imageUrl: 'service2.png',
      title: '24/7 Emergency Response',
      description:
        "We understand that electrical emergencies can happen anytime. That's why we offer 24/7 emergency services to get your power back on as quickly and safely as possible.",
    },
    {
      imageUrl: 'service6.jpg',
      title: 'Seamless Home Automation',
      description:
        'Experience the convenience of home automation with Siavista Electrical. Control everything from your curtains and lighting to creating customized scenes, all from the comfort of your couch or even remotely through your smartphone or touchscreen.',
    },
    {
      imageUrl: 'service0.png',
      title: 'Load Shedding Solutions',
      description:
        'Say goodbye to the limitations of load shedding. We offer a variety of green energy solutions, including inverter installations for backup power or integration with solar panels, wind turbines, and generators. Let us help you design a system that keeps your home or business powered up during outages.',
    },
  ];

  return (
    <Layout>
      <main>
        <Hero />
        <About />
        <div id='services'>
          <Services services={servicesData} columnSize={4} />
        </div>
      </main>
    </Layout>
  );
}
