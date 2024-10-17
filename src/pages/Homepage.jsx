import React from 'react';
import { Main, Sidebar } from '../layouts';
import { SidebarMobile } from '../components';

const Homepage = () => {
  return (
    <>
      <Sidebar />
      <SidebarMobile />
      <Main />
    </>
  );
};

export default Homepage;
