import React from 'react';
import ContentLoader from 'react-content-loader';

export const MyLoader = () => (
  <ContentLoader
    height={160}
    width={500}
    speed={3}
    primaryColor="#f3f3f3"
    secondaryColor="#d4d6d6"
  >
    <rect x="9" y="16" rx="4" ry="4" width="105" height="75" />
    <rect x="128" y="18" rx="3" ry="3" width="160" height="10" />
    <rect x="127" y="40" rx="3" ry="3" width="220" height="10" />
    <rect x="126" y="60" rx="3" ry="3" width="70" height="30" />
  </ContentLoader>
);
