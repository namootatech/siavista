import Image from 'next/image';

import Layout from '@/components/layout';

import { Row, Col, Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { DbItems } from '@/components/db-items';
import { useState } from 'react';
import axios from 'axios';

export default function PortalPage() {
  const [passwordIncorrect, setPasswordIncorrect] = useState(true);
  const [password, setPassword] = useState('');
  const evaulatePassword = () => {
    axios.post('/api/password', { password }).then((res) => {
      console.log(res.data);
      setPasswordIncorrect(!res.data);
    });
  };

  return (
    <Layout>
      <main className='overflow-hidden home-main'>
        <Row className='d-flex flex-row justify-content-center align-items-center'>
          <Col lg={8} md={12} sm={10} xs={10} className='mt-2 mb-5 py-4'>
            <div id='history-section'>
              <h2 className='text-orange  display-4 funky-text my-4'>
                Webmaster Portal
              </h2>

              {passwordIncorrect && (
                <form onSubmit={evaulatePassword}>
                  <div class='mb-3'>
                    <label for='exampleInputPassword1' class='form-label'>
                      Password
                    </label>
                    <input
                      type='password'
                      class='form-control'
                      id='exampleInputPassword1'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type='submit' class='btn btn-warning'>
                    Submit
                  </button>
                </form>
              )}
              {!passwordIncorrect && (
                <>
                  <p className='lead'>
                    Welcome to the Siavista Electrical Webmaster Portal. Here,
                    you can manage testimonials, messages, and call me back
                    requests.
                  </p>
                  <p className='lead'>
                    Use the tabs below to navigate between the different
                    sections.
                  </p>
                  <Tabs
                    defaultActiveKey='testimonials'
                    id='justify-tab-example'
                    className='mb-3'
                    justify
                    disabled={passwordIncorrect}
                  >
                    <Tab
                      eventKey='testimonials'
                      title='Testimonials'
                      disabled={passwordIncorrect}
                    >
                      <DbItems type='testimonials' />
                    </Tab>
                    <Tab
                      eventKey='messages'
                      title='Messages'
                      disabled={passwordIncorrect}
                    >
                      <DbItems type='messages' />
                    </Tab>
                    <Tab
                      eventKey='callme-backs'
                      title='Call Me Backs'
                      disabled={passwordIncorrect}
                    >
                      <DbItems type='call-me-back' />
                    </Tab>
                    <Tab eventKey='settings' title='Website Settings' disabled>
                      Settings
                    </Tab>
                  </Tabs>
                </>
              )}
            </div>
          </Col>
        </Row>
      </main>
    </Layout>
  );
}
