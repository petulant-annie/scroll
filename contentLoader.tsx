import React from 'react';
import ContentLoader from 'react-content-loader';

export const MyLoader = () => (
  <ContentLoader
    className="li"
    height={150}
    width={700}
    speed={2}
    primaryColor="#F5F5F5"
    secondaryColor="#E0E0E0"
    preserveAspectRatio="xMidYMid slice"
  >
    <rect
      x="10"
      y="10"
      rx="1"
      ry="1"
      width="130"
      height="130"
    />
    <rect
      x="170"
      y="18"
      rx="2"
      ry="2"
      width="160"
      height="10"
    />
    <rect
      x="170"
      y="40"
      rx="2"
      ry="2"
      width="220"
      height="10"
    />
    <rect
      x="170"
      y="65"
      rx="5"
      ry="5"
      width="25"
      height="25"
    />
  </ContentLoader>
);
