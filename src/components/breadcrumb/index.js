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
    <div className='bg-orange text-decoration-none shadow-sm'>
      <Breadcrumb
        listProps={{
          className: 'm-0 d-flex align-items-center flex-row pb-1 px-4 py-2 ',
        }}
      >
        <Breadcrumb.Item
          className='text-decoration-none text-white-trans'
          linkProps={{
            className: 'text-decoration-none text-white-trans ',
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
                    isLast ? 'text-white-trans' : 'text-white-trans'
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
