'use client';

import React, { ReactNode } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const NextBreadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <div className='bg-orange text-decoration-none'>
      <Breadcrumb
        listProps={{
          className: 'm-0 d-flex align-items-center flex-row py-2 px-4',
        }}
      >
        <Breadcrumb.Item
          className='text-decoration-none text-white'
          linkProps={{
            className: 'text-decoration-none text-white fw-light',
          }}
          href='/'
        >
          Home
        </Breadcrumb.Item>
        {pathNames.length > 0 &&
          pathNames.map((link, index) => {
            let href = `/${pathNames.slice(0, index + 1).join('/')}`;
            let itemLink = link[0].toUpperCase() + link.slice(1, link.length);
            const isLast = index === pathNames.length - 1;
            return (
              <Breadcrumb.Item
                href={href}
                linkProps={{
                  className: `text-decoration-none  ${
                    isLast ? 'text-white' : 'fw-light text-white'
                  }`,
                }}
              >
                {itemLink}
              </Breadcrumb.Item>
            );
          })}
      </Breadcrumb>
    </div>
  );
};

export default NextBreadcrumb;