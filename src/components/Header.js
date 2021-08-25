import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      name: 'Rockets',
      path: '/rockets',
    },
    {
      name: 'Missions',
      path: '/missions',
    },
    {
      name: 'Dragons',
      path: '/dragons',
    },
    {
      name: 'MyProfile',
      path: 'my-profile',
    },
  ];
  const NavComps = links.map(({ name, path }) => (
    <NavLink to={path} key={name}>
      {name}
    </NavLink>
  ));
  return (
    <div className="Header">
      {NavComps}
    </div>
  );
};

export default Header;
