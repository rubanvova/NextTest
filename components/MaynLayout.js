import React from 'react';
import Router from 'next/router';

const MaynLayout = ({ children }) => {
  return (
    <>
      <nav>
        <h1>navigation</h1>
        <button onClick={() => Router.push('/')}>Home</button>
        <button onClick={() => Router.push('/about')}>About</button>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default MaynLayout;
