import Image from 'next/image';

import Layout from '@/components/layout';

import { Container } from 'react-bootstrap';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import SellingPoints from '@/components/selling-points';
import PartnerStrip from '@/components/partner-strip';

export default function Home() {
  const servicesData = [
    {
      id: 'emergencies',
      imageUrl: 'service2.png',
      title: '24/7 Emergency Response',
      description:
        "We understand that electrical emergencies can happen anytime. That's why we offer 24/7 emergency services to get your power back on as quickly and safely as possible.",
    },

    {
      id: 'electrical-fencing',
      imageUrl: 'electrician.jpg',
      title: 'Certified Electric Fence Installation',
      description:
        'Keep your property safe with our accredited electric fence installations. We prioritize safety and adhere to all compliance regulations, providing a certificate upon completion for your peace of mind.',
    },
    {
      id: 'security',
      imageUrl: 'service5.jpg',
      title: 'Advanced Access Control Systems',
      description:
        'We offer a variety of access control solutions to manage entry and surveillance for locations of all sizes, from offices to apartment buildings. Our systems provide selective control, allowing you to grant access to specific areas for authorized personnel.',
    },

    {
      id: 'load-shedding',
      imageUrl: 'service0.png',
      title: 'Load Shedding Solutions',
      description:
        'Say goodbye to the limitations of load shedding. We offer a variety of green energy solutions, including inverter installations for backup power or integration with solar panels, wind turbines, and generators.',
    },
    {
      id: 'automations',
      imageUrl: 'service6.jpg',
      title: 'Seamless Home Automation',
      description:
        'Experience the convenience of home automation with Siavista Electrical. Control everything from your curtains and lighting to creating customized scenes, all from the comfort of your couch or even remotely through your smartphone or touchscreen.',
    },

    {
      id: 'lighting',
      imageUrl: 'service3.png',
      title: 'Design & Planning',
      description:
        'We work hand-in-hand with architects to create beautiful and functional lighting plans for new builds and renovations. Our electrical sketches ensure everything is strategically placed for optimal functionality and aesthetics.',
    },
  ];

  return (
    <Layout>
      <main className='overflow-hidden home-main'>
        <Container>
          <div className='m-md-5'>
            <Hero
              title='Work with us'
              image='/electrician.jpg'
              subtitle={'Power up with our unmatched service!'}
              description={
                <>
                  <p className='my-4'>
                    At Siavista Electrical, we believe in providing a seamless
                    and comprehensive electrical service experience. We go
                    beyond just fixing light fixtures or installing outlets. We
                    partner with you to ensure your electrical project is a
                    success, from the initial concept all the way to final
                    handover and acceptance.
                  </p>
                  <p>
                    Our certified and experienced electricians will meticulously
                    install all electrical components, adhering to the highest
                    safety standards and industry best practices. Click the
                    button below to find out more.
                  </p>
                </>
              }
              noButton
            />
          </div>
        </Container>
        {/* <About /> */}

        <SellingPoints />
        <Services services={servicesData} columnSize={4} />
      </main>
    </Layout>
  );
}
