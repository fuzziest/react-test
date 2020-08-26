import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const items = [
    { url: '/', label: 'Главная' },
    { url: '/history', label: 'История' },
  ];
  return (
    <header>
      {items.map(({ url, label }) => (
        <NavLink key={url} exact to={url} activeStyle={{ color: 'black' }}>
          {label}
        </NavLink>
      ))}
    </header>
  );
};

export default Header;
