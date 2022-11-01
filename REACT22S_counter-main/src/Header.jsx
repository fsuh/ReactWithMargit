import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <header>
      <h1>Counter app with React</h1>
      <h2>{props.something}</h2>
    </header>
  );
};

export default Header;
